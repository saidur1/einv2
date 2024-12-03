import { SignUp } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="mt-10 w-full container flex justify-center items-center h-[calc(100vh-350px)]">
      <SignUp />
    </div>
  );
};

export default Page;
