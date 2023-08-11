import { Table } from "react-bootstrap";


const Iletisim = () => {

  return(
    <>
<div className="contact">
<div className="col-sm-3 "> <br/><br/><br/>

    
<table className="table table-bordered table-hover table-dark" >
    <thead>
      <tr >
        <th colSpan = {2} style = {{textAlign : "center"}}>İletişim Bilgileri</th>
        
      </tr>
    </thead>
    <tbody>
      <tr className = "table-primary">
        <th>Telefon</th>
        <td>0555 555 55 55</td>
        
      </tr>
      <tr className = "table-success">
        <th>Email</th>
        <td>giraysaylan@hotmail.com</td>
        
      </tr>
      <tr className = "table-warning">
        <th>Adres</th>
        <td>Balıkesir/Türkiye</td>
      </tr>
    </tbody>
  </table>
</div>
     
  <div  id = "main"  >

  

 
  <form  >
  
    <input type="text" id="fname" name="firstname" className='div1'  placeholder="Adınız" required >
    
</input>
    
    <input type="text" id="lname" name="lastname" className ='div1'  placeholder="Soyadınız" required> 
    </input> 
    
      <input type="text" id="email" name="email" className ='div1' placeholder="E-Mail" required> 
    </input> 
  
      <textarea style = {{marginLeft:"20px"}} name = "mesaj"  placeholder='Mesajınız..'></textarea> <br/><br/>
    <div className="check">
    <input type="checkbox"></input>
     <label style={{marginLeft:"10px"}} >Ben robot değilim</label>
     </div>
     <br/>
     <input style = {{marginLeft:"80px"}}type="submit" className="btn1" value="Gönder">
</input>
  </form>

  
 
  </div>
</div>
</>
  );
};

  
  export default Iletisim;