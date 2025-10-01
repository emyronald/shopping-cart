import CartCard from "./CartCard";
import Checkout from "./Checkout";
import { useOutletContext, Link } from "react-router";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";
export default function Cart() {
  const { cart, setCart, setTotalQty, removeItem, clearCart } =
    useOutletContext();
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    setSubTotal(
      cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    );
  }, [cart]);

  function incrementQuantity(id) {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    );
    setTotalQty((prev) => prev + 1);
  }
  function decrementQuantity(id) {
    if (cart.find((item) => item.id === id).quantity === 1) {
      return;
    }
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );
    setTotalQty((prev) => prev - 1);
  }
  return (
    <>
      {cart.length > 0 ? (
        <div className="cart">
          <h1 className="text-3xl font-bold mx-10 my-5 flex gap-10">
            Your Cart{" "}
            <button className="btn flex gap-1 items-center" onClick={clearCart}>
             <RemoveShoppingCartIcon/> Clear Cart
            </button>
            <Link to="/shop">
              <button className="btn-short !py-2 w-40 flex gap-1 justify-center items-center">
                <ShoppingBag />
                Back to Shop
              </button>
            </Link>
          </h1>
          <div className="flex flex-col mx-10  mb-10 justify-between items-center gap-10 lg:flex-row lg:items-start">
            <div className="flex flex-col gap-8 cart-items">
              {cart.map((item) => (
                <CartCard
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  quantity={item.quantity}
                  incrementQuantity={() => incrementQuantity(item.id)}
                  decrementQuantity={() => decrementQuantity(item.id)}
                  removeItem={() => removeItem(item)}
                />
              ))}
            </div>
            <div>
              <Checkout subTotal={subTotal} />
            </div>
          </div>
        </div>
      ) : (
        <div className="p-6 min-h-[calc(100vh-170px)] flex flex-col items-center justify-center gap-3">
          <RemoveShoppingCartIcon
            className="color-secondary"
            sx={{ fontSize: 200 }}
          />
          <p className="text-2xl font-bold text-gray-700">Your cart is empty</p>
          <Link to="/shop">
            <button className="btn-short !py-2 w-40 flex gap-1 justify-center items-center">
              <ShoppingBag />
              Back to Shop
            </button>
          </Link>
        </div>
      )}
    </>
  );
}
