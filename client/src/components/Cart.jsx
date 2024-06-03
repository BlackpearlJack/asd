import { useContext } from "react";
// icons
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
// context
import { CartContext } from "../context/CartContext";
//components
import CartItem from "./CartItem";
// stripe
import { loadStripe } from "@stripe/stripe-js";
import { request } from "../request";

const Cart = () => {
  const { setIsOpen, cart, total, clearCart } = useContext(CartContext);

  const stripePromise = loadStripe(import.meta.env.VITE_APP_STRIPE_PUBLIC_KEY);

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await request.post("/orders", { cart });

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
      
    } catch (error) {
      console.error(error);      
    }
  };

  return (
    <div className="w-ful h-full px-4 text-white">
      <div className="overflow-y-auto overflow-x-hidden h-[70vh]">
        {/* close icon */}
        <div
          onClick={() => setIsOpen(false)}
          className="text-4xl w-20 h-[98px] flex justify-start 
          items-center cursor-pointer"
        >
          <AiOutlineClose />
        </div>
        {/* cart items */}
        <div className="flex flex-col gap-y-10 px-2">
          {cart.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}
        </div>
      </div>
      {/* subtotal & total */}
      {cart.length >= 1 && (
        <div className="px-6 py-10 flex flex-col">
          {/* subtotal */}
          <div className="flex justify-between text-lg">
            <div>Subtotal</div>
            <div>$ {total}</div>
          </div>
          {/* total */}
          <div className="flex justify-between text-2xl">
            <div>Total</div>
            <div>$ {total}</div>
          </div>
        </div>
      )}
      {/* buttons */}
      <div className="px-6">
        {cart.length >= 1 ? (
          <div className="flex justify-between gap-x-4">
            <button
              onClick={clearCart}
              className="btn btn-accent hover:bg-accent-hover text-primary
              flex-1 px-2 gap-x-2"
            >
              clear cart
            </button>
            <button
              onClick={handlePayment}
              className="btn btn-accent hover:bg-accent-hover text-primary
              flex-1 px-2 gap-x-2"
            >
              Proceed to checkout
              <AiOutlineArrowRight className="text-lg" />
            </button>
          </div>
        ) : (
          <div className="h-full absolute top-0 right-0 left-0 flex
          justify-center items-center -z-10 flex-col text-white/30">
            <div className="text-2xl">Your cart is empty</div>
            <div className="text-6xl">
              <AiOutlineShoppingCart />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
