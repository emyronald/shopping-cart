import {
  useParams,
  useLocation,
  Link,
  useOutletContext,
} from "react-router-dom";
import PlusMinus from "./PlusMinus";
import { useState, useEffect } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { ShoppingBag, ShoppingCart, ReceiptText, X } from "lucide-react";
import axios from "axios";

export default function ProductDetail() {
  const [viewDetails, setViewDetails] = useState(false);
  const { id } = useParams();
  const location = useLocation();
  const { quantity, incrementQuantity, decrementQuantity, addToCart } =
    useOutletContext();

  // Initialize cart with localStorage data immediately

  const [product, setProduct] = useState(location.state || null);

  useEffect(() => {
    if (!product) {
      axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((res) => setProduct(res.data))
        .catch((err) => console.error(err));
    }
  }, [id, product]);

  if (!product) {
    return <p className="p-6">Loading product...</p>;
  }

  function toggleViewDetails() {
    setViewDetails((prev) => !prev);
  }

  return (
    <>
      <main className="p-6">
        <div className="details-card">
          <div className="details-img">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-80 mx-auto"
            />
          </div>
          <div className="details flex flex-col gap-10">
            <div className="details-top flex flex-col gap-5">
              <h1 className="text-2xl text-gray-600">{product.title}</h1>
              <p className="font-bold text-3xl text-gray-700">
                {product.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
              <p className="text-gray-600 text-xl">In stock</p>
            </div>
            <div className="details-bottom flex flex-col gap-5">
              <p className="reviews flex items-center text-xl font-bold text-gray-600">
                Rating: {product.rating?.rate}/5
                <StarIcon className="text-yellow-500 w-6" />
              </p>
              <p className="flex gap-2 text-gray-600 font-bold text-xl">
                Quantity:{" "}
                <PlusMinus
                  incrementQuantity={incrementQuantity}
                  decrementQuantity={decrementQuantity}
                  quantity={quantity}
                />
                <button
                  className="btn-short"
                  onClick={() => addToCart(product)}
                >
                  Add to cart
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className="my-8 flex flex-col gap-5">
          <button
            className="btn-short max-w-40 !py-2 flex justify-center gap-1 items-center"
            onClick={toggleViewDetails}
          >
            {viewDetails ? (
              <>
                <X />
                Close
              </>
            ) : (
              <>
                <ReceiptText />
                View Details
              </>
            )}
          </button>
          {viewDetails && (
            <p className="max-w-[60ch] mb-3">{product.description}</p>
          )}
          <Link to="/shop">
            <button className="btn-short !py-2 w-40 flex gap-1 justify-center items-center">
              <ShoppingBag />
              Back to Shop
            </button>
          </Link>
          <Link to="/cart">
            <button className="btn-short !py-2 w-40 flex gap-1 justify-center items-center">
              <ShoppingCart />
              Go to Cart
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
