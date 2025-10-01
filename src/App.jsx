import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";

export default function App() {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // ✅ Restore cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (err) {
        console.error("Error parsing cart from localStorage:", err);
        setCart([]);
      }
    }
    setIsInitialized(true);
  }, []);

  // ✅ Save cart + auto-update totalQty when cart changes
  const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, isInitialized]);
  // ✅ Fetch products
  useEffect(() => {
    const controller = new AbortController();
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products", {
          signal: controller.signal,
        });
        setProducts(response.data);
      } catch (err) {
        if (!controller.signal.aborted) {
          setError(`Error fetching products: ${err.message}`);
          console.error(err);
        }
      }
    };
    fetchProducts();
    return () => controller.abort();
  }, []);

  // ✅ Cart functions
  function addToCart(product) {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, { ...product, quantity }];
      }
    });

    // ✅ Reset quantity back to 1 after adding
    setQuantity(1);
  }

  function incrementQuantity() {
    setQuantity((prev) => prev + 1);
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  }

  function removeItem(item) {
    setCart((prev) => prev.filter((i) => i.id !== item.id));
  }

  function clearCart() {
    setCart([]);
    localStorage.removeItem("cart");
  }

  return (
    <>
      <Navbar totalQty={totalQty} />
      <main>
        <Outlet
          context={{
            cart,
            setCart,
            quantity,
            setQuantity,
            products,
            addToCart,
            incrementQuantity,
            decrementQuantity,
            totalQty,
            removeItem,
            clearCart,
            error,
          }}
        />
      </main>
      <Footer />
    </>
  );
}
