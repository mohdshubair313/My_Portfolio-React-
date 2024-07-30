import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";

const projects = [
  {
    name: "WanderLust",
    description:
      "This is my first ever deployed project which is deployed in the render.com. This is a booking website where you can book hotels. SignUp and Login funcionality is there and impemented by Passport package",
    link: "https://wanderlust-0w8i.onrender.com/listings",
  },
  {
    name: "Song-search project",
    description:
      "This is my first ever deployed project which is deployed in the render.com. This is a booking website where you can book hotels. SignUp and Login funcionality is there and impemented by Passport package",
    link: "https://wanderlust-0w8i.onrender.com/listings",
  },
  {
    name: "Basic chat app using CRUD operations",
    description:
      "This is my first ever deployed project which is deployed in the render.com. This is a booking website where you can book hotels. SignUp and Login funcionality is there and impemented by Passport package",
    link: "https://wanderlust-0w8i.onrender.com/listings",
  },
  {
    name: "stone-paper-scissor Game",
    description:
      "This is my first ever deployed project which is deployed in the render.com. This is a booking website where you can book hotels. SignUp and Login funcionality is there and impemented by Passport package",
    link: "https://wanderlust-0w8i.onrender.com/listings",
  },
];

export default function Projects() {
  return (
    <section className="section" id="Projects">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" flex-1 lg:bg-services ml-[-80px] mr-[40px] h-[600px] lg:bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 bg-color mb-6 ">What I do</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I am student Full stack Developer who ready to work with companies
              and clients.
              <button className="btn btn-sm">See My Work</button>
            </h3>
          </motion.div>
          <div>
            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1"
            >
              {projects.map((project, idx) => {
                const { name, description, link } = project;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={idx}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href=""
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
