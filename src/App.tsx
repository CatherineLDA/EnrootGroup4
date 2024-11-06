import { Routes, Route } from 'react-router-dom';
import ToteGallery from './pages/ToteGallery';

function App() {

  return (
      <Routes>
        <Route path="/" element={<ToteGallery />}/>
      </Routes>
  );
}

export default App