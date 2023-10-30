"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <Container>
      <nav className="p-6">
        <ul className="flex justify-end space-x-4">
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
              href="/why"
              className={`text-lg ${
                pathname === "/why" ? "text-amber-500" : ""
              }`}
            >
              Why
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={`text-lg ${
                pathname.includes("blog") ? "text-amber-500" : ""
              }`}
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Navbar;
