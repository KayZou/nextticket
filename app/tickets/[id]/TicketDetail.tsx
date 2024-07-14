import { Ticket, User } from "@prisma/client";
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
import DeleteButton from "./DeleteButton";
import AssignTicket from "@/components/AssignTicket";

interface Props {
  ticket: Ticket;
  users: User[];
}

export default function TicketDetail({ ticket, users }: Props) {
  return (
    <div className="lg:grid lg:grid-cols-4">
      <Card className="mx-4 mb-4 lg:col-span-3 lg:mr-4 text-center">
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
        <CardContent className="prose dark:prose-invert text-center">
          <ReactMarkDown>{ticket.description}</ReactMarkDown>
        </CardContent>
        <CardFooter className="flex justify-center">
          <div>
            Updated:{" "}
            {ticket.updatedAt.toLocaleDateString("en-US", {
              year: "2-digit",
              month: "2-digit",
              day: "2-digit",
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })}
          </div>
        </CardFooter>
      </Card>
      <div className="mx-4 flex lg:flex-col lg:mx-0 gap-2  justify-center items-center">
        <div className="w-full flex flex-col gap-4">
          <AssignTicket ticket={ticket} users={users} />
          <Link
            href={`/tickets/edit/${ticket.id}`}
            className={`${buttonVariants({ variant: "default" })}`}
          >
            <Pencil className="mr-2 h-4 w-4" size={22} />
            Edit Ticket
          </Link>
          <DeleteButton ticketId={ticket.id} />
        </div>
      </div>
    </div>
  );
}
