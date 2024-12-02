import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <main className="container">
      <section className="flex flex-col md:flex-row gap-y-10 items-start justify-start md:px-5 py-[80px] gap-x-[100px]">
        <div className="max-w-[520px] space-y-[30px]">
          <h1 className="text-[32px] text-2F font-bold mb-[50px]">
            About Saidur Consulting
          </h1>
          <p>
            Saidur Consulting is dedicated to helping entrepreneurs and
            businesses across the United States obtain their Employer
            Identification Number (EIN) with ease and efficiency.
          </p>
          <p>
            We understand that starting or growing a business comes with
            challenges, and navigating the EIN application process shouldn’t be
            one of them. Our team ensures a smooth and hassle-free experience,
            so you can focus on your business goals.
          </p>
          <p>
            With years of expertise, Saidur Consulting has assisted countless
            clients in launching their businesses successfully, ensuring they
            have the compliance tools they need to thrive.
          </p>
          <Button
            className="rounded-[3px] bg-blue-primary hover:bg-blue-primary/80 text-[20px] w-[240px] h-[50px]"
            asChild
          >
            <Link href="/case-study">Get Started Today</Link>
          </Button>
        </div>
        <div>
          <Image
            width={614}
            height={416}
            alt="profile"
            src="https://utfs.io/f/Y2NgHE9NGrU2ZASmg4xoedm97BSnsa6bWJC0LpiYtjkIGyUH"
          />
        </div>
      </section>
    </main>
  );
};

export default Page;
