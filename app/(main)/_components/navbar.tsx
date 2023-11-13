import Link from "next/link";
import Logo from "./logo";

function Navbar() {
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
            <Link href={link.href} key={link.name}>
              {link.name}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
