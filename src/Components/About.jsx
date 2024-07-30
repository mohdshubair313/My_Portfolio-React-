import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";

export default function About() {
  const [ref, inview] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="About" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>

          <motion.div   variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1">
            <h2 className="h2 text-slate-950 font-semibold">About Me.</h2>
            <h3 className="h3 mb-4">
              I am student Full stack Developer who ready to work with companies
              and clients.
            </h3>
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              inventore culpa dignissimos facere mollitia voluptatum natus
              ratione quos iure assumenda eum modi ullam possimus molestias
              voluptate animi amet id porro. Repelleum laboriosam enim expuis
              alias! Natus, obcaecati consectetur exercitationem libero minima
              possimus fuga dolore
            </p>

            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inview ? <CountUp start={0} end={8} duration={5} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Month of React Development
                  <br /> Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inview ? <CountUp start={0} end={3} duration={5} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Year in college <br />
                  as BCA Student
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inview ? <CountUp start={0} end={2} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Months in <br /> Freelancer
                </div>
              </div>
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btnLink">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
