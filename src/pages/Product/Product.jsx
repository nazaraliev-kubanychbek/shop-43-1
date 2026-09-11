import axios from 'axios';
import { useState, useEffect } from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import './product.scss';

const Product = () => {
    const [product, setProduct] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios(`https://fakestoreapi.com/products/${id}`)
        .then(({data}) => setProduct(data))
    }, [id])

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleBuyClick = () => {
        // Add to cart logic
        alert(`Added "${product.title}" to cart`);
    };

    if (!product.title) {
        return <main className="product-container"><p>Loading...</p></main>;
    }

    return (
        <main className="product-container">
            <div className="product">
                <div className="product-image-block">
                    <img src={product.image} alt={product.title} className="product-image" />
                </div>
                <div className="product-info">
                    <div className="product-header">
                        <h1 className="product-title">{product.title}</h1>
                        <p className="product-category">{product.category}</p>
                    </div>

                    <div className="product-description">
                        <h3 className="product-description-title">Description</h3>
                        <p className="product-description-text">{product.description}</p>
                    </div>

                    <div className="product-footer">
                        <div className="product-price-block">
                            <span className="product-label">Price:</span>
                            <span className="product-price">${product.price}</span>
                        </div>
                    </div>

                    <div className="product-actions">
                        <button className="product-btn product-btn--back" onClick={handleBackClick}>
                            Back
                        </button>
                        <button className="product-btn product-btn--buy" onClick={handleBuyClick}>
                            Buy
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Product;
