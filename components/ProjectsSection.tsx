"use client";
import React from "react";
import Image from "next/image";
import { projects } from "@/data/index";
import { FaCode, FaEye } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: +200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      id="projects"
      className="projects-section h-full mb-32 "
    >
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
      <div className="projects-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(
          ({ id, image, description, title, gitHubLink, link, tags }) => (
            <div
              key={id}
              className="project-item relative w-fit  bg-neutral-900  border border-neutral-700 p-4 rounded-xl shadow-lg hover:shadow-pink-800 hover:scale-105 transition-all duration-500"
            >
              <Image
                src={image}
                alt={title}
                width={380}
                height={500}
                className="rounded-lg max-h-[385px] w-full object-center"
              />
              <h3 className="text-xl font-semibold my-2">{title}</h3>
              <p className="text-neutral-500 text-sm">{description}</p>
              <div className="absolute inset-0 mt-24 flex items-center justify-center gap-2 text-black text-3xl opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="border border-neutral-800 rounded-full p-2 bg-neutral-300 hover:bg-neutral-500">
                  <a href={link}>
                    <FaEye />
                  </a>
                </div>
                <div className="border border-neutral-800 rounded-full p-2 bg-neutral-300 hover:bg-neutral-500">
                  <a href={gitHubLink}>
                    <FaCode />
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap gap-1">
                {tags?.map((tag, index) => (
                  <div
                    key={index}
                    className="px-2 py-1 my-1 border border-pink-900 rounded-xl w-fit mt-2"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
