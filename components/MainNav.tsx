import Link from "next/link";
import React from "react";
import ToggleMode from "./ToggleMode";
import MainNavLinks from "./MainNavLinks";

export default function MainNav() {
  return (
    <div className="flex justify-between">
      <MainNavLinks />
      <div className="flex items-center gap-2">
        <Link href={"/logout"}>Logout</Link>
        <ToggleMode />
      </div>
    </div>
  );
}
