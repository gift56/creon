"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { socialIcons } from "@/constant";

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
        className="w-full px-4 lg:px-[40px] flex items-center justify-between py-4"
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
          className="w-10 h-10 flex lg:hidden items-center justify-center bg-white text-primary rounded-lg"
        >
          {mobileNav === false && <FaBars size={25} />}
        </span>
      </nav>

      <div
        className={`${
          mobileNav ? "right-0" : "-right-[326%]"
        } lg:hidden flex justify-end h-screen bg-black/40 gap-7 absolute top-0 w-full z-40 transition-all duration-300`}
      >
        <div
          ref={modalRef}
          className="flex flex-col items-start justify-between h-full bg-black text-white p-4 w-[250px]"
        >
          <div className="w-full flex flex-col items-start gap-8">
            <div className="w-full flex items-center justify-end gap-6">
              <button
                type="button"
                className="text-base md:text-lg font-semibold text-white font-satoshi outline-none border-2 border-white py-2 px-8 rounded-md hover:bg-primary transition-all duration-300 hover:border-primary"
              >
                Connect
              </button>
              <span
                className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-lg"
                onClick={() => setMobileNav(false)}
              >
                <MdClose size={25} />
              </span>
            </div>
            <nav className="flex flex-col w-full items-start justify-start gap-6">
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
            </nav>
          </div>
          <div className="flex items-center justify-start gap-4">
            {socialIcons.map((item, index) => (
              <Link key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border-2 border-white">
                <item.icon />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
