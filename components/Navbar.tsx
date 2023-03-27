import Link from "next/link";
import { useState } from "react";
import ActiveLink from "../hooks/ActiveLink";

type ActiveLinkProps = {
    label : string;
    href: string; 
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Projects", path: "/projects" },
      { name: "Contact", path: "/contact-us" },
    ].map((item) => (
      <li key={item.name} className="flex justify-center mr-4 mt-4 md:mt-0">
        <ActiveLink
          label={item.name}
          href={item.path}
       />
      </li>
    ));
  
    return (
      <nav className="fixed top-0 w-full z-10 md:flex items-center justify-between text-black p-4">
        <div className="flex items-center justify-between">
          <div className="">
            <Link href="/" className="text-xl font-bold">
              Shoibal Das
            </Link>
          </div>
          <div className="flex md:hidden">
            {isOpen ? (
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
              >
                <svg
                  className="h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.828-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.828z" />
                </svg>
              </button>
            ) : (
              <button
                onClick={() => setIsOpen(true)}
                className="text-gray-700 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
              >
                <svg
                  className="h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                </svg>
              </button>   
            )}
          </div>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:w-auto`}
        >
          <ul className="text-sm md:flex justify-center">{navItems}</ul>
        </div>
      </nav>
    );
};
 
export default Navbar;