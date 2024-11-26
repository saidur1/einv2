import WistiaPlayer from "@/components/player/wistia-player";
import { Button } from "@/components/ui/button";
import { ChevronsRight } from "lucide-react";
import Link from "next/link";

const Video = () => {
  return (
    <div className="container py-[50px] space-y-[50px]">
      <div className="bg-[#EEEEEEDB] text-[#2F2F2F] text-[28px] w-full py-2 rounded-md font-medium px-4 ">
        Step One:{" "}
        <span className="text-red-500">
          Watch This Video Case Study Right Now
        </span>
      </div>

      <WistiaPlayer videoId="rr0wcaz0jq" />

      <div className="bg-[#EEEEEEDB] text-[#2F2F2F] text-[28px] w-full py-2 rounded-md font-medium px-4 ">
        Step Two:{" "}
        <span className="text-red-500">Apply Now To See If You Qualify</span>
      </div>

      <p className="text-center max-w-[80%] mx-auto">
        Now that you’ve absorbed all the cool training above, if you feel you’re
        ready to STEP UP and move forwards fast with your business then apply
        now and let’s see how I can help EXPLODE your business by clicking below
        now…
      </p>

      <div className="w-full flex justify-center">
        <Button
          className="bg-[#0174C7] w-[427px] h-[63px] flex justify-center items-center text-[22px] font-raleway text-white font-bold gap-x-2 mt-[20px] rounded-md px-4"
          asChild
        >
          <Link href="/schedule">
            Apply Now To See If you Qualify <ChevronsRight />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Video;
