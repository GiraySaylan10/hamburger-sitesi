import React from 'react';
import { Component } from 'react'
import { Link } from 'react-router-dom';
import '../styles/hamburger.css';
import yiyecek from "../yiyecek.json";
import Footer from './Footer';
import hamburger from "../hamburger.jpg";
import icecek from "../icecek.jpg";
import iletisim from "../iletisim.jpg";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Home = () => {
  const cokSatan =  yiyecek.filter(item => item.id === 1 || item.id === 2 || item.id === 5)
  
    return (
     <div id = "carousel">
    <div className = "container" >
        
      <div className = "home ">
      
      
      
       <div className = "text-white"  style={{textAlign: 'center' , fontSize : "20px" , fontWeight : 'bold' , fontFamily:'arial'}}> <br/>  En Çok Satanlar
       
        
       </div>
      </div>
      
      <div className = "card-group"  style = {{borderStyle: "ridge" ,borderTop:'none'   }}>
      
      
      {cokSatan.map(food => (
					<Footer  yiyecek = {food}/>
				))}
       
       </div>
       </div> 
       <div style = {{marginTop : "50px"}}>
          
            <Carousel>         
                <div  >
                       
                       <p><b><a class="three" href="/yiyecek" style = {{textShadow:"2px 2px yellow"}} >Hamburger</a></b></p>
                    <img src={hamburger} style = {{filter:"brightness(100%)" }}/>
                    
                    
                </div>
                <div>
                     
                     <p><b><a class="three" href="/icecek" style = {{textShadow:"2px 2px yellow"}}>İçecek</a></b></p>
                    <img src={icecek}  style = {{filter:"brightness(100%)"}}/>
                    
                </div>
                <div> 
                
                <p><b><a class="three" href="/iletisim" style = {{textShadow:"2px 2px yellow"}}>İletişim</a></b></p>
                    <img src={iletisim} style = {{filter:"brightness(100%)"}} />
                    
                </div>
            </Carousel>
            </div>
      </div>
   
       
    );
  };
  
  export default Home;