import { createContext, useContext, useState } from 'react';

const ShopContext = createContext();

export const StateContext = ({ children }) => {
    // Data for the products state
    const [qty, setQty] = useState(1);
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    // Increase product quantity 
    const increaseQty = () => {
        setQty((prevQty) => prevQty + 1);
    }
    // Decrease product quantity 
    const decreaseQty = () => {
        setQty((prevQty) => {
            if(prevQty - 1 < 1) return 1;
            return prevQty - 1;
        })
    }

    // Add product to cart 
    const onAdd = (product, quantity) => {
        // Increase total price 
        setTotalPrice(prevTotal => prevTotal + product.Price * quantity);
        // Increase total quantity 
        setTotalQuantities(prevTotal => prevTotal + quantity);
        // Check if the product is already in the cart 
        const exist = cartItems.find((item) => item.Slug === product.Slug);
        if(exist) {
            setCartItems(
                cartItems.map((item) => 
                    item.Slug === product.Slug
                    ? {...exist, quantity: exist.quantity + quantity}
                    : item
                )
            );
        } else {
            setCartItems([...cartItems, {...product, quantity: quantity}]);
        }
    }
    
    // Remove from cart 
    const onRemove = (product) => {
        // Increase total price 
        setTotalPrice(prevTotal => prevTotal - product.Price);
        // Decrease total quantity 
        setTotalQuantities(prevTotal => prevTotal - 1);
        // Check if the product is already in the cart 
        const exist = cartItems.find((item) => item.Slug === product.Slug);
        if(exist.quantity === 1) {
            setCartItems(cartItems.filter(item => item.Slug !== product.Slug));
        } else {
            setCartItems(cartItems.map(item => 
                item.Slug === product.Slug 
                ? {...exist, quantity: exist.quantity - 1}
                : item
                ))
        }
    }
    
    return (
        <ShopContext.Provider value={{ 
            qty, 
            increaseQty, 
            decreaseQty, 
            showCart, 
            setShowCart, 
            onAdd, 
            cartItems, 
            onRemove,
            totalQuantities,
            totalPrice 
        }}>
            {children}
        </ShopContext.Provider>
    )
};

export const useStateContext = () => useContext(ShopContext);