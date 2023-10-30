/* eslint-disable react/no-unescaped-entities */

import Container from "@/components/Container";
import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <Container>
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center text-center">
          <div className="mb-60">
            <h1 className="mb-4 text-8xl font-bold text-amber-500">
              Hello, Render
            </h1>
            <p className="text-3xl">I'm Matt. I'd like to come work for you.</p>
          </div>
          <Link href="/why">
            <div className="rounded-full bg-amber-500 text-5xl text-white w-fit px-16 py-3">
              Why hire me? ➡
            </div>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
