import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import CardsSection from './Components/CardsSection/CardsSection';
// import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CardsSection />
      <Footer />
    </div>
  );
}

export default App;
