import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ToteGallery from './pages/ToteGallery';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { supabaseClient } from './supabase/SupabaseClient';

function App() {
  
  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tote-gallery" element={<ToteGallery />} />
        </Routes>
      </BrowserRouter>
    </SessionContextProvider>
  );
}

export default App