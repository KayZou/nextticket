import React from "react";
import prisma from "@/prisma/db";
import TicketsTable from "./TicketsTable";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Tags } from "lucide-react";

export default async function Tickets() {
  const tickets = await prisma.ticket.findMany();
  return (
    <div>
      <Link
        className={buttonVariants({ variant: "default" })}
        href="/tickets/new"
      >
        <Tags className="mr-2 h-4 w-4" size={22} />
        New Ticket
      </Link>
      <TicketsTable tickets={tickets} />
    </div>
  );
}
