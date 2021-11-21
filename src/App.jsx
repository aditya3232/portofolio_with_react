// hapus import logo from './logo.svg';

// import components
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import {useState} from "react";

// import scss
import "./app.scss"

// hapus import './App.css';
function App() {
  // inisialisasi nilai default parameter ini, buat keperluan animasi hamburger
  const [menuOpen,setMenuOpen] = useState(true)
  return (
    // panggil setiap komponen halaman disini
    // className="app". Akan memanggil scss dengan nama app.scss
    <div className="app">
      {/* Topbar akan menangkap parmeter dari Topbar.jsx yg merupakan nilai baru*/}
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
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
