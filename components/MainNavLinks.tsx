"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function MainNavLinks({ role }: { role?: string }) {
  const links = [
    { label: "Dashboard", href: "/", adminOnly: false },
    { label: "Tickets", href: "/tickets", adminOnly: false },
    { label: "Users", href: "/users", adminOnly: true },
  ];

  const pathname = usePathname();

  return (
    <div className="flex items-center gap-2">
      {links
        .filter((link) => !link.adminOnly || role === "ADMIN")
        .map((link, index) => (
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
