import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <div className="flex flex-col md:flex-row gap-y-10 items-start justify-center py-[80px] gap-x-[100px]">
        <div className="flex-1">
          <Image
            width={514}
            height={416}
            alt="profile"
            src="https://utfs.io/f/Y2NgHE9NGrU25M1D2FD7N2iZGrkvehEnuaFj9QDB318smcC0"
            className="bg-gray-100 rounded-md"
          />
        </div>
        <div className="max-w-[520px] space-y-[30px]">
          <h1 className="text-[32px] text-2F font-bold mb-[50px]">
            We Help Non-U.S. Businesses Obtain EIN From The USA Without LLC
          </h1>
          <p>Starting a business and need an EIN?</p>
          <p>
            Our streamlined process simplifies applying for and obtaining your
            Employer Identification Number so you can focus on growing your
            business.
          </p>
          <p>
            If you&apos;re ready to get your EIN without the stress, click the
            button below to get started today.
          </p>
          <Button
            className="rounded-[3px] bg-blue-primary hover:bg-blue-primary/80 text-[20px] w-[240px] h-[50px]"
            asChild
          >
            <Link href="/case-study">Get Your EIN</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
