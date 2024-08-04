import Companies from "../components/Companies/Companies";
import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import Residencies from "../components/Residencies/Residencies";
import "./App.css"
import Values from "../components/values/values";
import Contact from "../components/contact/contact";
import GetStarted from "../components/GetStarted/getstarted";
import Footer from "../components/footer/footer";

function App() {
  return (
    <div className="App">
    <div>
    <div className="white-gradient"/>
      <Header/>
      <Hero/>
    </div>
      <Companies/>
      <Residencies/>
      <Values/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
