import "../assets/Card.css"
function Card() {

    return (
      <div className="card">
        <img
          src="https://images.pexels.com/photos/51312/kiwi-fruit-vitamins-healthy-eating-51312.jpeg?cs=srgb&dl=pexels-pixabay-51312.jpg&fm=jpg"
          style={{ width: "100%" }}
        />
        <div className="container">
          <h4>
            <b>  Name </b>
          </h4>
          <p> Price $$$</p>
          <p> Seller </p>
        </div>
      </div>
    );
    }
    
export default Card;
