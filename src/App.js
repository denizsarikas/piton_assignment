import './App.css';
import Login from '../src/pages/Login/Login';
import Register from '../src/pages/Register/Register';
import Home from '../src/pages/Home/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CategoryDetails from '../src/pages/CategoryDetails/CategoryDetails';
import ProductDetails from '../src/pages/ProductDetails/ProductDetails';
import { useSelector } from 'react-redux';
import { selectToken } from '../src/features/auth/authSlice';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App() {

  //localStorage.clear();
  const storedToken = localStorage.getItem('token');
  const tokenControl = useSelector(selectToken);

  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={(storedToken || tokenControl) ? <Home /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/category/:id/*" element={<CategoryDetails />} />
          <Route path="/product/:id/*" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
