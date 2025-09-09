import { useState, useEffect } from "react";
import axios from "axios";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (err) {
        setError("Error fetching products");
        console.error(err);
      }
    };
    fetchProducts();
    return () => controller.abort();
  }, []);
  return (
    <pre>{JSON.stringify(products, null, 2)}</pre>
  )
}
