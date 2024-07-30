import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";
import img1 from "../assets/img1.png";
import img2 from "../assets/img1.png";
import img3 from "../assets/img1.png";

export default function Work() {
  return (
    <section className="section mt-12" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            <div>
              <h2 className="h2 leading-tight text-slate-950">
                My Latest <br />
                Work
              </h2>
              <p className="max-w-sm mb-16">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                reprehenderit dignissimos eius explicabo, asperiores porro
                debitis? Fuga, eos minima veritatis libero nemo itaque expedita
                nobis minus officia perspiciatis dolorum sunt?
              </p>
              <button className="btn btn-sm ">View all Projects</button>
            </div>

            <div className="group relative overflow-hidden border-2 border-white/50 rounded">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                src={img1}
                className="group-hover:scale-125 transition-all duration-500"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient cursor-pointer">
                  Full stack app
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">WanderLust</span>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10">
          <div className="group relative overflow-hidden border-2 border-white/50 rounded">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                src={img1}
                className="group-hover:scale-125 transition-all duration-500"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient cursor-pointer">
                  Full stack app
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">WanderLust</span>
              </div>
            </div>
          <div className="group relative overflow-hidden border-2 border-white/50 rounded">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                src={img1}
                className="group-hover:scale-125 transition-all duration-500"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient cursor-pointer">
                  Full stack app
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">WanderLust</span>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
