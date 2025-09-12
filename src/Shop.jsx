import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import SideBar from "./SideBar";


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
    <>
      <Navbar />
      <h2 className="category-header !mt-2" id="men's-clothing">
        Men's Clothing
      </h2>
      <div className="product-grid mx-10">
        {products.map(
          (product) =>
            product.category === "men's clothing" && (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
              />
            )
        )}
      </div>
      <h2 className="category-header" id="women's-clothing">
        {" "}
        Women's Clothing
      </h2>
      <div className="product-grid mx-10">
        {products.map(
          (product) =>
            product.category === "women's clothing" && (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
              />
            )
        )}
      </div>
      <h2 className="category-header" id="electronics">
        Electronics
      </h2>
      <div className="product-grid mx-10">
        {products.map(
          (product) =>
            product.category === "electronics" && (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
              />
            )
        )}
      </div>
      <h2 className="category-header" id="jewellery">
        Jewellery
      </h2>
      <div className="product-grid mx-10">
        {products.map(
          (product) =>
            product.category === "jewelery" && (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
              />
            )
        )}
      </div>
      <pre>{JSON.stringify(products, null, 2)}</pre>
      <SideBar />
    </>
  );
}
