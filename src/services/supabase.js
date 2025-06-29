import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://rkzjtmmjnzmcwhsjqhxf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJremp0bW1qbnptY3doc2pxaHhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExODYxNzksImV4cCI6MjA2Njc2MjE3OX0.xhD6jHZRfjefxd6DnnrDppx9Xuhjr2cRJiP30lcl7q0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
