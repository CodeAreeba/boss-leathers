 
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './MainLayout/MainLayout';
import Home from './Pages/Home/Home';
import CategoryPage from './Pages/Categories/CategoryPage';
import ProductPage from './Pages/Product/ProductPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/categories/:categoryName" element={<CategoryPage />} />
           <Route path="/productDetails" element={<ProductPage />} />      
        </Route>
      </Routes>
    </BrowserRouter>
       
    </div>
  );
}

export default App;
