import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Works from "./components/Works";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      {/* <Works /> */}
      {/* <Contact /> */}
      <div name='disclaimer' className='w-full bg-[#0a192f] flex justify-center items-center p-4 text-gray-300'>
        <p className='py-4 text-base'>
          Adapted from{" "}
          <a href="https://buttercms.com/blog/build-a-portfolio-website-with-react/" target="_blank" rel="noreferrer">
            this tutorial
          </a>
        </p>
      </div>
    </div>
  );
}
export default App;
