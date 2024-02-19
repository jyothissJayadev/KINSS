import './App.css';
import Header from "./container/HEADER/Heade"
import Nav from './components/nav/Nav';
import Features from './container/features/Features'
import Section3 from './container/section3/Section3';
import Blog from './container/blog/Blog';
import Footer from './components/footer/Footer';
import { BrowserRouter as  Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
       
      <div className="gradient__bg">
      <Nav/>
      </div> 
      <Routes>
      <Route exact path='/' element={<Header/>}></Route>
      <Route exact path='/2' element={<Features/>}></Route>
      <Route exact path='/3' element={<Section3/>}></Route>
      <Route exact path='/5' element={  <Blog/>}></Route>
      {/* 
     
      <Brands/>
      <Features/>
      <Section3/>   
      <Section4/>
      <Blog/>
       */}
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
