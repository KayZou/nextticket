import options from "@/app/api/auth/[...nextauth]/options";
import UserForm from "@/components/UserFom";
import prisma from "@/prisma/db";
import { getServerSession } from "next-auth";
import React from "react";

interface Props {
  params: { id: string };
}

export default async function EditUser({ params }: Props) {
  const session = await getServerSession(options);

  if (session?.user.role !== "ADMIN")
    return <p className="text-center text-destructive">Admin only page!</p>;

  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (user) return (user.password = "");

  if (!user)
    return <p className="text-center text-destructive">User not found.</p>;

  return (
    <div>
      <UserForm user={user} />
    </div>
  );
}
