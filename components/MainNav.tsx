import Link from "next/link";
import React from "react";
import ToggleMode from "./ToggleMode";
import MainNavLinks from "./MainNavLinks";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function MainNav() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2 bg-blue-600/80 rounded-md py-1 px-2">
        <Avatar>
          <AvatarImage src="https://static.vecteezy.com/system/resources/previews/015/117/356/original/ticket-icon-in-white-colors-voucher-signs-illustration-png.png" />
          <AvatarFallback>NextTicket</AvatarFallback>
        </Avatar>
        <h1 className="font-extrabold">NextTicket</h1>
      </div>
      <MainNavLinks />
      <div className="flex items-center gap-2">
        <Link href={"/logout"}>Logout</Link>
        <ToggleMode />
      </div>
    </div>
  );
}
