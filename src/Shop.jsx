import ProductCard from "./ProductCard";
import SideBar from "./SideBar";
import { Link, useOutletContext } from "react-router-dom";

export default function Shop() {
  const { products, error } = useOutletContext();

  if (!products) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <h2 className="category-header !mt-10" id="men's-clothing">
        Men's Clothing
      </h2>
      <div className="product-grid mx-10">
        {products.map(
          (product) =>
            product.category === "men's clothing" && (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                state={product}
              >
                <ProductCard
                  title={product.title}
                  price={product.price}
                  image={product.image}
                />
              </Link>
            )
        )}
      </div>

      <h2 className="category-header" id="women's-clothing">
        Women's Clothing
      </h2>
      <div className="product-grid mx-10">
        {products.map(
          (product) =>
            product.category === "women's clothing" && (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                state={product}
              >
                <ProductCard
                  title={product.title}
                  price={product.price}
                  image={product.image}
                />
              </Link>
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
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                state={product}
              >
                <ProductCard
                  title={product.title}
                  price={product.price}
                  image={product.image}
                />
              </Link>
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
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                state={product}
              >
                <ProductCard
                  title={product.title}
                  price={product.price}
                  image={product.image}
                />
              </Link>
            )
        )}
      </div>

      <SideBar />
    </>
  );
}
