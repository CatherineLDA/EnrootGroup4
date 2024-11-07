import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ToteGallery from './pages/ToteGallery';
import EventPhotos from './pages/EventPhotos';
import Footer from './components/Footer';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { supabaseClient } from './supabase/SupabaseClient';

function App() {
  
  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      <BrowserRouter>
        <main className="flex flex-col min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tote-gallery" element={<ToteGallery />} />
            <Route path="/event-photos" element={<EventPhotos />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </SessionContextProvider>
  );
}

export default App