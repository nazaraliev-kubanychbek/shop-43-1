import './cart.scss';
import { useCartStore } from '../../store/store';

const Cart = () => {
    const cart = useCartStore(s => s.cart);
    const addCart = useCartStore(s => s.addCart);
    const decrement = useCartStore(s => s.decrementCart);
    const removeFromCart = useCartStore(s => s.cleareCart);

    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.count), 0).toFixed(2);
    const totalItems = cart.reduce((sum, item) => sum + item.count, 0);

    return (
        <main className="cart-container">
            <div className="cart-wrapper">
                <div className="cart-header">
                    <h1 className="cart-title">Shopping Cart</h1>
                    <p className="cart-subtitle">{totalItems} items</p>
                </div>

                {cart.length === 0 ? (
                    <div className="cart-empty">
                        <p className="cart-empty-text">Your cart is empty</p>
                    </div>
                ) : (
                    <div className="cart-content">
                        <div className="cart-items">
                            {cart.map(item => (
                                <div key={item.id} className="cart-item">
                                    <div className="cart-item-image">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div className="cart-item-info">
                                        <h3 className="cart-item-title">{item.title}</h3>
                                        <p className="cart-item-price">${item.price}</p>
                                    </div>
                                    <div className="cart-item-quantity">
                                        <button 
                                            className="cart-item-btn"
                                            onClick={() => decrement(item)}
                                        >
                                            −
                                        </button>
                                        <span className="cart-item-count">{item.count}</span>
                                        <button 
                                            className="cart-item-btn"
                                            onClick={() => addCart(item)}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div className="cart-item-total">
                                        ${(item.price * item.count).toFixed(2)}
                                    </div>
                                    <button 
                                        className="cart-item-delete"
                                        onClick={() => removeFromCart(item)}
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="cart-summary">
                            <div className="cart-summary-block">
                                <div className="cart-summary-row">
                                    <span className="cart-summary-label">Subtotal:</span>
                                    <span className="cart-summary-value">${totalPrice}</span>
                                </div>
                                <div className="cart-summary-row">
                                    <span className="cart-summary-label">Shipping:</span>
                                    <span className="cart-summary-value">Free</span>
                                </div>
                                <div className="cart-summary-divider"></div>
                                <div className="cart-summary-row cart-summary-total">
                                    <span className="cart-summary-label">Total:</span>
                                    <span className="cart-summary-value">${totalPrice}</span>
                                </div>
                            </div>
                            <button className="cart-checkout-btn">Proceed to Checkout</button>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}

export default Cart;
