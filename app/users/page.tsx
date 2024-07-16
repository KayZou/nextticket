import UserForm from "@/components/UserFom";
import React from "react";
import UsersTable from "./UsersTable";
import prisma from "@/prisma/db";
import { getServerSession } from "next-auth";
import options from "../api/auth/[...nextauth]/options";

export default async function Users() {
  const session = await getServerSession(options);
  if (session?.user.role !== "ADMIN")
    return <p className="text-center text-destructive">Admin only page!</p>;
  const users = await prisma.user.findMany();
  return (
    <div>
      <UserForm />
      <UsersTable users={users} />
    </div>
  );
}
