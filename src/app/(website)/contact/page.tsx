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
            Want to get in touch? Let&apos;s talk!
          </h1>
          <p>
            To contact Saidur or his staff please use the following information.
          </p>
          <p>
            Saidur Consulting staff operate Monday – Saturday 6 am – 7 pm
            (GMT+6).
          </p>
          <p>To contact Saidur or his team please use the information below:</p>
          <EmailCopy />
          <div>
            <h3 className="font-semibold">WhatsApp:</h3>
            <p>+880 197-309-5752‬</p>
          </div>
          <div>
            <h3 className="font-semibold">Fax:</h3>
            <p>+1 315-885-3345</p>
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
