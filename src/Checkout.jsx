export default function Checkout({ subTotal }) {
  const shipping = 5;
  return (
    <div className="p-4 rounded shadow w-[20rem] border-gray-300 border flex flex-col flex-shrink-0 bg-white h-[17rem] justify-center self-end">
      <h2 className="text-center font-bold text-xl">Order Summary</h2>
      <p className="border-b border-gray-400 flex items-center h-10 justify-between">
        Subtotal<p>{subTotal.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
      </p>
      <p className="border-b border-gray-400 flex h-10 items-center justify-between">
        Shipping<p>{shipping.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
      </p>
      <p className="font-bold text-xl h-15 flex items-center justify-between">
        Total <p>{(subTotal + shipping).toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
      </p>
      <button className="bg-primary text-white rounded p-2 ">Checkout</button>
    </div>
  );
}
