import { Trash2 } from "lucide-react";
import PlusMinus from "./PlusMinus";

export default function CartCard({
  title,
  price,
  image,
  quantity,
  incrementQuantity,
  decrementQuantity,
  removeItem,
}) {
  return (
    <div className="cart-card flex items-center justify-between shadow p-4 rounded">
      <div className="flex items-center gap-4 w-full ">
        <div className="cart-img-container">
          <img
            src={image}
            alt="Product Image"
            className="w-20 h-20 object-cover rounded"
          />
        </div>
        <div className="flex flex-col justify-between w-full gap-3 lg:flex-row">
          <div>
            <h2 className="font-bold text-lg">{title}</h2>
            <p className="text-gray-600">
              {price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
          </div>
          <div className="flex items-center gap-4 self-end lg:self-auto ">
            <PlusMinus
              quantity={quantity}
              decrementQuantity={decrementQuantity}
              incrementQuantity={incrementQuantity}
            />
            <button
              className="text-red-500 hover:text-red-700"
              onClick={removeItem}
            >
              <Trash2 />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
