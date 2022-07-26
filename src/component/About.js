import React from "react";
import aboutImg from "../assets/tech-image-2.jpg";

const About = () => {
  return (
    <div className="about bg-zinc-300  flex flex-col md:flex-row-reverse ">
      <img
        src={aboutImg}
        width="632"
        height="273"
        alt="about us"
        className="md:w-1/2  object-cover"
      />
      <div className="p-4 md:pr-10 md:pl-40 md:w-1/2">
        <h2 className="p-4 text-2xl font-bold relative">À propos</h2>
        <div className="absolute h-2 w-28 bg-cyan translate-x-3 -translate-y-4"></div>
        <p className=" my-8 px-4 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
          accusantium. Perferendis excepturi eos dolor sed illo quod odio
          cupiditate illum vel cumque dignissimos nobis consequuntur,
          consequatur, rem suscipit necessitatibus! Iste voluptatum, adipisci
          eaque, eum placeat impedit saepe iusto sed quisquam eius cum deleniti
          blanditiis suscipit quaerat, dicta ipsum. Laboriosam iure temporibus
          harum possimus architecto quis. Quisquam culpa, ullam commodi dicta ab
          nihil cupiditate in ducimus dolore reiciendis voluptas eaque
          asperiores harum hic rerum nulla maiores facere officiis eos aperiam
          ad? Sapiente, voluptas molestiae eveniet dolorem nostrum non modi nam
          animi esse ex voluptatibus similique ipsum tempora velit dicta
          distinctio! Ut?
        </p>
      </div>
    </div>
  );
};

export default About;
