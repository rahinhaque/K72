import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] pt-5 text-center ">
      <div className="text-[8vw] leading-[8vw] text-white uppercase flex items-center justify-center">
        The spark{" "}
      </div>
      <div className="text-[8vw] leading-[8vw] text-white uppercase flex items-center justify-center">
        Who{" "}
        <div className="h-[8vw] rounded-full overflow-hidden -mt-5">
          <Video></Video>
        </div>{" "}
        generates
      </div>
      <div className="text-[9.5vw] leading-[8vw] text-white uppercase flex items-center justify-center">
        there
      </div>
      <div className="text-[9.5vw] leading-[8vw] text-white uppercase flex items-center justify-center">
        creativity
      </div>
    </div>
  );
};

export default HomeHeroText;
