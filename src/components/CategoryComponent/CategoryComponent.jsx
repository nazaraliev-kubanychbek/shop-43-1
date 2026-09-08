import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

const CategoryComponent = ({ limit = 0, category = '' }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts([]);
        axios.get(
            limit > 0
                ? `https://fakestoreapi.com/products/category/${category}?limit=${limit}`
                : `https://fakestoreapi.com/products/category/${category}`
        )
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, [category, limit]);

    return (
  
        <section className="category-section">
            <div className="container">
                <h2 className="category-section__title">
                    <Link className="category-section__link" to={`/category/${category}`}>{category}</Link>
                </h2>
                <div className="row">
                    {products.map((product) => (
                        <div className="col-3" key={product.id}>
                            <Card product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CategoryComponent;
