"use client";
import { useClerk } from "@clerk/nextjs";
import { useEffect } from "react";

const Page = () => {
  const { signOut } = useClerk();

  useEffect(() => {
    signOut({ redirectUrl: "/" });
  }, [signOut]);
};

export default Page;
