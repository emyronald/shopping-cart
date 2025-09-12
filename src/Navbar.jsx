import logo from "./assets/Print.svg";
import { NavLink } from "react-router";
import { Menu, X, House, ShoppingBag, ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between py-">
      <div className="w-40 ">
        <NavLink to="/">
          <img src={logo} className="w-[150px] h-auto flex-shrink-0" />
        </NavLink>
      </div>
      <ul className="hidden md:flex gap-10 text-lg font-medium text-gray-600   w-80 justify-between desktop-nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li className=" flex gap-1.5 items-center">
            <House className="color-primary" />
            Home
          </li>
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li className=" flex gap-1.5 items-center">
            <ShoppingBag className="color-primary" />
            Shop
          </li>
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li className=" flex gap-1.5 items-center">
            <div className="relative">
              <ShoppingCart className="color-primary" />
              <span className="cart-badge">3</span>
            </div>
            Cart
          </li>
        </NavLink>
      </ul>
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-600 absolute top-10 right-5 z-10"
        >
          {isOpen ? <X size={35} className="text-white" /> : <Menu size={35} />}
        </button>
        {isOpen && (
          <ul className=" gap-10 text-lg font-medium text-gray-600   w-80 nav-mobile fixed top-0 right-0 bg-white p-5 rounded shadow-lg z- 121 flex flex-col h-full items-center pt-20">
            <NavLink to="/" className={({ isActive }) => (isActive ? "mobile-active" : "")}>
              <li className=" flex gap-1.5 items-center ">
                <House />
                Home
              </li>
            </NavLink>
            <NavLink to="/shop"  className={({ isActive }) => (isActive ? "mobile-active" : "")}>
              <li className=" flex gap-1.5 items-center">
                <ShoppingBag />
                Shop
              </li>
            </NavLink>
            <NavLink to="/cart"  className={({ isActive }) => (isActive ? "mobile-active" : "")}>
              <li className=" flex gap-1.5 items-center">
                <div className="relative">
                  <ShoppingCart />
                  <span className="cart-badge">3</span>
                </div>
                Cart
              </li>
            </NavLink>
          </ul>
        )}
      </div>
    </nav>
  );
}
