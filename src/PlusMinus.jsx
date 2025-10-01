import { Plus, Minus } from "lucide-react";

export default function PlusMinus({
  quantity,
  decrementQuantity,
  incrementQuantity,
}) {
  return (
    <div className="flex  items-center justify-center shadow w-fit">
      <div
        className="flex items-center bg-gray-500 rounded"
        onClick={() => {
          decrementQuantity();
        }}
      >
        <Minus className="text-white" />
      </div>
      <div className="w-8 flex justify-center items-center">{quantity}</div>
      <div
        className="flex items-center bg-primary rounded"
        onClick={() => {
          incrementQuantity();
        }}
      >
        <Plus className="text-white" />
      </div>
    </div>
  );
}
