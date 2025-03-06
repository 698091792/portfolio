
import Navbar from './components/Navbar';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Projects from './components/Projects';
import Home from './components/Home';
import Categories from './components/Categories';



function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <Home />
      <Services />
      <Projects />
      <Blog />
      <Categories />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;