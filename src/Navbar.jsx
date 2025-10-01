import logo from "./assets/Print_no_bg.svg";
import { NavLink } from "react-router";
import { Menu, X, House, ShoppingBag, ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function Navbar({ totalQty }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between w-[100vw]">
      <div className="w-60 ">
        <NavLink to="/">
          <img src={logo} className="w-[150px] h-auto flex-shrink-0 -my-4" />
        </NavLink>
      </div>
      <ul className="hidden md:flex gap-10 text-lg font-medium text-gray-600   justify-between desktop-nav">
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
              {totalQty > 0 && <span className="cart-badge">{totalQty}</span>}
            </div>
            Cart
          </li>
        </NavLink>
      </ul>
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-600 relative z-50 right-6"
        >
          {isOpen ? <X size={35} className="text-white" /> : <Menu size={35} />}
        </button>
        {isOpen && (
          <ul className=" gap-10 text-lg font-medium text-gray-600   w-80 nav-mobile fixed top-0 right-0 bg-white p-5 rounded shadow-lg z- 121 flex flex-col h-full items-center pt-20">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "mobile-active" : "")}
            >
              <li className=" flex gap-1.5 items-center ">
                <House />
                Home
              </li>
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) => (isActive ? "mobile-active" : "")}
            >
              <li className=" flex gap-1.5 items-center">
                <ShoppingBag />
                Shop
              </li>
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? "mobile-active" : "")}
            >
              <li className=" flex gap-1.5 items-center">
                <div className="relative">
                  <ShoppingCart />
                  {totalQty > 0 && (
                    <span className="cart-badge">{totalQty}</span>
                  )}
                </div>
                Cart
              </li>
            </NavLink>
          </ul>
        )}
      </div>
    </header>
  );
}
