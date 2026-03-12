-- Create location_groups table
CREATE TABLE location_groups (
  id serial PRIMARY KEY,
  name text NOT NULL,
  slug text NOT NULL UNIQUE,
  page_link text,
  page_title text,
  page_description text,
  image text,
  faq_image text,
  status boolean DEFAULT true,
  "order" int DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Indexes
CREATE INDEX idx_location_groups_slug ON location_groups(slug);
CREATE INDEX idx_location_groups_order ON location_groups("order");

-- Row Level Security
ALTER TABLE location_groups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anyone can read location_groups" ON location_groups FOR SELECT USING (true);

CREATE POLICY "admins can insert location_groups" ON location_groups FOR INSERT WITH CHECK (
  EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin')
);

CREATE POLICY "admins can update location_groups" ON location_groups FOR UPDATE USING (
  EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin')
);

CREATE POLICY "admins can delete location_groups" ON location_groups FOR DELETE USING (
  EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin')
);

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION update_location_groups_updated_at()
RETURNS trigger AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER location_groups_updated_at
  BEFORE UPDATE ON location_groups
  FOR EACH ROW EXECUTE FUNCTION update_location_groups_updated_at();
