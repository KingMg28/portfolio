"use client";
import Image from "next/image";
import profile from "../public/profile.jpeg";
import Skills from "./Skills";
// import { Typewriter } from "nextjs-simple-typewriter";
import { motion } from "framer-motion";
import { AboutMe } from "@/data";

const Hero = () => {
  return (
    <section className=" min-h-screen" id="home">
      <div className=" pb-8 lg:mb-35">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start ">
              <motion.h1
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.85 }}
                className="pb-8 text-6xl font-thin tracking-tight lg:mt-16  "
              >
                Hello I&apos;m
                <br /> Mohammad Motaghi
              </motion.h1>
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.85 }}
                className=" bg-gradient-to-r from-pink-500 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight  text-transparent"
              >
                Full Stack Developer
              </motion.span>
              <motion.p
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 3 }}
                className="my-2 max-w-xl py-6 font-light text-neutral-400 tracking-tighter indent-2"
              >
                {AboutMe.Info}
              </motion.p>
            </div>
            <div className="flex justify-center lg:justify-start my-8">
              <Skills />
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:p-8">
            <motion.div
              initial={{ y: +100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              className="flex justify-center"
            >
              <Image
                className="rounded-full shadow-2xl border-4 p-1 border-pink-700 shadow-pink-600 hover:shadow-cyan-300 hover:border-cyan-400 transition-all duration-500"
                src={profile}
                width={420}
                height={420}
                alt="Picture of the author"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
