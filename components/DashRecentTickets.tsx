import { Prisma } from "@prisma/client";
import React from "react";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
} from "./ui/card";
import StatusBadge from "./StatusBadge";
import Link from "next/link";
import TicketPriority from "./TicketPriority";

type TicketWithUser = Prisma.TicketGetPayload<{
  include: { assingedToUser: true };
}>;

interface Props {
  tickets: TicketWithUser[];
}

export default function DashRecentTickets({ tickets }: Props) {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Recently Updated Tickets</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {tickets.length > 0 ? (
            tickets.map((ticket) => (
              <div key={ticket.id} className="flex items-center">
                <StatusBadge status={ticket.status} />
                <div className="ml-4 space-y-1">
                  <Link href={`/tickets/${ticket.id}`}>
                    <p>{ticket.title}</p>
                    <p>
                      <span className="text-gray-400">Assigned to: </span>
                      {ticket.assingedToUser?.name}
                    </p>
                  </Link>
                </div>
                <div className="ml-auto font-medium">
                  <TicketPriority priority={ticket.priority} />
                </div>
              </div>
            ))
          ) : (
            <p>No tickets available.</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
