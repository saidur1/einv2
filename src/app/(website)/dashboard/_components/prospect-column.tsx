"use client";
import { Prospect } from "@prisma/client";
import { ColumnDef, Row } from "@tanstack/react-table";
import moment from "moment";
import RowAction from "./row-action";

export const prospectColumns: ColumnDef<Prospect>[] = [
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "createdAt",
    header: "createdAt",
    cell: ({ row }: { row: Row<Prospect> }) => (
      <p>{moment(row.original?.createdAt).fromNow()}</p>
    ),
  },
  {
    header: "Action",
    cell: ({ row }: { row: Row<Prospect> }) => {
      const data = row.original;

      return <RowAction data={data} />;
    },
  },
];
