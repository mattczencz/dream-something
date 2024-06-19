import './App.css';
import AboutUs from './components/AboutUs';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <News />
        <AboutUs />
      </main>
    </>
  );
}

export default App;
