"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
      <nav aria-label="navigation" className="w-full px-[40px] flex items-center justify-between py-4">
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

      </nav>
    </header>
  );
};

export default Header;
