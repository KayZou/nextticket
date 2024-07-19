"use client";
import { buttonVariants } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";
import axios from "axios";

interface Props {
  ticketId: number;
}

export default function DeleteButton({ ticketId }: Props) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [deleting, setDeleting] = useState(false);

  async function deleteTicket() {
    try {
      setDeleting(true);
      await axios.delete(`/api/tickets/${ticketId}`);
      router.push("/tickets");
      router.refresh();
    } catch (error) {
      setError("Something bad happened");
      setDeleting(false);
      console.log(error);
    }
  }

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger
          className={`${buttonVariants({ variant: "destructive" })} w-full`}
          disabled={deleting}
        >
          <Trash2 className="mr-2 h-4 w-4" size={22} />
          Delete Ticket
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              ticket and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className={buttonVariants({ variant: "destructive" })}
              disabled={deleting}
              onClick={deleteTicket}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      {error && <p className="text-destructive text-center">{error}</p>}
    </div>
  );
}
