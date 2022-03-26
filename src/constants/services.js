import React from "react";
import { images } from "./index";
import { MdDeveloperMode, MdPalette } from "react-icons/md";
import { GoMegaphone } from "react-icons/go";

export default [
  {
    title: "Frontend development",
    desc: "I enjoy creating beautiful and functional websites and apps.",
    icon: <MdDeveloperMode color="white" size={25} />,
    img: images.frontend,
    id: 1,
  },
  {
    title: "UI Design",
    desc: "Good looking websites and apps, nice user experience and feeling. That's one of the most important things for me and I always do my best to achieve that!",
    icon: <MdPalette color="white" size={25} />,
    img: images.design,
    id: 2,
  },
  {
    title: "Digital Marketing",
    desc: "I help all the brands I work with to achieve their maximal potential and improve social media presence",
    icon: <GoMegaphone color="white" size={25} />,
    img: images.marketing,
    id: 3,
  },
];
