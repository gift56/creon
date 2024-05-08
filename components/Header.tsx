"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  {
    text: "Creon Pass",
    href: "/",
    soonText: false,
  },
  {
    text: "Token",
    href: "/token",
    soonText: true,
  },
  {
    text: "AI Revenue",
    href: "/token",
    soonText: true,
  },
  {
    text: "AI Launchpad",
    href: "/token",
    soonText: true,
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${
        isScrolled ? "bg-black/80" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="navigation"
        className="w-full px-[40px] flex items-center justify-between py-4"
      >
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="creon logo"
            width={140}
            height={39}
            priority
            className="!w-[120px]"
          />
        </Link>
        <nav>
          <Link
            href="/"
            className="text-base md:text-lg font-semibold text-white font-satoshi"
          >
            Creon Pass
          </Link>
          <Link
            href="/token"
            className="text-base md:text-lg font-semibold text-white font-satoshi flex items-start justify-start gap-2"
          >
            Token{" "}
            <span className="text-primary bg-black text-xs font-satoshi rounded-full py-0.5 px-1">
              SOON
            </span>
          </Link>
        </nav>
      </nav>
    </header>
  );
};

export default Header;
