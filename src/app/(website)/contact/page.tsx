import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import EmailCopy from "./_components/email-copy";

const Page = () => {
  return (
    <main className="container">
      <section className="flex flex-col md:flex-row gap-y-10 items-start justify-start md:px-5 py-[80px] gap-x-[100px]">
        <div className="max-w-[520px] space-y-[30px]">
          <h1 className="text-[32px] text-2F font-bold mb-[50px]">
            Get in Touch with SAIDUR CONSULTING
          </h1>
          <p>
            We’re here to help! To contact SAIDUR CONSULTING, please use the
            information below.
          </p>
          <p>
            Our business hours are Monday – Friday, 9:00 AM – 5:00 PM (Dhaka
            Time).
          </p>
          <EmailCopy />
          <div>
            <h3 className="font-semibold">Phone:</h3>
            <p>+880 19 7309 5752</p>
          </div>
          <Button
            className="rounded-[3px] bg-blue-primary hover:bg-blue-primary/80 text-[20px] w-[240px] h-[50px]"
            asChild
          >
            <Link href="/case-study">Get Your EIN</Link>
          </Button>
        </div>
        <div>
          <Image
            width={614}
            height={416}
            alt="profile"
            src="https://utfs.io/f/Y2NgHE9NGrU25M1D2FD7N2iZGrkvehEnuaFj9QDB318smcC0"
            className="rounded-md bg-gray-100"
          />
        </div>
      </section>
    </main>
  );
};

export default Page;
