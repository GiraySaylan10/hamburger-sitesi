import Yiyecek from "./Yiyecek";
import Icecek from "./Icecek";
import { Link } from "react-router-dom";
const Urun = () => {
    return(
       
        <div class="dropdown">
  <button class="dropbtn">Ürünler</button>
  <div class="dropdown-content">
    <a href="/yiyecek">Burgerler</a>
    <a href="/icecek">İçecekler</a>
    
  </div>
</div>
         
   );
  };
  
  export default Urun;