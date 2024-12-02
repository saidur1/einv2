"use client";
import Head from "next/head";
import { useEffect } from "react";

const Schedule = () => {
  useEffect(() => {
    // Ensure the script runs after the component mounts
    const script = document.createElement("script");
    script.src = "https://js.appointlet.com/";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup the script if needed
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <Head>
        <link href="https://js.appointlet.com/styles.css" rel="stylesheet" />
      </Head>
      <div className="container my-[50px]">
        <h1 className="text-[44px] text-[#2F2F2F] max-w-[930px] mx-auto text-center">
          Schedule Your Breakthrough Strategy Session With Sam Right Now
        </h1>

        <div className="shadow-md w-full h-[500px] border-[1px] mt-10 flex justify-center items-center text-gray-400">
          <iframe
            src="https://appt.link/saidurconsulting/ein"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </>
  );
};

export default Schedule;
