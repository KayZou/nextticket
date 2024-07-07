import { Priority } from "@prisma/client";
import { Flame, Gauge } from "lucide-react";
import React from "react";

interface Props {
  priority: Priority;
}

const priorityMap: Record<Priority, { label: string; level: 1 | 2 | 3 }> = {
  HIGH: { label: "High", level: 3 },
  MEDIUM: { label: "Medium", level: 2 },
  LOW: { label: "Low", level: 1 },
};

export default function TicketPriority({ priority }: Props) {
  return (
    <>
      <Gauge
        className={`${
          priorityMap[priority].level === 3
            ? "text-red-600"
            : priorityMap[priority].level === 1
            ? "text-gray-600"
            : "text-yellow-600"
        }`}
      />
    </>
  );
}
