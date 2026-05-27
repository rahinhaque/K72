import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useLocation } from 'react-router-dom';

const Stairs = (props) => {

  const currentPath =  useLocation().pathname;
  console.log(currentPath);

   const stairParentRef = useRef(null);
   const pageRef = useRef(null);

   useGSAP(
     function () {
       const tl = gsap.timeline();

       // Reset & show
       tl.set(stairParentRef.current, { display: "flex" , delay: -0.5});
       tl.set(".stair", { y: "0%" });

       // Drop down from top
       tl.from(".stair", {
         height: 0,
         transformOrigin: "top",
         stagger: -0.1,
         duration: 0.6,
         ease: "power2.inOut",
       });

       // Slide out downward
       tl.to(".stair", {
         y: "100%",
         stagger: -0.1,
         duration: 0.6,
         ease: "power2.inOut",
       });

       // Hide container
       tl.set(stairParentRef.current, { display: "none" });

       gsap.from(pageRef.current, {
        opacity: 0,
         delay: 1.4,

       })
     },
     [currentPath],
   );

  return (
    <div>
      <div
        ref={stairParentRef}
        className="stair-container h-screen w-full fixed z-10 top-0"
      >
        <div className=" h-full w-full  flex">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={pageRef} className="page-content">
        {props.children}
      </div>
    </div>
  );
}

export default Stairs
