import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/home/home.tsx';
import Signup from './pages/auth/signup.tsx';
import Signin from './pages/auth/signin.tsx';
import Carous from './pages/home/carousel.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        
        </Route>
        <Route path="/carousel" element={<Carous />}>
        
        </Route>
        <Route path="/signup" element={<Signup/>}>
          
        </Route>
        <Route path="/signin" element={<Signin/>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
