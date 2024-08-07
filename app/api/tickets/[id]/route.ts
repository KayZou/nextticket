import { ticketPatchSchema, ticketSchema } from "@/ValidationSechams/ticket";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/db";

interface Props {
  params: { id: string };
}

export async function PATCH(req: NextRequest, { params }: Props) {
  const body = await req.json();
  const validation = ticketPatchSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }
  const ticket = await prisma.ticket.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!ticket) {
    return NextResponse.json({ error: "Ticket not found" }, { status: 404 });
  }
  if (body.assignedToUserId) {
    body.assignedToUserId = parseInt(body.assignedToUserId);
  }
  const ticketUpdated = await prisma.ticket.update({
    where: {
      id: ticket.id,
    },
    data: {
      ...body,
    },
  });
  return NextResponse.json(ticketUpdated, { status: 200 });
}

export async function DELETE(req: NextRequest, { params }: Props) {
  try {
    const ticket = await prisma.ticket.findUnique({
      where: { id: parseInt(params.id) },
    });
    if (!ticket)
      return NextResponse.json(
        { error: "Ticket not found" },
        { status: 404 }
      );
    await prisma.ticket.delete({
      where: { id: ticket.id },
    });
    return NextResponse.json({ message: "Ticket deleted successfully!" });
  } catch (error) {
    console.log(error);
  }
}
