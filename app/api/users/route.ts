import prisma from "@/prisma/db";
import { userSchema } from "@/ValidationSechams/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validation = userSchema.safeParse(body);

    if (!validation.success)
      return NextResponse.json(validation.error.format(), { status: 400 });

    const duplicate = await prisma.user.findUnique({
      where: { username: body.username },
    });

    if (duplicate)
      return NextResponse.json(
        { message: "Username must be unique" },
        { status: 400 }
      );

    const hashedPassword = await bcrypt.hash(body.password, 10);

    body.password = hashedPassword;

    const newUser = await prisma.user.create({
      data: {
        ...body,
      },
    });
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error.message, { status: 500 });
  }
}
