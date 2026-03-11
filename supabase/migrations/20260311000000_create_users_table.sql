-- Create users table linked to Supabase Auth
CREATE TABLE users (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  first_name text,
  last_name text,
  email text,
  phone text,
  city text,
  country text,
  about text,
  website text,
  role text DEFAULT 'user' CHECK (role IN ('admin', 'host', 'user', 'guest')),
  status text DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'banned')),
  created_at timestamptz DEFAULT now()
);

-- Auto-insert into users table when someone signs up via Supabase Auth
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.users (id, email, first_name, last_name)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'first_name',
    NEW.raw_user_meta_data->>'last_name'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "users can read own profile" ON users FOR SELECT USING (auth.uid() = id);
CREATE POLICY "users can update own profile" ON users FOR UPDATE USING (auth.uid() = id);