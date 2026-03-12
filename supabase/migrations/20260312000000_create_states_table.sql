-- Create states table for locations/destinations
CREATE TABLE states (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text NOT NULL UNIQUE,
  group_id int NOT NULL,
  image text,
  thumbnail text,
  featured boolean DEFAULT false,
  "order" int DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Indexes
CREATE INDEX idx_states_slug ON states(slug);
CREATE INDEX idx_states_group_id ON states(group_id);
CREATE INDEX idx_states_order ON states("order");

-- Row Level Security
ALTER TABLE states ENABLE ROW LEVEL SECURITY;

-- Public can read all states
CREATE POLICY "anyone can read states" ON states FOR SELECT USING (true);

-- Only admins can insert/update/delete
CREATE POLICY "admins can insert states" ON states FOR INSERT WITH CHECK (
  EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin')
);

CREATE POLICY "admins can update states" ON states FOR UPDATE USING (
  EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin')
);

CREATE POLICY "admins can delete states" ON states FOR DELETE USING (
  EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin')
);

-- Auto-update updated_at on row change
CREATE OR REPLACE FUNCTION update_states_updated_at()
RETURNS trigger AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER states_updated_at
  BEFORE UPDATE ON states
  FOR EACH ROW EXECUTE FUNCTION update_states_updated_at();
