import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import resume from "../assets/r1.pdf";
const SocialLinks = () => {
  return (
    <div className=" xl:flex hidden flex-col top-[35%] left-0 fixed">
      <ul>
        <li className="border-solid border-2 border-sky-500 flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:rounded-md bg-black duration-300 hover:ml-[-10px] ">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/pradip-das-4a87a111a/"
            className="flex justify-between items-center w-full text-white"
          >
            <>
              LinkedIn <FaLinkedin size={30} />
            </>
          </a>
        </li>
        <li className="border-solid border-2 border-sky-500 flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:rounded-md bg-black duration-300 hover:ml-[-10px] ">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Voyager-pradeep"
            className="flex justify-between items-center w-full text-white"
          >
            <>
              Github <FaGithub size={30} />
            </>
          </a>
        </li>
        <li className="border-solid border-2 border-sky-500 flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:rounded-md bg-black duration-300 hover:ml-[-10px] ">
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:pradipdasrmcf@gmail.com"
            className="flex justify-between items-center w-full text-white"
          >
            <>
              Mail <HiOutlineMail size={30} />
            </>
          </a>
        </li>
        <li className="border-solid border-2 border-sky-500 flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:rounded-md bg-black duration-300 hover:ml-[-10px] ">
          <a
            target="_blank"
            rel="noreferrer"
            href={resume}
            className="flex justify-between items-center w-full text-white"
          >
            <>
              Resume <BsFillPersonLinesFill size={30} />
            </>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
