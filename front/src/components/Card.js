function Card({title,price,sellerName}) {
    return (
        <div className="card" onclick="./SellerPage.js">
        <img
        src="https://images.pexels.com/photos/51312/kiwi-fruit-vitamins-healthy-eating-51312.jpeg?cs=srgb&dl=pexels-pixabay-51312.jpg&fm=jpg"
        style={{width: '100%' }} />
        <div className="container">
            
        <h4><b>{title}</b></h4>  
        <p>{price}</p>
        <p>{sellerName}</p>
        
        </div>
        </div>
        
        );
    }
    
export default Card;
