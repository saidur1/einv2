import ProspectCard from "@/components/ui/prospect-card";
import { prismaDB } from "@/lib/db";
import { Prospect } from "@prisma/client";

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
      <div className="my-5 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {prospects?.map((item: Prospect) => (
          <ProspectCard email={item?.email} key={item?.id} />
        ))}
      </div>
    </div>
  );
};

export default Page;
