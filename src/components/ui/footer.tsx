"use client";
import Link from "next/link";
import { navList } from "./navbar";

const Footer = () => {
  return (
    <div className="py-[40px] container">
      <div className="flex flex-col md:flex-row gap-y-5 justify-between text-[14px] text-2f">
        <p>&copy; 2017 SamOvens.com</p>
        <div className="flex items-center gap-x-10">
          {navList &&
            navList.map(({ id, href, name }) => (
              <Link key={id} href={href}>
                {name}
              </Link>
            ))}
        </div>
      </div>
      <div className="flex items-center gap-x-10 pt-5 md:pt-[40px] text-[14px]">
        <Link href="/privacy" className="hover:underline">
          Privacy Policy
        </Link>
        <Link href="/" className="hover:underline">
          Terms
        </Link>
      </div>
    </div>
  );
};

export default Footer;
