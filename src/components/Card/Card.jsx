import { Link } from "react-router-dom";
import "./card.scss";

const Card = ({product}) => {
    return (
        <div className="card">
            <img src={product.image} alt="" className="card-img" />
            <Link to={`/product/${product.id}`} >
            <h4 className="card-title">{product.title}</h4>
            <p className="card-text">{product.description}</p>
            </Link>
            <div className="card-block">
                <p className="card-price">${product.price}</p>
                <button className="card-btn">buy</button>
            </div>
        </div>
    );
}

export default Card;
