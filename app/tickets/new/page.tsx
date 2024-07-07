import React from "react";
import dynamic from "next/dynamic";

const TicketForm = dynamic(() => import("@/components/TicketForm"), {
  ssr: false,
});

export default function NewTicket() {
  return (
    <div>
      <TicketForm />
    </div>
  );
}
