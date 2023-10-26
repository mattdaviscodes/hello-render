"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="p-4">
      <ul className="flex space-x-4 justify-end">
        <li>
          <Link
            href="/"
            className={`text-lg ${pathname === "/" ? "text-amber-500" : ""}`}
          >
            Hello
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`text-lg ${
              pathname === "/about" ? "text-amber-500" : ""
            }`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/why-da"
            className={`text-lg ${
              pathname === "/why-da" ? "text-amber-500" : ""
            }`}
          >
            Why DA?
          </Link>
        </li>
        <li>
          <Link
            href="/why-render"
            className={`text-lg ${
              pathname === "/why-render" ? "text-amber-500" : ""
            }`}
          >
            Why Render?
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className={`text-lg ${
              pathname === "/blog" ? "text-amber-500" : ""
            }`}
          >
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
