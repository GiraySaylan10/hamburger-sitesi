import yiyecek from "../yiyecek.json"



const Yiyecek = () => {
  const food1 =  yiyecek.filter(item => item.id === 1 || item.id === 2 || item.id === 3)
  const food2 =  yiyecek.filter(item => item.id === 4 || item.id === 5 || item.id === 6)
    return (
     <>
     <div   style= {{marginTop : "20px"}}>
     <div className = "row" style = {{gridRowGap : "50px"}} >
      {food1.map(food => (
					
				<div className="containerUrun col-4" >
    <img  src={food.image} alt="Card image" style={{width:"80%" , height:"50%" }}/>
    <div className="card-body">
      <h4 className="card-title">{food.title}</h4>
      <p className="card-text">{food.price}</p>
      <a href="#" className="btn btn-primary">Sipariş Ver</a>
    </div>
    </div>
    ))}
   
   </div>
   <div className = "row" style = {{gridRowGap : "50px"}} >
      {food2.map(food => (
					
				<div className="containerUrun col-4" >
    <img  src={food.image} alt="Card image" style={{width:"80%" , height:"50%" }}/>
    <div className="card-body" >
      <h4 className="card-title">{food.title}</h4>
      <p className="card-text">{food.price}</p>
      <a href="#" className="btn btn-primary">Sipariş Ver</a>
    </div>
    </div>
    ))}
   </div>
   </div>
  </>
  
  
 
    );
  };
  
  export default Yiyecek;