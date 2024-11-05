import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Signin from './pages/Signin';
import { AuthProvider } from './context/auth';
import PublicRoute from './routes/PublicRoute';

function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signin" element={
          <PublicRoute>
            <Signin />
          </PublicRoute>
        }/>
      </Routes>
    </AuthProvider>
      
  );
}

export default App