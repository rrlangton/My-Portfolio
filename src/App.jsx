import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./componets/nav";
import Header from "./componets/header";
import Box from "./componets/box";
import About from "./componets/about";
import Skills from "./componets/skills";
import Portfolio from "./componets/portfolio";
import Resume from "./componets/resume";
import Contact from "./componets/contact";
import Footer from "./componets/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Header />
      <section id="main-content"> 
        <Skills/>
        {/* <Box/> */}
        <About/>
        <Portfolio/>
        <Resume/>
        <Contact/>
      </section>

      <Footer />
    </>
  );
}

export default App;
