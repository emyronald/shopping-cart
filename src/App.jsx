import { NavLink } from "react-router";
import "./App.css";
import { ShoppingBag } from "lucide-react";
import shopping from "./assets/shopping-man.png";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

export default function App() {
  return (
    <>
      <div className="px-10 pb-20">
        <Navbar />
        <div className="main justify-between items-center flex flex-col md:flex-row gap-10">
          <div className="text max-w-xl flex flex-col gap-6">
            <h1 className="text-4xl font-bold ">
              Welcome to <span className="color-secondary">EMSTORE</span>.
            </h1>
            <div>
              <h2 className="text-lg font-semibold">
                Your one stop for all your clothing needs and more. Have a look
                around and you might see something you like.
              </h2>
              <NavLink to="/shop">
                <button className="btn flex gap-1.5 items-center mt-6">
                  Shop Now <ShoppingBag />
                </button>
              </NavLink>
            </div>
          </div>
          <div>
            <img src={shopping} alt="" className="shadow-2xl max-w-s" />
          </div>
        </div>
      </div>
      <footer>
        <p className="text-center p-5 text-sm text-white-500 ">
          &copy; 2024 EmStore. All rights reserved.
        </p>
      </footer>
      
    </>
  );
}

//rgb(238,254,255) background color
//rgb(65,103,162) lighter blue
//oklch(71.5% 0.143 215.221) cyan
