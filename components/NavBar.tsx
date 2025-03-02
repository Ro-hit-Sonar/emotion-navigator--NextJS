import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div
      className="bg-black pb-8 font-mono"
      // style={{
      //   backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 0.5px ,transparent 0)`,
      //   backgroundSize: "8px 8px ",
      //   backgroundRepeat: "repeat",
      // }}
    >
      <header className="text-white body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <span className="ml-3 text-xl hover:text-white">
              {" "}
              Emotion Navigator
            </span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-white">
              Home
            </Link>
            <Link href="/get-started" className="mr-5 hover:text-white">
              Get Started
            </Link>
            <Link href="/good_reads" className="mr-5 hover:text-white">
              Good Reads
            </Link>
            <Link href="/confess" className="mr-5 hover:text-white">
              Confess
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
