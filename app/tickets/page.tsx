import React from "react";
import prisma from "@/prisma/db";
import TicketsTable from "./TicketsTable";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Tags } from "lucide-react";
import Pagination from "@/components/Pagination";

interface SearchParams {
  page: string;
}

export default async function Tickets({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const pageSize = 10;

  const page = parseInt(searchParams.page) || 1;

  const ticketCount = await prisma.ticket.count();

  const tickets = await prisma.ticket.findMany({
    orderBy: { createdAt: "desc" },
    take: pageSize,
    skip: (page - 1) * pageSize,
  });

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
      <Pagination
        itemCount={ticketCount}
        pageSize={pageSize}
        currentPage={page}
      />
    </div>
  );
}
