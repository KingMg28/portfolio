import React from "react";

const Footer = () => {
  return (
    <footer className=" border-t p-2  border-neutral-800 text-end ">
      <div className="container mx-auto flex justify-between items-center text-neutral-500">
        <p className=" font-bold text-neutral-200 shadow-lg">MT</p>
        <p >
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
