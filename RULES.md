# STR Wedding — Rules

## Components
- Every button → `components/ui/Button.tsx` — never a raw `<button>`
- Every input → `components/ui/Input.tsx` — never a raw `<input>`
- Every page section → its own file in `components/sections/`
- Every layout piece → `components/layout/`
- Complex sections with sub-parts → their own folder e.g. `components/searchBar/`
- Never repeat code — if used twice, make it a component

## Styling
- All colors from `app/globals.css` only — never hardcode colors in components
- Use Tailwind for spacing, flex, grid, typography, radius, shadow
- Use custom classes from globals.css for brand colors only (`bg-primary`, `text-muted` etc.)
- No inline styles unless absolutely necessary

## File Structure
- Routes → `app/` folder (Next.js App Router)
- Reusable UI → `components/ui/`
- Page sections → `components/sections/`
- Layout (header/footer) → `components/layout/`
- Section sub-components → `components/[sectionName]/`

## Database
- Never run SQL directly in Supabase dashboard
- Every DB change → new file in `supabase/migrations/`
- File naming: `YYYYMMDDHHMMSS_description.sql`
- After every migration file: run `npx supabase db push`

## Git
- Push to GitHub after every completed feature
- Never push broken code to `main`

## When Given Old/Reference Code
- Copy the flow and structure — not the data
- For any real data (lists, options, content) → replace with dummy data for now
- Real data will be added later

## General
- Keep files small and focused — one responsibility per file
- Data that belongs to one component lives in that component
- Data used in multiple places → separate shared file
