"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "‘The Shoe Company’ E-Commerce Website",
        desc: "Developed a responsive e-commerce website for The Shoe Company using HTML and CSS. Ensured cross-browser compatibility and responsive design across various devices. Created an intuitive shopping experience with interactive elements and optimized website  for  smooth user interaction.",
    img: "/shoe-company.jpg",
    link: "https://satyarth00.github.io/The-Shoe-Company/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Number Guessing Game",
        desc: "Created an interactive number guessing game to entertain users with a fun challenge. The game includes random number generation, user input handling, feedback on guesses, and score tracking. Developed the game logic, designed the user interface, and implemented scoring and feedback mechanisms.",
    img: "/game.jpg",
    link: "https://nehasehgal18.github.io/GuessGameJS/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "`Focus on Today` Application",
        desc: "Developed a web application focused on helping users set, track, and complete daily goals, fostering productivity and personal growth. The application features a goal-setting and tracking interface, progress indicators, and motivational quotes. Designed and implemented the user interface, integrated goal-tracking functionality, and ensured a responsive design.",
    img: "/focus-on-today.jpg",
    link: "https://satyarth00.github.io/focus_on_today/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Countries API",
        desc: "Developed a dynamic web application by integrating external RESTful APIs to fetch and display country-specific data. Utilized JavaScript to handle API requests, process responses, and update the DOM. Implemented search functionality, filtering options, dark mode, and detailed country pages.",
    img: "/counties-api.jpg",
    link: "https://satyarth00.github.io/country-API/",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-5xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-2 text-white">
                  <h1 className="text-md font-bold md:text-lg lg:text-xl xl:text-2xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-44 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[500px] xl:h-[250px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[550px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-4 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col  items-center justify-center text-center">
        <h1 className="text-5xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-60 h-64 md:w-[400px] md:h-[400px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;