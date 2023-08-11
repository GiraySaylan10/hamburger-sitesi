import icecek from '../icecek.json'


const Icecek = () => {

 

    return (
       
     
        <div class="container">

        <div class="row">
                    <div className="col-md-12 col-lg-4 col-sm-3 div2">
                    <div className="card text-center " id = "card1" >
                      <img className="card-img-top" style = {{height:"300px"}} src={icecek[0].image}  alt="Card image cap"/>
                      <div className="card-block">
                        <h4 className="card-title" style ={{textShadow: "2px 2px red"}}>{icecek[0].title}</h4>
                        <p className="card-text" style = {{color:"blue" ,fontSize : "18px"}}><b style = {{ color:"black"}}>Price:</b> {icecek[0].price} </p>
                        <a href="#" className="btn btn-primary">Sipariş Ver</a>
                    </div>
                    </div>
                </div>
        
                <div className="col-md-12 col-lg-4 col-sm-3 div2" >
                    <div className="card  text-center " id = "card2" >
                      <img className="card-img-top"  src={icecek[1].image} style = {{ height : "300px" }} alt="Card image cap"/>
                      <div className="card-block" >
                        <h4 className="card-title" style ={{textShadow: "2px 2px red"}}>{icecek[1].title}</h4>
                        <p className="card-text" style = {{color:"blue" ,fontSize : "18px"}}><b style = {{ color:"black"}}>Price:</b> {icecek[1].price} </p>
                        <a href="#" className="btn btn-primary">Sipariş Ver</a>
                    </div>
                    </div>
                </div>
        
        
                <div className="col-md-12 col-lg-4 col-sm-3 div2">
                    <div className="card  text-center " id = "card3"  >
                      <img className="card-img-top" src={icecek[2].image} style = {{ height : "300px"}} alt="Card image cap"/>
                      <div className="card-block">
                        <h4 className="card-title" style ={{textShadow: "2px 2px red"}}>{icecek[2].title}</h4>
                        <p className="card-text" style = {{color:"blue" ,fontSize : "18px"}}><b style = {{ color:"black"}}>Price:</b> {icecek[2].price} </p>
                        <a href="#" className="btn btn-primary">Sipariş Ver</a>
                    </div>
                    </div>
                </div>
        
                <div className="col-md-12 col-lg-4 col-sm-3 div2" style = {{marginTop:"5px"}}>
                    <div className="card  text-center " id = "card4" >
                      <img className="card-img-top" src={icecek[3].image} style = {{ height : "300px"}} alt="Card image cap"/>
                      <div className="card-block">
                        <h4 className="card-title" style ={{textShadow: "2px 2px red"}}>{icecek[3].title}</h4>
                        <p className="card-text" style = {{color:"blue" ,fontSize : "18px"}}><b style = {{ color:"black"}}>Price:</b> {icecek[3].price} </p>
                        <a href="#" className="btn btn-primary">Sipariş Ver</a>
                    </div>
                    </div>
                </div>

                <div className="col-md-12 col-lg-4 col-sm-3 div2" style = {{marginTop:"5px"}}>
                    <div className="card  text-center " id = "card5" >
                      <img className="card-img-top" src={icecek[4].image} style = {{ height : "300px"}} alt="Card image cap"/>
                      <div className="card-block">
                        <h4 className="card-title" style ={{textShadow: "2px 2px red"}}>{icecek[4].title}</h4>
                        <p className="card-text" style = {{color:"blue" ,fontSize : "18px"}}><b style = {{ color:"black"}}>Price:</b> {icecek[4].price} </p>
                        <a href="#" className="btn btn-primary">Sipariş Ver</a>
                    </div>
                    </div>
                </div>

                <div className="col-md-12 col-lg-4 col-sm-3 div2" style = {{marginTop:"5px"}}>
                    <div  className = "card text-center " id = "card6" >
                      <img className="card-img-top"  src={icecek[5].image } style = {{ height : "300px"}} alt="Card image cap"/>
                      <div className="card-block">
                        <h4 className="card-title" style = {{ textShadow: "2px 2px red"}}>{icecek[5].title}</h4>
                        <p className="card-text" style = {{color:"blue", fontSize:"18px"}}><b style = {{ color:"black"}}>Price:</b> {icecek[5].price} </p> 
                        <a href="#" className="btn btn-primary">Sipariş Ver</a>
                    </div>
                    </div>
                </div>

                </div>
                    
        </div>
    );
   };
   
   export default Icecek