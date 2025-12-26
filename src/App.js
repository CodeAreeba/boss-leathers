import logo from './logo.svg';
import './App.css';
import Footer from './Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import CardsSection from './Components/CardsSection/CardsSection';
import Sidebar from './Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CardsSection />
      <Footer />
      
       
      <Sidebar />
      {/* <Footer />  */}
    </div>
  );
}

export default App;
