// components/OrderOnlinePage.jsx
import { useState } from 'react';
import './OrderOnlinePage.css';
import { FaTrash } from 'react-icons/fa';

const OrderOnlinePage = () => {
  const [cart, setCart] = useState([]);

  const menuItems = [
    {
      id: 1,
      name: "Bruschetta",
      price: 8.99,
      image: "images/bruschetta.jpg"
    },
    {
      id: 2,
      name: "Greek Salad",
      price: 10.99,
      image: "images/greek-salad.jpg"
    },
    {
      id: 3,
      name: "Grilled Salmon",
      price: 18.99,
      image: "images/grilled-salmon.jpg"
    },
    {
      id: 4,
      name: "Lemon Chicken",
      price: 16.99,
      image: "images/lemon-chicken.jpg"
    },
    {
      id: 5,
      name: "Lemon Tart",
      price: 7.99,
      image: "images/lemon-tart.jpg"
    },
    {
      id: 6,
      name: "Baklava",
      price: 6.99,
      image: "images/baklava.jpg"
    }
  ];

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      const cartItem = {
        ...item,
        quantity: 1,
        cartId: Date.now()
      };
      setCart([...cart, cartItem]);
    }
  };

  const removeFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  const decreaseQuantity = (cartId) => {
    setCart(cart.map(item =>
      item.cartId === cartId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  const increaseQuantity = (cartId) => {
    setCart(cart.map(item =>
      item.cartId === cartId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  return (
    <div className="order-online-page">
      <h1>Order Online</h1>

      <div className="order-container">
        <div className="menu-section">
          <h2>Menu</h2>
          <div className="menu-items">
            {menuItems.map(item => (
              <div key={item.id} className="menu-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>
                  <button onClick={() => addToCart(item)}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cart-section">
          <h2>Your Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              <div className="cart-items">
                {cart.map(item => (
                  <div key={item.cartId} className="cart-item">
                    <div className="cart-item-info">
                      <h4>{item.name}</h4>
                      <p>${item.price.toFixed(2)}</p>
                      <div className="quantity-controls">
                        <button onClick={() => decreaseQuantity(item.cartId)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => increaseQuantity(item.cartId)}>+</button>
                      </div>
                      <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <button
                        className="remove-button"
                        onClick={() => removeFromCart(item.cartId)}
                        aria-label="Remove item"
                    >
                        <FaTrash />
                    </button>
                  </div>
                ))}
              </div>
              <div className="cart-total">
                <h3>Total: ${getTotal()}</h3>
                <button className="checkout-button">Checkout</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderOnlinePage;