import UserForm from "@/components/UserFom";
import React from "react";
import UsersTable from "./UsersTable";
import prisma from "@/prisma/db";

export default async function Users() {
  const users = await prisma.user.findMany();
  return (
    <div>
      <UserForm />
      <UsersTable users={users} />
    </div>
  );
}
