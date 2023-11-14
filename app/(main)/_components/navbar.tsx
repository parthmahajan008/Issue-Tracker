"use client";

import Link from "next/link";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import classNames from "classnames";

function Navbar() {
  const currentPath = usePathname();
  const links = [
    {
      name: "Dashboard",
      href: "/",
    },
    {
      name: "Issues",
      href: "/issues",
    },
  ];
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <Link href="/">
        <Logo />
      </Link>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <ul className="flex space-x-6">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              className={classNames({
                "text-white bold  ": currentPath === link.href,
                "text-gray-300": currentPath !== link.href,
                "transition-colors duration-200 hover:text-white hover:text-lg":
                  true,
              })}
            >
              {link.name}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
