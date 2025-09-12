import { Link } from "react-router";
import { HashLink } from "react-router-hash-link";

export default function SideBar() {
  return (
    <aside className="hidden lg:block w-48 p-4 border border-gray-300 rounded-lg m-4">
      <h2>Categories</h2>
      <ul>
        <li>
          <HashLink smooth to="#men's-clothing">
            Men's Clothing
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#women's-clothing">
            Women's Clothing
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#electronics">
            Electronics
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#jewellery">
            Jewellery
          </HashLink>
        </li>
      </ul>
    </aside>
  );
}
