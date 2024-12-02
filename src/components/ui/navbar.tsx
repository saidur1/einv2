"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const navList = [
  {
    id: crypto.randomUUID(),
    name: "About",
    href: "/about",
  },
  {
    id: crypto.randomUUID(),
    name: "Contact",
    href: "/contact",
  },
  {
    id: crypto.randomUUID(),
    name: "Blog",
    href: "/blog",
  },
  {
    id: crypto.randomUUID(),
    name: "FREE Case Study",
    href: "/case-study",
  },
];

const Navbar = () => {
  return (
    <>
      <Desktop />
      <Mobile />
    </>
  );
};

export default Navbar;

const Mobile = () => {
  return (
    <nav className=" md:hidden h-auto py-3 bg-black w-full">
      <div className="flex-col justify-between items-center h-full container space-y-2">
        <Link
          href="/"
          className="uppercase text-[32px]  text-white cursor-pointer hover:underline"
        >
          Saidur Consulting
        </Link>

        <div className="flex items-center gap-x-10 ">
          {navList.map(({ id, href, name }) => (
            <Link
              key={id}
              href={href}
              className="text-white text-[14px] font-semibold hover:text-white/80 cursor-pointer transition-colors duration-300"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
const Desktop = () => {
  const pathName = usePathname();
  return (
    <nav
      className={cn(
        "hidden md:block h-auto  bg-black w-full",
        pathName === "/case-study" ? "h-[60px]" : "md:h-[83px]"
      )}
    >
      <div className="flex justify-between items-center h-full container">
        <Link
          href="/"
          className="uppercase text-[32px] text-white hover:underline"
        >
          Saidur Consulting
        </Link>

        <div className="flex items-center gap-x-10">
          {navList.map(({ id, href, name }) => (
            <Link
              key={id}
              href={href}
              className="text-white text-[14px] font-semibold hover:text-white/80 cursor-pointer transition-colors duration-300"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
