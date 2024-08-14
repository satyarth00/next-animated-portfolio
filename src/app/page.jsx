"use client"
import Image from "next/image";
import {motion} from "framer-motion"
import Link from "next/link";

const Homepage = () => {
  return <motion.div
    className="h-full"
    initial={{ y: "-200vh" }}
    animate={{ y: "0%" }}
    transition={{duration:1}}
  >
  <div className="h-full flex md:flex-row flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">

    {/* Image container */}
<div className=" h-1/2 md:h-full md:w-1/2 relative ">
<Image src="/hero.png" alt="" fill className="object-contain" ></Image>
   </div>

    {/* Text container */}   
    
    <div className="h-1/2 md:h-full md:w-1/2 flex flex-col gap-5 items-center justify-center ">
      
      {/* Title */}
      <h1 className=" text-2xl md:text-4xl font-bold " >Crafting Digital Exeriences, Designing Tomorrow.</h1>
      {/* description */}
      <p className="md:text-lg">
      Welcome to my digital canvas, where innovation and creativity converge. With a keen eye for aesthetics and a mastery of code, my portfolio shows a diverse collection of projects that reflect my commitment to excellence.
      </p>
      {/* buttons */}
        <div className="w-full flex gap-4">
          <Link href="/portfolio"><button  className=" p-1 md:p-4 rounded-lg ring-1 ring-black bg-black text-white ">View My Work</button></Link>
      <Link href="/contact"><button className=" p-1 md:p-4 rounded-lg ring-1 ring-black">Contact Me</button></Link>
      
      </div>
      
      
</div>
    
    </div>
    </motion.div>
};


export default Homepage;
