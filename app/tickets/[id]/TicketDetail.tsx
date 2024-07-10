import { Ticket } from "@prisma/client";
import React from "react";
import ReactMarkDown from "react-markdown";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import StatusBadge from "@/components/StatusBadge";
import TicketPriority from "@/components/TicketPriority";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

interface Props {
  ticket: Ticket;
}

export default function TicketDetail({ ticket }: Props) {
  return (
    <div className="lg:grid lg:grid-cols-4">
      <Card className="mx-4 mb-4 lg:col-span-3 lg:mr-4">
        <CardHeader>
          <div className="flex justify-around mb-4">
            <StatusBadge status={ticket.status} />
            <TicketPriority priority={ticket.priority} />
          </div>
          <CardTitle>{ticket.title}</CardTitle>
          <CardDescription>
            Created: {ticket.createdAt.toLocaleDateString()}
          </CardDescription>
        </CardHeader>
        <CardContent className="prose dark:prose-invert">
          <ReactMarkDown>{ticket.description}</ReactMarkDown>
        </CardContent>
        <CardFooter>
          Updated:{" "}
          {ticket.updatedAt.toLocaleDateString("en-US", {
            year: "2-digit",
            month: "2-digit",
            day: "2-digit",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })}
        </CardFooter>
      </Card>
      <div className="mx-4 flex lg:flex-col lg:mx-0 gap-2">
        <Link
          href={`/tickets/edit/${ticket.id}`}
          className={`${buttonVariants({ variant: "default" })}`}
        >
          <Pencil className="mr-2 h-4 w-4" size={22} />
          Edit Ticket
        </Link>
        <Link
          href={`/tickets/edit/${ticket.id}`}
          className={`${buttonVariants({
            variant: "default",
          })} bg-red-500 hover:bg-red-400`}
        >
          <Trash2 className="mr-2 h-4 w-4 " size={22} />
          Delete Ticket
        </Link>
      </div>
    </div>
  );
}
