'use client'

import { useEffect, useState, useCallback, useRef } from 'react'

type Group = { id: number; name: string }

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
  const [groups, setGroups] = useState<Group[]>([])
  const [loading, setLoading] = useState(true)
  const [filterGroup, setFilterGroup] = useState<number | null>(null)
  const [search, setSearch] = useState('')
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

  const fetchGroups = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/location-groups')
      const data = await res.json()
      if (Array.isArray(data)) setGroups(data)
    } catch (e) {
      console.error('Failed to fetch groups:', e)
    }
  }, [])

  useEffect(() => { fetchStates(); fetchGroups() }, [fetchStates, fetchGroups])

  const groupMap = Object.fromEntries(groups.map(g => [g.id, g.name]))

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

  const filtered = states
    .filter(s => !filterGroup || s.group_id === filterGroup)
    .filter(s => !search || s.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="min-h-screen bg-primary text-primary">
      {/* Header */}
      <div className="border-theme px-6 py-5 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">States</h1>
          <p className="text-muted text-sm mt-0.5">{states.length} total locations</p>
        </div>
        <button
          onClick={() => { resetForm(); setShowForm(true) }}
          className="px-5 py-2.5 gradient-royal text-white rounded-lg text-sm font-semibold transition-all hover:opacity-90 active:scale-95"
        >
          + Add State
        </button>
      </div>

      <div className="px-6 py-5 space-y-5">
        {/* Search */}
        <div className="relative">
          <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search states..."
            className="w-full pl-10 pr-4 py-2.5 bg-input border-theme rounded-lg text-primary text-sm focus:outline-none focus:border-blue-500 placeholder:text-subtle"
          />
        </div>

        {/* Group Filter */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilterGroup(null)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${!filterGroup ? 'gradient-royal text-white' : 'bg-secondary border-theme text-secondary hover:text-primary'}`}
          >
            All ({states.length})
          </button>
          {groups.map(g => {
            const count = states.filter(s => s.group_id === g.id).length
            return (
              <button
                key={g.id}
                onClick={() => setFilterGroup(g.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${filterGroup === g.id ? 'gradient-royal text-white' : 'bg-secondary border-theme text-secondary hover:text-primary'}`}
              >
                {g.name} ({count})
              </button>
            )
          })}
        </div>

        {/* Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={e => { if (e.target === e.currentTarget) resetForm() }}>
            <form onSubmit={handleSubmit} className="bg-secondary rounded-2xl p-6 w-full max-w-md border-theme shadow-2xl">
              <h2 className="text-lg font-bold mb-5">{editingId ? 'Edit State' : 'New State'}</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-muted mb-1.5">Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full px-3.5 py-2.5 bg-input border-theme rounded-lg text-primary text-sm focus:outline-none focus:border-blue-500 placeholder:text-subtle"
                    placeholder="e.g. Alabama"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted mb-1.5">Group *</label>
                  <select
                    value={form.group_id}
                    onChange={e => setForm(f => ({ ...f, group_id: Number(e.target.value) }))}
                    className="w-full px-3.5 py-2.5 bg-input border-theme rounded-lg text-primary text-sm focus:outline-none focus:border-blue-500"
                  >
                    {groups.map(g => (
                      <option key={g.id} value={g.id}>{g.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted mb-1.5">Image</label>
                  <div className="flex items-center gap-3">
                    {form.image && <img src={form.image} alt="" className="w-14 h-14 rounded-lg object-cover border-theme" />}
                    <label className="flex-1 px-3.5 py-2.5 bg-input border-theme border-dashed rounded-lg text-xs text-muted cursor-pointer hover:bg-tertiary transition-colors text-center">
                      {uploading === 'image' ? 'Uploading...' : form.image ? 'Change Image' : 'Click to upload'}
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
                  <label className="block text-xs font-medium text-muted mb-1.5">Thumbnail</label>
                  <div className="flex items-center gap-3">
                    {form.thumbnail && <img src={form.thumbnail} alt="" className="w-14 h-14 rounded-lg object-cover border-theme" />}
                    <label className="flex-1 px-3.5 py-2.5 bg-input border-theme border-dashed rounded-lg text-xs text-muted cursor-pointer hover:bg-tertiary transition-colors text-center">
                      {uploading === 'thumbnail' ? 'Uploading...' : form.thumbnail ? 'Change Thumbnail' : 'Click to upload'}
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
                    <label className="block text-xs font-medium text-muted mb-1.5">Order</label>
                    <input
                      type="number"
                      value={form.order}
                      onChange={e => setForm(f => ({ ...f, order: Number(e.target.value) }))}
                      className="w-full px-3.5 py-2.5 bg-input border-theme rounded-lg text-primary text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <label className="flex items-center gap-2.5 pt-5 cursor-pointer select-none">
                    <div className={`w-9 h-5 rounded-full transition-colors relative ${form.featured ? 'bg-blue-600' : 'bg-tertiary'}`}
                      onClick={() => setForm(f => ({ ...f, featured: !f.featured }))}>
                      <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${form.featured ? 'translate-x-4' : 'translate-x-0.5'}`} />
                    </div>
                    <span className="text-sm">Featured</span>
                  </label>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button type="button" onClick={resetForm} className="flex-1 px-4 py-2.5 bg-tertiary hover:bg-input rounded-lg text-sm font-medium transition-colors">
                  Cancel
                </button>
                <button type="submit" className="flex-1 px-4 py-2.5 gradient-royal text-white rounded-lg text-sm font-semibold transition-all hover:opacity-90 active:scale-95">
                  {editingId ? 'Save Changes' : 'Add State'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Cards Grid */}
        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="bg-secondary border-theme rounded-xl overflow-hidden animate-pulse">
                <div className="aspect-[4/3] bg-tertiary" />
                <div className="p-3 space-y-2">
                  <div className="h-4 bg-tertiary rounded w-3/4" />
                  <div className="h-3 bg-tertiary rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-4xl mb-3">🗺️</div>
            <p className="text-muted text-sm">{search ? 'No states match your search' : 'No states found. Add your first state!'}</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {filtered.map(s => (
              <div key={s.id} className="group bg-secondary border-theme rounded-xl overflow-hidden hover:border-theme-hard transition-all">
                {/* Image */}
                <div className="aspect-[4/3] bg-tertiary relative overflow-hidden">
                  {(s.thumbnail || s.image) ? (
                    <img
                      src={(s.thumbnail || s.image)!}
                      alt={s.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-subtle">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                  {s.featured && (
                    <span className="absolute top-2 left-2 px-1.5 py-0.5 bg-yellow-500/90 text-black text-[10px] font-bold rounded">
                      FEATURED
                    </span>
                  )}
                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button
                      onClick={() => handleEdit(s)}
                      className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(s.id)}
                      className="px-3 py-1.5 bg-danger text-white text-xs font-medium rounded-lg transition-colors hover:opacity-80"
                    >
                      Delete
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className="p-3">
                  <h3 className="text-sm font-semibold truncate">{s.name}</h3>
                  <p className="text-xs text-muted mt-0.5 truncate">{groupMap[s.group_id] || 'Unknown'}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Results count */}
        {!loading && filtered.length > 0 && (
          <p className="text-center text-xs text-subtle pt-2">
            Showing {filtered.length} of {states.length} states
          </p>
        )}
      </div>
    </div>
  )
}
