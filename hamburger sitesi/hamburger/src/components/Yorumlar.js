import erkek from '../erkek.png'
const Yorumlar = () =>{
 return (
<>
  <div className = "containerYorum" style = {{width:"1170px"}}>
 <h4>Müşteri Yorumları</h4>

 <img  className = "pull-left mr-15 thumbnail" src = {erkek} style = {{maxWidth: "75px",filter: "brightness(100%)"}} alt ="Müşteri"/>
 <p></p>
 <h5>Hasan Bal</h5>
<span>  15-12-2017</span>
 <p style = {{fontFamily : "Lucida Console"}}>İstanbul ziyaretimiz sırasında gerçekten keyif aldığımız birkaç restorandan biri, iki kez gittik! Harika yemek, sunum ve servis. İyi kalite ve fiyat. </p>
<p></p>
<hr/>

<img  className = "pull-left mr-15 thumbnail" src = {erkek} style = {{maxWidth: "75px",filter: "brightness(100%)"}} alt ="Müşteri"/>
 <p></p>
 <h5>Hüseyin Sal</h5>
<span>  15-06-2015</span>
 <p style = {{fontFamily : "Lucida Console"}}>İstanbul ziyaretimiz sırasında gerçekten keyif aldığımız birkaç restorandan biri, iki kez gittik! Harika yemek, sunum ve servis. İyi kalite ve fiyat. </p>
<p></p>
<hr/>
<img  className = "pull-left mr-15 thumbnail" src = {erkek} style = {{maxWidth: "75px",filter: "brightness(100%)"}} alt ="Müşteri"/>
 <p></p>
 <h5>Ali Nal</h5>
<span>  21-07-2013</span>
 <p style = {{fontFamily : "Lucida Console"}}>Gayet hijyenik ve ferah bir mekandı. Akşam yemeği için ideal. Tavsiye edilir. </p>
<p></p>
<hr/>

 </div>
 <br/>
 <br/>
<hr/>
<h3> SİZ DE YAZIN </h3>

<form action = "/yorum" method = "post" >
  
    <input type="text" id="ad" name="firstname" className='div1 col-lg-5'  placeholder="Adınız" required >
    
</input>
<input type="text" id="eMail" name="eMail" className='div1 col-lg-5'  placeholder="E-Mail" required ></input>

<input type="text" id="cinsiyet" name="cinsiyet" className='col-lg-10' style = {{width  : "1055px" ,marginTop:"30px", marginLeft:"20px"} } placeholder="Cinsiyet" required ></input>

<input type="text" id="yorum" name="yorum" className='col-lg-10' style = {{width  : "1055px" ,marginTop:"30px", marginLeft:"20px"} } placeholder="Yorumunuz" required ></input>

<button className = "ghost-on-hover-btn" style = {{marginTop:"20px",marginLeft:"20px"}}> Gönder</button>
</form>
</>
 );

};
export default Yorumlar;