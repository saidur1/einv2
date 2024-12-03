"use client";
import { DataTable } from "@/components/ui/data-table";
import { Prospect } from "@prisma/client";
import { prospectColumns } from "./prospect-column";

interface Props {
  data: Prospect[];
}

const TableContainer = ({ data }: Props) => {
  return (
    <div className="mt-3">
      <DataTable columns={prospectColumns} data={data} />
    </div>
  );
};

export default TableContainer;
