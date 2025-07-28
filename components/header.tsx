import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "@/public/images/logo.jpeg"; // Adjust the path as necessary
interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Career", href: "/career" },
  { label: "Services", href: "/services" },
];

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-8 shadow-md  fixed top-0 w-full z-10">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center ">
          <Image
            src={logo}
            alt="App Planter Logo"
            width={200}
            height={700}
            className="backdrop-blur-sm"
          />
        </div>
        <ul className="flex space-x-15 ">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:underline text-lg ">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
