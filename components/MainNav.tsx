import Link from "next/link";
import React from "react";
import ToggleMode from "./ToggleMode";
import MainNavLinks from "./MainNavLinks";
import { Tag } from "lucide-react";

export default function MainNav() {
  return (
    <div className="flex justify-between items-center">
      <div className=" bg-blue-600/80 rounded-md py-1 px-2">
        <Link href="/" className="flex items-center gap-2">
          <Tag />
          <h1 className="font-extrabold">NextTicket</h1>
        </Link>
      </div>
      <MainNavLinks />
      <div className="flex items-center gap-2">
        <Link href={"/logout"}>Logout</Link>
        <ToggleMode />
      </div>
    </div>
  );
}
