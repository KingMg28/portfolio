"use client";
import React from "react";

import { motion } from "framer-motion";

import reactIcon from "../public/icons/react-svgrepo-com.svg";
import nextIcon from "../public/icons/nextjs-fill-svgrepo-com.svg";
import jsIcon from "../public/icons/js-svgrepo-com.svg";
import tsIcon from "../public/icons/typescript-icon-svgrepo-com.svg";
import nodeIcon from "../public/icons/node-js-svgrepo-com.svg";
import expressIcon from "../public/icons/express-svgrepo-com.svg";
import mongoIcon from "../public/icons/mongo-svgrepo-com.svg";
import mysqlIcon from "../public/icons/mysql-svgrepo-com.svg";
import Image from "next/image";

const iconVariants = (duration: number) => ({
  initial: { y: -5 },
  animate: {
    y: [5, -5],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
});

const Skills = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -150 }}
      transition={{ duration: 4 }}
      className="flex flex-col  "
    >
      <div>
        <h2 className="text-2xl text-center lg:text-start"> My Skills</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4 p-4  ">
        <div className="flex gap-4">
          <motion.div
            variants={iconVariants(1)}
            initial="initial"
            animate="animate"
          >
            <Image
              src={jsIcon}
              alt="js"
              width={45}
              className="min-w-12  p-2 bg-neutral-900 rounded-lg border border-neutral-700"
            />
          </motion.div>
          <motion.div
            variants={iconVariants(1.1)}
            initial="initial"
            animate="animate"
          >
            <Image
              src={tsIcon}
              alt="ts"
              width={45}
              className=" min-w-12  p-2 bg-neutral-900 rounded-lg border border-neutral-700"
            />
          </motion.div>
          <motion.div
            variants={iconVariants(1.15)}
            initial="initial"
            animate="animate"
          >
            <Image
              src={reactIcon}
              alt="react"
              width={45}
              className=" min-w-12  p-2 bg-neutral-900 rounded-lg border border-neutral-700"
            />
          </motion.div>
          <motion.div
            variants={iconVariants(1.2)}
            initial="initial"
            animate="animate"
          >
            <Image
              src={nextIcon}
              alt="nextjs"
              width={45}
              className=" min-w-12  p-2 bg-neutral-900 rounded-lg border border-neutral-700"
            />
          </motion.div>
          <motion.div
            variants={iconVariants(1.25)}
            initial="initial"
            animate="animate"
          >
            <Image
              src={nodeIcon}
              alt="node"
              width={45}
              className=" min-w-12  p-2 bg-neutral-900 rounded-lg border border-neutral-700"
            />
          </motion.div>
          <motion.div
            variants={iconVariants(1.3)}
            initial="initial"
            animate="animate"
          >
            <Image
              src={expressIcon}
              alt="expressIcon"
              width={45}
              className=" min-w-12  p-2 bg-neutral-900 rounded-lg border border-neutral-700"
            />
          </motion.div>
          <motion.div
            variants={iconVariants(1.35)}
            initial="initial"
            animate="animate"
          >
            <Image
              src={mysqlIcon}
              alt="mysqlIcon"
              width={45}
              className=" min-w-12  p-2 bg-neutral-900 rounded-lg border border-neutral-700"
            />
          </motion.div>
          <motion.div
            variants={iconVariants(1.4)}
            initial="initial"
            animate="animate"
          >
            <Image
              src={mongoIcon}
              alt="mongoIcon"
              width={45}
              className=" min-w-12  p-2 bg-neutral-900 rounded-lg border border-neutral-700"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
