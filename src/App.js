import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import CardsSection from './Components/CardsSection/CardsSection';
import Categories from './Components/Categories/Categories';
 

function App() {
  return (
    <div className="App">
      <NavBar />
      <Categories />
      
      <CardsSection />
      <Footer />
    </div>
  );
}

export default App;
