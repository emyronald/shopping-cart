import { Link } from "react-router";
export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl text-gray-700">
        Oops! The page you're looking for doesn't exist.
      </p>
      <p>
        Go back to{" "}
        <Link to="/" className="text-blue-600 underline ">
          homepage
        </Link>
      </p>
    </div>
  );
}
