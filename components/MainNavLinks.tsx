"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function MainNavLinks() {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Tickets", href: "/tickets" },
    { label: "Users", href: "/users" },
  ];

  const pathname = usePathname();

  return (
    <div className="flex items-center gap-2">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={`navbar-link ${
            pathname === link.href ? "text-primary underline" : ""
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
