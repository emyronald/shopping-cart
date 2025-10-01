export default function ProductCard({ title, price, image }) {
  return (
    <div className="product-card">
      <div className="img-container">
        <img src={image} alt={title} className="product-image" />
      </div>
      <hr className="border-t-1 border-cyan-700 my-2" />
      <h2 className="product-title truncate">{title}</h2>
      <p className="product-price font-bold text-lg ">
        {price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>
    </div>
  );
}
