"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  //console.log(pathname)
  const [input, setInput] = useState("");
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
         //console.log('isActive: ', isActive)
        return (
          <Link
            href={link.href}
            key={link.name}
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
            //className={`${link.href === pathname ? 'text-red-500 font-bold mr-4': 'text-black ml-2'}`}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
