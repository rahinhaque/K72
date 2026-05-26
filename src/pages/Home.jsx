import React from "react";
import Video from "../components/home/Video";
import HomeHeroText from "../components/home/HomeHeroText";
import HomeBottomText from "../components/home/HomeBottomText";

const Home = () => {
  return (
    <div>
      <div className="w-screen h-screen fixed">
        <Video />
      </div>

      <div className="h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between">
       <HomeHeroText></HomeHeroText>
       <HomeBottomText></HomeBottomText>
      </div>
    </div>
  );
};

export default Home;
