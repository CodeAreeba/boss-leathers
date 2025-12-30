 
import './App.css';
<<<<<<< Updated upstream
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './MainLayout/MainLayout';
import Home from './Pages/Home/Home';
import CategoryPage from './Pages/Categories/CategoryPage';
import ProductPage from './Pages/Product/ProductPage';
import RefundPolicyPage from './Pages/RefundPolicy/RefundPolicy';
import ShippingPolicyPage from './Pages/ShippingPolicy/ShippingPolicyPage';
import CartPage from './Pages/Cart/CartPage';
import CheckoutPage from './Pages/Checkout/CheckoutPage';
import Cart from "./Components/CartItems/CartItems";
=======
import Footer from './Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import CardsSection from './Components/CardsSection/CardsSection';
import Sidebar from './Sidebar/Sidebar';
import SearchOverlay from './Components/SearchOverlay/SearchOverlay';
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
<<<<<<< Updated upstream
      <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/categories/:categoryName" element={<CategoryPage />} />
           <Route path="/productDetails" element={<ProductPage />} />      
          <Route path="/refund-policy" element={<RefundPolicyPage />} />
          <Route path="/shipping-policy" element={<ShippingPolicyPage />} />
          <Route path="/empty-cart" element={<CartPage />} />
          <Route path="/checkout-page" element={<CheckoutPage />} />
          <Route path="/cart-items" element={<Cart />} />

          
        </Route>
      </Routes>
    </BrowserRouter>
=======
      <NavBar />
      
      <CardsSection />
      <Footer />
      
>>>>>>> Stashed changes
       
    </div>
  );
}

export default App;
