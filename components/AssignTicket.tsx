"use client";
import { Ticket, User } from "@prisma/client";
import React, { useState } from "react";
import axios from "axios";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function AssignTicket({
  ticket,
  users,
}: {
  ticket: Ticket;
  users: User[];
}) {
  const [isAssigning, setIsAssigning] = useState(false);
  const [error, setError] = useState("");

  async function assignTicket(userId: string) {
    try {
      setError("");
      setIsAssigning(true);
      await axios
        .patch(`/api/tickets/${ticket.id}`, {
          assignedToUserId: userId === "0" ? null : userId,
        })
        .catch((error) => {
          setError(error.message);
        });
      setIsAssigning(false);
    } catch (error) {
      console.log(error);
      setError("Something bad happened");
    }
  }

  return (
    <div>
      {error && <p className="text-destructive text-center"> {error} </p>}
      <Select
        defaultValue={ticket.assignedToUserId?.toString() || "0"}
        onValueChange={assignTicket}
        disabled={isAssigning}
      >
        <SelectTrigger>
          <SelectValue
            placeholder="Select a user"
            defaultValue={ticket?.assignedToUserId || "0"}
          ></SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="0">Unassigned</SelectItem>
          {users
            ? users.map((user) => (
                <SelectItem key={user.id} value={user.id.toString()}>
                  {user.name}
                </SelectItem>
              ))
            : null}
        </SelectContent>
      </Select>
    </div>
  );
}
