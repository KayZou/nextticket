import prisma from "@/prisma/db";
import { userSchema } from "@/ValidationSechams/user";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: { id: string };
}

export async function PATCH(req: NextRequest, { params }: Props) {
  try {
    const body = await req.json();
    const validation = userSchema.safeParse(body);

    if (!validation.success)
      return NextResponse.json(validation.error.format(), { status: 400 });

    const user = await prisma.user.findUnique({
      where: { id: parseInt(params.id) },
    });

    if (!user)
      return NextResponse.json({ message: "User not found" }, { status: 404 });

    if (body?.password && body.password != "") {
      const hashedPassword = await bcrypt.hash(body.password, 10);
      body.password = hashedPassword;
    } else {
      delete body.password;
    }
    if (user.username !== body.username) {
      const duplicateUsername = await prisma.user.findUnique({
        where: { username: body.username },
      });
      if (duplicateUsername)
        return NextResponse.json(
          { message: "Username must be unique" },
          { status: 409 }
        );
    }

    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: { ...body },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error.message, { status: 500 });
  }
}
