function Card({title,price,sellerName}) {
    return (
        <a href="./SellerPage.js" className="card" class ='card-link' >
        <img
        src="https://images.pexels.com/photos/51312/kiwi-fruit-vitamins-healthy-eating-51312.jpeg?cs=srgb&dl=pexels-pixabay-51312.jpg&fm=jpg"
        style={{width: '100%' }} />
        <div className="container">
            
        <h4><b>{title}</b></h4>  
        <p><b>{price}</b></p>
        <p>{sellerName}</p>
        <button id="buttonId">order</button>
        
        </div>
        </a>
        
        );
    }
    
export default Card;
