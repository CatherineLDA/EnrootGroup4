import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseApiKey = import.meta.env.VITE_SUPABASE_API_KEY;

if (!supabaseUrl || !supabaseApiKey) {
  console.error("Supabase environment variables are missing!");
}

// Initialize Supabase client
export const supabaseClient = createClient(supabaseUrl, supabaseApiKey);