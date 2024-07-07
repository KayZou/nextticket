import React from "react";
import prisma from "@/prisma/db";
import TicketsTable from "./TicketsTable";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default async function Tickets() {
  const tickets = await prisma.ticket.findMany();
  return (
    <div>
      <Link
        className={buttonVariants({ variant: "default" })}
        href="/tickets/new"
      >
        New Ticket
      </Link>
      <TicketsTable tickets={tickets} />
    </div>
  );
}
