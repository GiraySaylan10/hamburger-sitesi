import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Iletisim from "./components/Iletisim";
import Urun from "./components/Yiyecek";
import About from "./components/About"
import { Navbar } from './components/Navbar';
import Icecek from "./components/Icecek";
import Yorumlar from "./components/Yorumlar";

import 'bootstrap/dist/css/bootstrap.min.css';
import Yiyecek from "./components/Yiyecek";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar />
    
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path = "/yiyecek" exact element = {<Yiyecek/>}/>
        <Route path = "/icecek" exact element = {<Icecek/>}/>
        <Route path="/about" exact element={<About />} />
        <Route path="/iletisim" exact element={<Iletisim />} />
        <Route path = "/yorum" exact element = {<Yorumlar/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
