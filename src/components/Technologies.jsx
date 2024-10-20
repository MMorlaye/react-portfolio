import { RiReactjsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { RiBootstrapLine } from "react-icons/ri";
import { RiNotionLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbSeo } from "react-icons/tb";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        },
    },
})

 const Technologies = () => {
  return (
    <motion.div className='border-b border-neutral-800 pb-24' id="technologies">
        <motion.h1 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="my-24 text-center text-4xl"
        >
            Technologies
        </motion.h1>
        <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
        >
            <motion.div 
                variants={iconVariants(2.5)} 
                initial="initial"
                animate="animate"
                className="rounded 2xl border-4 border-neutral-800 p-4"
            >
                <RiTailwindCssFill className="text-5xl text-blue-400 "/>
            </motion.div>
            <motion.div
                variants={iconVariants(2.5)} 
                initial="initial"
                animate="animate"
                className="rounded 2xl border-4 border-neutral-800 p-4"
            >
                <RiReactjsLine className="text-5xl text-cyan-400 "/>
            </motion.div>
            <motion.div 
                variants={iconVariants(2.5)} 
                initial="initial"
                animate="animate"
                className="rounded 2xl border-4 border-neutral-800 p-4"
            >
                <IoLogoJavascript className="text-5xl text-yellow-300"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(2.5)} 
                initial="initial"
                animate="animate"
                className="rounded 2xl border-4 border-neutral-800 p-4"
            >
                <SiMongodb className="text-5xl text-green-500 "/>
            </motion.div>
            <motion.div
                variants={iconVariants(2.5)} 
                initial="initial"
                animate="animate"
                className="rounded 2xl border-4 border-neutral-800 p-4"
             >
                <SiExpress className="text-5xl text-yellow-500 "/>
            </motion.div>
            <motion.div 
                variants={iconVariants(2.5)} 
                initial="initial"
                animate="animate"
                className="rounded 2xl border-4 border-neutral-800 p-4"
            >
                <FaNodeJs className="text-5xl text-green-500 "/>
            </motion.div>
            <motion.div 
                variants={iconVariants(2.5)} 
                initial="initial"
                animate="animate"
                className="rounded 2xl border-4 border-neutral-800 p-4"
            >
                <RiBootstrapLine className="text-5xl text-violet-500 "/>
            </motion.div>
            <motion.div 
                variants={iconVariants(2.5)} 
                initial="initial"
                animate="animate"
                className="rounded 2xl border-4 border-neutral-800 p-4"
            >
                <RiNotionLine className="text-5xl "/>
            </motion.div>
            <motion.div 
                variants={iconVariants(2.5)} 
                initial="initial"
                animate="animate"
                className="rounded 2xl border-4 border-neutral-800 p-4"
            >
                <TbSeo className="text-5xl "/>
            </motion.div>
        </motion.div>
    </motion.div>
  );
};

export default Technologies;