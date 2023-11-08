"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <Container>
      <nav className="border-b-2 pb-4 pt-6">
        <ul className="flex justify-between text-2xl sm:justify-end sm:space-x-8">
          <li>
            <Link
              href="/"
              className={`${pathname === "/" ? "text-amber-500" : ""}`}
            >
              Hello
            </Link>
          </li>
          <li>
            <Link
              href="/why"
              className={`${pathname === "/why" ? "text-amber-500" : ""}`}
            >
              Why
            </Link>
          </li>
          <li>
            <Link
              href="/blog/deploy-static-site-to-render"
              className={`${pathname.includes("blog") ? "text-amber-500" : ""}`}
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
