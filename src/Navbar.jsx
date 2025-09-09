import logo from "./assets/Print.svg";
import { NavLink } from "react-router";
import { Menu, X, House, ShoppingBag, ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between py-4">
      <div className="w-40 ">
        <img src={logo} className="w-[150px] h-auto flex-shrink-0" />
      </div>
      <ul className="hidden md:flex gap-10 text-lg font-medium text-gray-600   w-80 justify-between desktop-nav">
        <li className=" flex gap-1.5 items-center">
          <House />
          Home
        </li>
        <li className=" flex gap-1.5 items-center">
            <ShoppingBag />
          Shop
        </li>
        <li className=" flex gap-1.5 items-center">
            <ShoppingCart />
          Cart
        </li>
      </ul>
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-600 fixed top-10 right-5 z-10"
        >
          {isOpen ? <X size={35} className="text-white" /> : <Menu size={35} />}
        </button>
        {isOpen && (
          <ul className=" gap-10 text-lg font-medium text-gray-600   w-80 nav-mobile fixed top-0 right-0 bg-white p-5 rounded shadow-lg z- 121 flex flex-col h-full items-center pt-20">
            <li className=" flex gap-1.5 items-center ">
              <House />
              Home
            </li>
            <li className=" flex gap-1.5 items-center"><ShoppingBag />Shop</li>
            <li className=" flex gap-1.5 items-center"><ShoppingCart />Cart</li>
          </ul>
        )}
      </div>
    </nav>
  );
}
