import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./componets/nav";
import Header from "./componets/header";
import Skills from "./componets/skills";
import About from "./componets/about";
import Portfolio from "./componets/portfolio";
import Contact from "./componets/contact";
import Footer from "./componets/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Header />
      <section id="main-content">
        <About/> 
        <Skills/>
        <Portfolio/>
        <Contact/>
      </section>

      <Footer />
    </>
  );
}

export default App;
