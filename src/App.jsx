// hapus import logo from './logo.svg';

// import components
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";

// import scss
import "./app.scss"

// hapus import './App.css';
function App() {
  return (
    // panggil setiap komponen halaman disini
    // className="app". Akan memanggil scss dengan nama app.scss
    <div className="app">
      {/* Topbar */}
      <Topbar/>
      {/* sections */}
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
