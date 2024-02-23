
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Services from './Components/Services/Services';

import Footer from './Components/Footer/Footer';
import Work from './Components/Work/Work';
import Contact from './Components/Contact/Contect';
// import Qualification from './Components/Qualification/Qualification';
function App() {


  return (
    <>
     <Header></Header>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Services></Services>
      {/* <Qualification></Qualification> */}
      <Work></Work>
      <Contact></Contact>
     <Footer></Footer>
      
    </>
  )
}

export default App
