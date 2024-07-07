import React from "react";
import prisma from "@/prisma/db";
import TicketsTable from "./TicketsTable";

export default async function Tickets() {
  const tickets = await prisma.ticket.findMany();
  return (
    <div>
      <TicketsTable tickets={tickets} />
    </div>
  );
}
