"use client";

import Link from "next/link";
import Container from "./Container";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  // No footer on blog
  if (pathname.includes("/blog")) {
    return;
  }

  let linkHref = "/why";
  let linkText = "Why hire me? ➡";

  if (pathname === "/why") {
    linkHref = "/blog/deploy-static-site-to-render";
    linkText = "Writing sample ➡";
  }

  return (
    <Container>
      <footer className="fixed inset-x-0 bottom-0 flex h-20 items-center justify-center bg-white lg:h-28">
        <Link href={linkHref}>
          <div className="w-fit rounded-full bg-amber-500 px-8 py-2 text-2xl text-white transition duration-300 ease-in-out hover:bg-amber-600 lg:py-4 lg:px-12 lg:text-4xl">
            {linkText}
          </div>
        </Link>
      </footer>
    </Container>
  );
};

export default Footer;
