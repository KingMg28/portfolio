import React from "react";
import { FaDiscord, FaLinkedin } from "react-icons/fa";
import { FiGithub, FiInstagram } from "react-icons/fi";

import { SocialLinks } from "@/data/index";

const NabBar = () => {
  return (
    <div className="flex justify-between items-center py-8 container mx-auto ">
      <div>
        <span className=" font-bold border border-neutral-800 p-4 rounded-full transition-all duration-500  shadow-lg hover:shadow-pink-700 ">
          MT
        </span>
      </div>
      <div className="flex gap-4 text-2xl ">
        <a href={SocialLinks.discord}>
          <FaDiscord className="hover:text-pink-700 hover:scale-150 transition-all duration-500" />
        </a>
        <a href={SocialLinks.github}>
          <FiGithub className="hover:text-pink-700 hover:scale-150 transition-all duration-500" />
        </a>
        <a href={SocialLinks.instagram}>
          <FiInstagram className="hover:text-pink-700 hover:scale-150 transition-all duration-500" />
        </a>
        <a href={SocialLinks.linkedin}>
          <FaLinkedin className="hover:text-pink-700 hover:scale-150 transition-all duration-500" />
        </a>
      </div>
    </div>
  );
};

export default NabBar;
