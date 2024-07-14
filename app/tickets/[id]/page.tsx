import React from "react";
import prisma from "@/prisma/db";
import TicketDetail from "./TicketDetail";

interface Props {
  params: { id: string };
}

export default async function TicketPage({ params }: Props) {
  const ticket = await prisma.ticket.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  const users = await prisma.user.findMany()

  if (!ticket) return <p className="text-destructive">Ticket not found</p>;

  return <TicketDetail ticket={ticket} users={users}/>;
}
