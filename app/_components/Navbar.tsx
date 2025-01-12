import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4">
      {/* Left side: Logo */}
      <div className="text-2xl font-bold">Boldo</div>

      {/* Right side: Nav items */}
      <ul className="flex space-x-8 text-sm font-medium">
        <li>
          <Link href="#">
            <span className="hover:text-gray-700">Product</span>
          </Link>
        </li>
        <li>
          <Link href="#">
            <span className="hover:text-gray-700">Services</span>
          </Link>
        </li>
        <li>
          <Link href="#">
            <span className="hover:text-gray-700">About</span>
          </Link>
        </li>
        <li>
          <button className="px-4 py-2 border rounded hover:bg-gray-100">
            Log In
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
