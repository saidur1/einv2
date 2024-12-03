import { prismaDB } from "@/lib/db";
import TableContainer from "./_components/table-container";

const Page = async () => {
  const prospects = await prismaDB.prospect.findMany();

  return (
    <div className="container my-5">
      <div>
        <h1 className="text-[22px] font-narrow font-semibold text-primary-black">
          Prospect
        </h1>
        <p className="text-primary-black/50">Collected email from prospect</p>
      </div>
      <TableContainer data={prospects} />
    </div>
  );
};

export default Page;
