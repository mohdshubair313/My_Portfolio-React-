import {fadeIn} from '../variant';
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section className='py-16 lg:section' id='contact'>
            <div className="container mx-auto">
                <div className='flex flex-col lg:flex-row'>

                <motion.div variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'>
                    <div>
                        <h4 className='text-xl uppercase text-slate-950 font-semibold mb-2 tracking-wide'>Get in Touch</h4>
                        <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's Work <br /> Together
                        </h2>
                    </div>
                </motion.div>
                
                <motion.form variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounder-2x1 flex flex-col gap-y-6 pb-24 p-6 items-center'>
                    <input type="text" className='bg-transparent border-b py-3 placeholder:text-white focus:border-slate-900 transition-all' placeholder='Your Name'/>
                    <input type="text" className='bg-transparent border-b py-3 placeholder:text-white focus:border-slate-900 transition-all' placeholder='Your Email'/>
                    <textarea className='bg-transparent border-b py-12 placeholder:text-white focus:border-slate-900 transition-all' placeholder='Your Message'></textarea>
                    <button className='btn btn-lg'>Send Message</button>
                </motion.form>

                </div>
            </div>
        </section>
    )
}