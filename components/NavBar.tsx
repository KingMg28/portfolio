import React from "react";
import { FaDiscord, FaLinkedin } from "react-icons/fa";
import { FiGithub, FiInstagram } from "react-icons/fi";

const NabBar = () => {
  return (
    <div className="flex justify-between items-center py-8 container mx-auto ">
      <div>
        <span className=" font-bold border border-neutral-800 p-4 rounded-full ">MT</span>
      </div>
      <div className="flex gap-4 text-2xl">
        <a href="https://discord.gg/5AWQ6vCB">
          <FaDiscord />
        </a>
        <a href="https://github.com/KingMg28">
          <FiGithub />
        </a>
        <a href="https://www.instagram.com/mohammad_mt_28/">
          <FiInstagram />
        </a>
        <a href="#">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default NabBar;
