"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import { FaBars } from "react-icons/fa";

const navLinks = [
  {
    text: "Creon Pass",
    href: "/pass",
    soonText: false,
  },
  {
    text: "Token",
    href: "/token",
    soonText: true,
  },
  {
    text: "AI Revenue",
    href: "/revenue",
    soonText: true,
  },
  {
    text: "AI Launchpad",
    href: "/launchpad",
    soonText: true,
  },
];

const Header = () => {
  const [mobileNav, setMobileNav] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleClickOutside: EventListener = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setMobileNav(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
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
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="text-base md:text-lg font-semibold text-white font-satoshi flex items-start justify-start gap-2"
            >
              {item.text}{" "}
              {item.soonText === true && (
                <span className="text-primary bg-black text-xs font-satoshi rounded-full py-0.5 px-1">
                  SOON
                </span>
              )}
            </Link>
          ))}
          <button
            type="button"
            className="text-base md:text-lg font-semibold text-white font-satoshi outline-none border-2 border-white py-2 px-8 rounded-md hover:bg-primary transition-all duration-300 hover:border-primary"
          >
            Connect
          </button>
        </nav>
        <span
          onClick={() => setMobileNav((prev) => !prev)}
          className="w-10 h-10 flex tab:hidden items-center justify-center bg-white text-primary rounded-lg"
        >
          {mobileNav ? <MdClose size={25} /> : <FaBars size={25} />}
        </span>
      </nav>
    </header>
  );
};

export default Header;
