-- Create applications table to store student applications
CREATE TABLE IF NOT EXISTS applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  grade TEXT NOT NULL,
  previous_school TEXT,
  parent_name TEXT NOT NULL,
  parent_phone TEXT NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_applications_email ON applications(email);

-- Create an index on status for filtering
CREATE INDEX IF NOT EXISTS idx_applications_status ON applications(status);

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_applications_created_at ON applications(created_at DESC);
