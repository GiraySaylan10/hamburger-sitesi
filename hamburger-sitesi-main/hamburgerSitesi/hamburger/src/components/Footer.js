
const Footer = ({yiyecek}) => {

  

 return (
    
 
      
      <div className="card img-fluid" style = {{border:'none'}} >
    <img className="card-img-top"  src= {yiyecek.image}  style={{width: '80%' , height: "90%" , marginTop:"20px",marginBottom:"20px" }}/>
    <div className="card-img-overlay"  >
      
      
      </div>
    <p  style = {{marginLeft:"100px",color:"brown"}}>  {yiyecek.title} </p>

    <button class="btn btn-primary" style = {{width : "200px",marginLeft:"70px",marginBottom:"30px"}}>SİPARİŞ VER</button>
      </div>
      
 );
};

export default Footer