"use client";

import Image from "next/image";
import { useEffect } from "react";

declare global {
  interface Window {
    _wq: {
      id?: string;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onReady?: (video: any) => void;
    }[];
  }
}

interface Props {
  videoId: string;
}

const WistiaPlayer = ({ videoId }: Props) => {
  useEffect(() => {
    // Ensure the script is loaded only once / test
    const script = document.createElement("script");
    script.src = "https://fast.wistia.com/assets/external/E-v1.js";
    script.async = true;
    document.body.appendChild(script);

    // Wait until Wistia API is ready, then access the player
    script.onload = () => {
      window._wq = window._wq || [];
      //   window._wq.push({
      //     id: videoId,
      //     onReady: (video : any) => {
      //       video.bind("end", async () => {
      //         sendGTMEvent(sendGTMEvent({ event: "videoWatched", value: "xyz" }));
      //         sendGAEvent("event", "videoWatched", { value: "xyz" });
      //         pixel.event("videoWatched", {
      //           videoId,
      //         });
      //       });
      //     },
      //   });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div
      className="wistia-wrapper pb-[2px] md:pb-2"
      style={{
        border: "3px solid black",
        borderRadius: "10px",
        boxShadow: "0 10px 6px -6px #777",
        overflow: "hidden", // To hide the overflow of the swatch image
        height: "100%",
      }}
    >
      <div
        className="wistia_responsive_padding"
        style={{ padding: "58.33% 0 0 0", position: "relative" }}
      >
        <div
          className="wistia_responsive_wrapper"
          style={{
            height: "100%",
            left: 0,
            position: "absolute",
            top: 0,
            width: "100%",
          }}
        >
          <div
            className={`wistia_embed wistia_async_${videoId} seo=false videoFoam=true`}
            style={{ height: "100%", position: "relative", width: "100%" }}
          >
            <div
              className="wistia_swatch"
              style={{
                height: "100%",
                left: 0,
                opacity: 0,
                overflow: "hidden",
                position: "absolute",
                top: 0,
                transition: "opacity 200ms",
                width: "100%",
              }}
            >
              <Image
                src={`https://fast.wistia.com/embed/medias/${videoId}/swatch`}
                style={{
                  filter: "blur(5px)",
                  height: "100%",
                  objectFit: "contain",
                  width: "100%",
                }}
                width={1000}
                height={1000}
                alt=""
                aria-hidden="true"
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onLoad={(e: any) => {
                  e.target.parentNode.style.opacity = 1;
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WistiaPlayer;
