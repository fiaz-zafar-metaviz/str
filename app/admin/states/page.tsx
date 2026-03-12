'use client'

import { useEffect, useState, useCallback, useRef } from 'react'

const GROUPS: Record<number, string> = {
  1: '🇺🇸 United States',
  2: '🌴 Caribbean',
  3: '🇲🇽 Mexico',
  4: '🇨🇦 Canada',
  5: '🌎 Central America',
  6: '🇪🇺 Europe',
}

type State = {
  id: string
  name: string
  slug: string
  group_id: number
  image: string | null
  thumbnail: string | null
  featured: boolean
  order: number
  created_at: string
  updated_at: string
}

export default function AdminStatesPage() {
  const [states, setStates] = useState<State[]>([])
  const [loading, setLoading] = useState(true)
  const [filterGroup, setFilterGroup] = useState<number | null>(null)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({
    name: '',
    group_id: 1,
    image: '',
    thumbnail: '',
    featured: false,
    order: 0,
  })

  const fetchStates = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/states')
      const data = await res.json()
      if (Array.isArray(data)) setStates(data)
    } catch (e) {
      console.error('Failed to fetch states:', e)
    }
    setLoading(false)
  }, [])

  useEffect(() => { fetchStates() }, [fetchStates])

  const resetForm = () => {
    setForm({ name: '', group_id: 1, image: '', thumbnail: '', featured: false, order: 0 })
    setEditingId(null)
    setShowForm(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const payload = { ...form, image: form.image || null, thumbnail: form.thumbnail || null }

    if (editingId) {
      await fetch(`/api/admin/states/${editingId}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
    } else {
      await fetch('/api/admin/states', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
    }
    resetForm()
    fetchStates()
  }

  const handleEdit = (s: State) => {
    setForm({ name: s.name, group_id: s.group_id, image: s.image || '', thumbnail: s.thumbnail || '', featured: s.featured, order: s.order })
    setEditingId(s.id)
    setShowForm(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this state?')) return
    await fetch(`/api/admin/states/${id}`, { method: 'DELETE' })
    fetchStates()
  }

  const imageRef = useRef<HTMLInputElement>(null)
  const thumbRef = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState<'image' | 'thumbnail' | null>(null)

  const handleUpload = async (file: File, field: 'image' | 'thumbnail') => {
    setUploading(field)
    const fd = new FormData()
    fd.append('file', file)
    fd.append('directory', 'images/states')
    try {
      const res = await fetch('/api/admin/upload', { method: 'POST', body: fd })
      const data = await res.json()
      if (data.url) setForm(f => ({ ...f, [field]: data.url }))
    } catch (e) {
      console.error('Upload failed:', e)
    }
    setUploading(null)
  }

  const filtered = filterGroup ? states.filter(s => s.group_id === filterGroup) : states

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Header */}
      <div className="border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">Manage States</h1>
        <button
          onClick={() => { resetForm(); setShowForm(true) }}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors"
        >
          + Add State
        </button>
      </div>

      <div className="px-6 py-4">
        {/* Group Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setFilterGroup(null)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${!filterGroup ? 'bg-blue-600' : 'bg-white/10 hover:bg-white/20'}`}
          >
            All ({states.length})
          </button>
          {Object.entries(GROUPS).map(([id, label]) => {
            const count = states.filter(s => s.group_id === Number(id)).length
            return (
              <button
                key={id}
                onClick={() => setFilterGroup(Number(id))}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${filterGroup === Number(id) ? 'bg-blue-600' : 'bg-white/10 hover:bg-white/20'}`}
              >
                {label} ({count})
              </button>
            )
          })}
        </div>

        {/* Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
            <form onSubmit={handleSubmit} className="bg-[#1a1a1a] rounded-xl p-6 w-full max-w-md border border-white/10">
              <h2 className="text-lg font-bold mb-4">{editingId ? 'Edit State' : 'Add State'}</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-white/60 mb-1">Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500"
                    placeholder="e.g. Alabama"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white/60 mb-1">Group *</label>
                  <select
                    value={form.group_id}
                    onChange={e => setForm(f => ({ ...f, group_id: Number(e.target.value) }))}
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500"
                  >
                    {Object.entries(GROUPS).map(([id, label]) => (
                      <option key={id} value={id}>{label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-white/60 mb-1">Image</label>
                  <div className="flex items-center gap-3">
                    {form.image && <img src={form.image} alt="" className="w-12 h-12 rounded object-cover" />}
                    <label className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white/40 cursor-pointer hover:bg-white/10 transition-colors text-center">
                      {uploading === 'image' ? 'Uploading...' : form.image ? 'Change Image' : 'Upload Image'}
                      <input
                        ref={imageRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={e => { const f = e.target.files?.[0]; if (f) handleUpload(f, 'image') }}
                      />
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-white/60 mb-1">Thumbnail</label>
                  <div className="flex items-center gap-3">
                    {form.thumbnail && <img src={form.thumbnail} alt="" className="w-12 h-12 rounded object-cover" />}
                    <label className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white/40 cursor-pointer hover:bg-white/10 transition-colors text-center">
                      {uploading === 'thumbnail' ? 'Uploading...' : form.thumbnail ? 'Change Thumbnail' : 'Upload Thumbnail'}
                      <input
                        ref={thumbRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={e => { const f = e.target.files?.[0]; if (f) handleUpload(f, 'thumbnail') }}
                      />
                    </label>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <label className="block text-sm text-white/60 mb-1">Order</label>
                    <input
                      type="number"
                      value={form.order}
                      onChange={e => setForm(f => ({ ...f, order: Number(e.target.value) }))}
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <label className="flex items-center gap-2 pt-5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.featured}
                      onChange={e => setForm(f => ({ ...f, featured: e.target.checked }))}
                      className="w-4 h-4 rounded border-white/20 bg-white/5"
                    />
                    <span className="text-sm">Featured</span>
                  </label>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button type="button" onClick={resetForm} className="flex-1 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors">
                  Cancel
                </button>
                <button type="submit" className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors">
                  {editingId ? 'Save Changes' : 'Add State'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Table */}
        {loading ? (
          <div className="text-center text-white/40 py-20">Loading...</div>
        ) : filtered.length === 0 ? (
          <div className="text-center text-white/40 py-20">No states found. Add your first state!</div>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="text-left px-4 py-3 text-white/60 font-medium">#</th>
                  <th className="text-left px-4 py-3 text-white/60 font-medium">Name</th>
                  <th className="text-left px-4 py-3 text-white/60 font-medium">Group</th>
                  <th className="text-left px-4 py-3 text-white/60 font-medium">Image</th>
                  <th className="text-center px-4 py-3 text-white/60 font-medium">Featured</th>
                  <th className="text-center px-4 py-3 text-white/60 font-medium">Order</th>
                  <th className="text-right px-4 py-3 text-white/60 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((s, i) => (
                  <tr key={s.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 text-white/40">{i + 1}</td>
                    <td className="px-4 py-3 font-medium">{s.name}</td>
                    <td className="px-4 py-3 text-white/60">{GROUPS[s.group_id] || s.group_id}</td>
                    <td className="px-4 py-3">
                      {(s.thumbnail || s.image) ? (
                        <img src={(s.thumbnail || s.image)!} alt={s.name} className="w-8 h-8 rounded object-cover" />
                      ) : (
                        <span className="text-white/20">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-center">{s.featured ? '⭐' : '—'}</td>
                    <td className="px-4 py-3 text-center text-white/60">{s.order}</td>
                    <td className="px-4 py-3 text-right">
                      <button onClick={() => handleEdit(s)} className="text-blue-400 hover:text-blue-300 text-xs mr-3">Edit</button>
                      <button onClick={() => handleDelete(s.id)} className="text-red-400 hover:text-red-300 text-xs">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
