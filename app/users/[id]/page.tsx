import UserForm from "@/components/UserFom";
import prisma from "@/prisma/db";
import React from "react";

interface Props {
  params: { id: string };
}

export default async function EditUser({ params }: Props) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });

  user.password = "";

  if (!user)
    return <p className="text-center text-destructive">User not found.</p>;

  return (
    <div>
      <UserForm user={user} />
    </div>
  );
}
