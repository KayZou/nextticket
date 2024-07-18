"use client";
import { Status } from "@prisma/client";
import React from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface dataProps {
  data: dataElements[];
}

interface dataElements {
  name: Status;
  total: number;
}

export default function DashCharts({ data }: dataProps) {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Tickets Count</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width={"100%"} height={370}>
          <BarChart data={data}>
            <XAxis
              dataKey={"name"}
              stroke="#3182ce"
              fontSize={14}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#3182ce"
              fontSize={14}
              tickLine={false}
              axisLine={false}
            />
            <Bar dataKey={"total"} fill="#3182ce" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
