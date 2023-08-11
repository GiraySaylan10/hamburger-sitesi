import gs from '../gs.jpg'

const About = () => {
    return(
     <div className = "container">

     <div className = "row">
      <div className = "col-lg-9 col-md-9"> 

      <img className = "pull-left mr-15 thumbnail" src = {gs} style = {{maxWidth:"300px"}}/>
       <p> </p> <h4>Hakkımızda</h4>
      <p style = {{fontFamily : "Lucida Console"}}> <strong>GirBurger</strong>, 56 yılı aşkın sürede edinilen tecrübelerin bir araya gelmesiyle oluşan "Beroğlu Baklavaları" tarafından hizmete sunulmuş, İstanbul’un en özel semtlerinden biri olan Cihangir'de, hizmet vermektedir. GirBurger; yemek sektöründe faaliyet göstermektedir ve yemek sektörünün öncü markası olma hedeflerinde emin adımlarla ilerlemektedir.</p>

   <p style = {{fontFamily : "sans-serif"}}> Tüm sektör tarafından güvenilirliği bilinen <strong>Beroğlu Baklavaları </strong>markamız, her yıl on binlerce misafirini gururla ağırlamaktadır. </p>
    
   <p> En büyük gayemiz; insanları sağlıklı ve lezzetli ürünlerle buluşturmaya devam etmek, bunu yaparken hızlı ve güler yüzlü hizmetiyle tüm müşterilerimizin restorandan memnun ayrılmasını sağlamaktır. Ayrıca Türkiye'nin her köşesine bu eşsiz lezzeti tattırmak GirBurger yegane amacıdır. </p>
   </div>
   
   </div>
   </div>
   );
  };
  
  export default About;