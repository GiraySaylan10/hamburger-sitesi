import React from 'react';
import Urun from './Urun';
import { Link } from 'react-router-dom';
import '../styles/hamburger.css';
import Yiyecek from './Yiyecek';
import Icecek from './Icecek';




export const Navbar = () => {
  return (

       <div className="navbar" style = {{width : '100%'}}>
        
    
          
        
       
          <Link className="nav-item"  style={{ textDecoration: 'none', color:"blue" ,fontSize: 20 , marginLeft:"50px" }} to="/"><span className="material-symbols-outlined">
        home
      </span> Anasayfa</Link>

    
    <Urun/>
  
     
     
    
  
                 
    
          <Link className="nav-item" style={{ textDecoration: 'none', color: "blue" ,fontSize: 20 }} to="/about">Hakkımızda</Link>
      <Link className="nav-item" style={{ textDecoration: 'none', color: "blue" ,fontSize: 20 }} to="/iletisim"><span class="material-symbols-outlined">
call
</span> İletişim</Link>
       <Link className = "nav-item" style = {{textDecoration : "none",color:"blue",fontSize : 20 , marginRight:"50px"}} to = "/yorum"> Yorumlar</Link>
          </div>
          
      
      
  );
};
