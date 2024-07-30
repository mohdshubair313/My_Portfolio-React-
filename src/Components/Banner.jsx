import React from "react";
import image from "../assets/imresizer-1714032255484-removebg-preview.png";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";

export default function Banner() {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center gap-y-8 lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              Mohd <span>Shubair</span>
            </motion.h1>
            <motion.div  variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
              <span className="text-white mr-4">I am a</span>
              <span className="inline-block w-[200px]">
                <TypeAnimation
                  sequence={[
                    "Developer",
                    2000,
                    "Freelancer",
                    2000,
                    "Student",
                    2000,
                  ]}
                  speed={50}
                  className="text-slate-400"
                  wrapper="span"
                  repeat={Infinity}
                />
              </span>
            </motion.div>
            <motion.p  variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam voluptatum commodi tenetur odio nam reiciendis nobis,
              ipsa quas pariatur inventore asperiores quia velit natus assumenda
              minima dolorem provident nesciunt eos.
            </motion.p>
            <motion.div  variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <button to="Contact" className="btn btn-lg" >Contact me</button>
              <a href="#" className=" text-gradient btn-link">
                My Portfolio
              </a>
            </motion.div>
            <motion.div  variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a className="cursor-pointer" href="https://github.com/mohdshubair313">
                <FaGithub />
              </a>
              <a className="cursor-pointer" href="https://www.instagram.com/shubair_110/">
                <FaInstagram />
              </a>
              <a className="cursor-pointer" href="https://www.linkedin.com/in/mohd-shubair-b1a454250/">
                <FaLinkedin />
              </a>
            </motion.div>
          </div>
          <motion.div  variants={fadeIn("down", 0.5)}
              initial="hidden"
              whileInView={"show"}
              className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]">
            <img className="h-[290px]" src={image} alt="image of shubair" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
