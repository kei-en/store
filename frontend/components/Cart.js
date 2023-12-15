import { useStateContext } from "../lib/context";
import {
  CartWrapper,
  CartStyle,
  CloseBtn,
  Card,
  CardInfo,
  EmptyStyle,
  CheckOut,
  Cards,
} from "../styles/CartStyles";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import getStripe from "../lib/getStripe";
import { RiCloseFill } from "react-icons/ri";

//Animation
const cards = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.3 },
  },
};

export default function Cart() {
  const { cartItems, onAdd, setShowCart, onRemove, totalPrice } =
    useStateContext();

  // Payment
  const handlecheckout = async () => {
    const stripe = await getStripe();
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cartItems),
    });
    const data = await response.json();
    await stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <CartWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowCart(false)}>
      <CloseBtn onClick={() => setShowCart(false)}>
        <RiCloseFill />
      </CloseBtn>
      <CartStyle
        initial={{ x: "50%" }}
        animate={{ x: "0%" }}
        exit={{ x: "50%" }}
        transition={{ type: "tween" }}
        onClick={(e) => e.stopPropagation()}>
        {cartItems.length < 1 && (
          <EmptyStyle
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}>
            <h1>You have more shopping to do &#128521;</h1>
            <FaShoppingCart />
          </EmptyStyle>
        )}
        <Cards layout variants={cards} initial="hidden" animate="show">
          {cartItems.length >= 1 &&
            cartItems.map((item) => {
              return (
                <Card
                  layout
                  initial="hidden"
                  animate="show"
                  variants={card}
                  key={item.Slug}>
                  <img
                    src={item.Image.data.attributes.formats.thumbnail.url}
                    alt={item.Title}
                  />
                  <CardInfo>
                    <h3 className="text-lg font-semibold">{item.Title}</h3>
                    <h3 className="font-medium underline">KES {item.Price}</h3>
                    <div className="flex align-middle my-4">
                      <span>Quantity</span>
                      <button className="bg-transparent border-none text-xl mx-2">
                        <AiFillMinusCircle
                          className="text-[#535353]"
                          onClick={() => onRemove(item)}
                        />
                      </button>
                      <p>{item.quantity}</p>
                      <button className="bg-transparent border-none text-xl mx-2">
                        <AiFillPlusCircle
                          className="text-[#535353]"
                          onClick={() => onAdd(item, 1)}
                        />
                      </button>
                    </div>
                  </CardInfo>
                </Card>
              );
            })}
        </Cards>
        {cartItems.length >= 1 && (
          <CheckOut>
            <h3>SubTotal: KES {totalPrice}</h3>
            <button onClick={handlecheckout}>Purchase</button>
          </CheckOut>
        )}
      </CartStyle>
    </CartWrapper>
  );
}
