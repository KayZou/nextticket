import { ticketSchema } from "@/ValidationSechams/ticket";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/db";

interface Props {
  params: { id: string };
}

export async function PATCH(req: NextRequest, { params }: Props) {
  const body = await req.json();
  const validation = ticketSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }
  const ticket = await prisma.ticket.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if(!ticket){
    return NextResponse.json({message:"Ticket not found"},{status:404})
  }
  const ticketUpdated = await prisma.ticket.update({
    where: {
    //   id: parseInt(params.id),
    id: ticket.id
    },
    data: {
      ...body,
    },
  });
  return NextResponse.json(ticketUpdated, { status: 200 });
}
