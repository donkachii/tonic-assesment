import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white md:bg-transparent">
      <div className="py-4 px-8 lg:px-10 lg:mt-10 xl:px-0 xl:mt-14 xl:py-0 xl:pb-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo_full.svg"
                alt="Boldo logo"
                width={162}
                height={42}
                priority
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex justify-center items-center space-x-10 text-base text-primary font-semibold">
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
                <button className="px-10 py-2 border-2 border-primary rounded-3xl hover:bg-gray-100">
                  Log In
                </button>
              </li>
            </ul>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-base text-primary font-semibold">
          <li>
            <Link href="#">
              <span className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-700 hover:bg-gray-50">
                Product
              </span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-700 hover:bg-gray-50">
                Services
              </span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-700 hover:bg-gray-50">
                About
              </span>
            </Link>
          </li>
          <li>
            <button className="block w-full text-center px-3 py-2 border-2 border-primary rounded-3xl hover:bg-gray-100 t">
              Log In
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
