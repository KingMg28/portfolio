"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [sended, setSended] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newEmail = {
      email: e.currentTarget.email.value,
      name: (e.currentTarget.elements.namedItem("name") as HTMLInputElement)
        .value,
      message: e.currentTarget.message.value,
    };
    console.log(newEmail);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEmail),
      });
      if (res.status === 200) {
        setSended(true);
      }
    } catch (error) {
      console.log(error);
      setSended(false);
    }
  };
  return (
    <section id="contact" className="py-8 flex flex-wrap justify-center my-14">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.25 }}
        className="w-full lg:w-1/2 "
      >
        <h2 className="text-2xl font-bold mb-3">Contact Me </h2>
        <p className="w-2/3">
          Feel free to reach out to me for any inquiries or collaborations.
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
      </motion.div>
      <div className="w-full lg:w-1/2  ">
        <motion.form
          initial={{ opacity: 0, x: +100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col  border border-neutral-700 p-4  rounded-lg bg-neutral-900 mx-5"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-wrap mb-4">
            <div className="flex flex-col w-full lg:w-1/2 pr-2">
              <label htmlFor="name">Name</label>
              <input
                className=" rounded-lg  bg-neutral-800 pl-2 py-2 mb-4 placeholder:text-neutral-500"
                type="text"
                id="name"
                placeholder="your name"
              />
            </div>
            <div className="flex flex-col w-full lg:w-1/2 pr-2">
              <label htmlFor="email">Email</label>
              <input
                className=" rounded-lg  bg-neutral-800 pl-2 py-2 mb-4 placeholder:text-neutral-500"
                type="email"
                id="email"
                placeholder="example@email.com"
              />
            </div>
          </div>

          <label htmlFor="message">Message</label>
          <textarea
            className=" rounded-lg  bg-neutral-800 pl-2 py-2 mb-4 placeholder:text-neutral-500 h-24"
            name="message"
            id="message"
            placeholder="Let's talk about your project"
          ></textarea>

          <button
            type="submit"
            className=" bg-pink-700 text-neutral-200 rounded-xl p-2  my-2"
          >
            Submit
          </button>
          {sended && (
            <label className=" text-green-600 text-center text-sm">
              email send successfuly
            </label>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default ContactUs;
