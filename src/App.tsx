import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Signin from './pages/Signin';
import { AuthProvider } from './context/auth';

function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signin" element={<Signin />}/>
      </Routes>
    </AuthProvider>
      
  );
}

export default App