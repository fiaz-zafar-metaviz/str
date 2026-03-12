'use client'

import { useState, useRef } from 'react'

interface UploadedFile {
  url: string
  key: string
  filename: string
  timestamp: number
}

const DIRECTORIES = [
  { label: 'States', value: 'images/states' },
  { label: 'Groups', value: 'images/groups' },
  { label: 'General', value: 'images/general' },
  { label: 'Amenities', value: 'images/amenities' },
  { label: 'Custom', value: '' },
]

export default function MediaManagerPage() {
  const [files, setFiles] = useState<File[]>([])
  const [previews, setPreviews] = useState<string[]>([])
  const [directory, setDirectory] = useState('images/general')
  const [customDir, setCustomDir] = useState('')
  const [customName, setCustomName] = useState('')
  const [uploading, setUploading] = useState(false)
  const [uploaded, setUploaded] = useState<UploadedFile[]>([])
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null)
  const [dragActive, setDragActive] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const activeDir = directory || customDir

  function handleFiles(newFiles: FileList | File[]) {
    const arr = Array.from(newFiles)
    setFiles(prev => [...prev, ...arr])
    arr.forEach(f => {
      const reader = new FileReader()
      reader.onload = (e) => setPreviews(prev => [...prev, e.target?.result as string])
      reader.readAsDataURL(f)
    })
  }

  function removeFile(index: number) {
    setFiles(prev => prev.filter((_, i) => i !== index))
    setPreviews(prev => prev.filter((_, i) => i !== index))
  }

  async function handleUpload() {
    if (!files.length || !activeDir) return
    setUploading(true)

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const formData = new FormData()
      formData.append('file', file)
      formData.append('directory', activeDir)
      // Only use custom name for single file uploads
      if (files.length === 1 && customName.trim()) {
        formData.append('name', customName.trim())
      }

      try {
        const res = await fetch('/api/admin/upload', { method: 'POST', body: formData })
        const data = await res.json()
        if (data.url) {
          setUploaded(prev => [{ url: data.url, key: data.key, filename: data.filename, timestamp: Date.now() }, ...prev])
        }
      } catch (err) {
        console.error('Upload failed:', err)
      }
    }

    setFiles([])
    setPreviews([])
    setCustomName('')
    setUploading(false)
  }

  function copyUrl(url: string) {
    navigator.clipboard.writeText(url)
    setCopiedUrl(url)
    setTimeout(() => setCopiedUrl(null), 2000)
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 md:p-10">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-2">Media Manager</h1>
        <p className="text-gray-400 mb-8">Upload files to R2 bucket and get URLs</p>

        {/* Upload Area */}
        <div className="rounded-xl border border-gray-800 bg-gray-900 p-6 mb-8">
          {/* Directory Selection */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">Directory</label>
            <div className="flex flex-wrap gap-2">
              {DIRECTORIES.map(d => (
                <button
                  key={d.label}
                  onClick={() => setDirectory(d.value)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    directory === d.value
                      ? 'bg-white text-black'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
            {directory === '' && (
              <input
                type="text"
                placeholder="e.g. images/custom-folder"
                value={customDir}
                onChange={e => setCustomDir(e.target.value)}
                className="mt-2 w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-white focus:outline-none"
              />
            )}
          </div>

          {/* Custom Name (optional) */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Custom Filename <span className="text-gray-500">(optional, single file only)</span>
            </label>
            <input
              type="text"
              placeholder="e.g. hero-background"
              value={customName}
              onChange={e => setCustomName(e.target.value)}
              className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-white focus:outline-none"
            />
          </div>

          {/* Drop Zone */}
          <div
            onClick={() => inputRef.current?.click()}
            onDragOver={e => { e.preventDefault(); setDragActive(true) }}
            onDragLeave={() => setDragActive(false)}
            onDrop={e => { e.preventDefault(); setDragActive(false); handleFiles(e.dataTransfer.files) }}
            className={`relative cursor-pointer rounded-xl border-2 border-dashed p-10 text-center transition-colors ${
              dragActive ? 'border-white bg-gray-800' : 'border-gray-700 hover:border-gray-500'
            }`}
          >
            <input
              ref={inputRef}
              type="file"
              multiple
              accept="image/*,video/*,.pdf,.svg"
              onChange={e => e.target.files && handleFiles(e.target.files)}
              className="hidden"
            />
            <svg className="mx-auto h-12 w-12 text-gray-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <p className="text-gray-400">Drop files here or <span className="text-white font-medium">click to browse</span></p>
            <p className="text-gray-600 text-xs mt-1">Images auto-convert to AVIF</p>
          </div>

          {/* Preview */}
          {previews.length > 0 && (
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {previews.map((src, i) => (
                <div key={i} className="group relative aspect-square overflow-hidden rounded-lg bg-gray-800">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={files[i]?.name} className="h-full w-full object-cover" />
                  <button
                    onClick={(e) => { e.stopPropagation(); removeFile(i) }}
                    className="absolute top-1 right-1 rounded-full bg-black/70 p-1 text-white opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-2 py-1">
                    <p className="truncate text-xs text-gray-300">{files[i]?.name}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Upload Button */}
          {files.length > 0 && (
            <button
              onClick={handleUpload}
              disabled={uploading || !activeDir}
              className="mt-4 w-full rounded-lg bg-white py-3 font-semibold text-black transition-colors hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {uploading ? 'Uploading...' : `Upload ${files.length} file${files.length > 1 ? 's' : ''}`}
            </button>
          )}
        </div>

        {/* Uploaded Files */}
        {uploaded.length > 0 && (
          <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
            <h2 className="text-lg font-semibold mb-4">Uploaded Files</h2>
            <div className="space-y-3">
              {uploaded.map((file, i) => (
                <div key={i} className="flex items-center gap-3 rounded-lg bg-gray-800 p-3">
                  {/* Thumbnail */}
                  <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg bg-gray-700">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={file.url} alt="" className="h-full w-full object-cover" />
                  </div>

                  {/* URL */}
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-white">{file.filename}</p>
                    <p className="truncate text-xs text-gray-400">{file.url}</p>
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={() => copyUrl(file.url)}
                    className={`flex-shrink-0 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                      copiedUrl === file.url
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {copiedUrl === file.url ? 'Copied!' : 'Copy URL'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
