"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blogs", label: "Blogs" },
  { href: "/services", label: "Services" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-5 justify-between p-10 bg-zinc-600">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={
            pathname === link.href
              ? "text-green-600 font-bold"
              : "text-white"
          }
        >
          {pathname === link.href && "🟢 "}
          {link.label}
        </Link>
      ))}
    </nav>
  );
}