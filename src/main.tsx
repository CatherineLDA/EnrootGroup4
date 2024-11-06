import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { supabaseClient } from './supabase/SupabaseClient.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SessionContextProvider supabaseClient={supabaseClient}>
      <App />
    </SessionContextProvider>
  </React.StrictMode>
);