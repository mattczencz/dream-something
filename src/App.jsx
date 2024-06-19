import './App.css';
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
      </main>
    </>
  );
}

export default App;
