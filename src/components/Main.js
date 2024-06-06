import React from 'react';
import myImage from './../assets/main_image.gif';
import Typewriter from './Typewriter';
import { motion } from 'framer-motion';
import twitter from '../assets/twitter.gif';
import linkedin from '../assets/linkedin.gif';
import github from '../assets/github.gif';
import downloadIcon from '../assets/download.gif'; // Add your download icon here

function Main() {
    return (
        <div id="main" className="flex flex-col sm:min-h-0 min-h-[calc(100vh-6.4rem)] pl-[3rem] lg:mt-2 lg:m-16 lg:pt-0 pr-[1rem] py-[0rem] md:mt-0 md:pt-0 tm:flex-col sm:flex-row sm:px-[1.5rem] sm:mt-0">
            <div className="flex flex-col sm:flex-row sm:items-center pt-0 justify-center w-full min-h-[58vh] tm:min-h-min tm:w-full sm:min-h-min sm:w-full sm:pt-0 tm:pt-0">
                <div className="flex flex-col justify-center sm:w-[70%] w-full sm:mr-5">
                    <h1 className="font-[400] text-[2rem] md:text-[1.7rem] tm:text-[2rem] sm:text-[1.6rem]">
                        Hi,
                    </h1>
                    <blockquote className="font-[800] text-[2rem] text-[#ec6e59;] mt-[-10px] lg:text-[2.4rem] md:text-[2rem] tm:text-[2.5rem] sm:text-[1rem]">
                        I'm
                        <span className="before:block mx-4 mb-6 mt-4 before:absolute before:-inset-2 before:-skew-y-[3deg] before:bg-[#ec6e59;] relative inline-block">
                            <span className="relative text-[#fffffff0] dark:text-[#20262E]">Kunal Puri</span>
                        </span>
                    </blockquote>
                    <div className="h-10 mt-4">
                        <Typewriter />
                    </div>
                    <p className="dark:text-[#ccc] text-justify leading-loose pt-5 font-[400] mt-[-.8rem] text-custom-18 sm:text-[1rem] w-[90%] md:w-[95%] tm:w-full sm:w-full sm:mt-0">
                        I am passionate about building websites and web applications. With a degree in Information technology from SCOE, Pune. I have honed my technical skills through diverse projects, both individually and in teams. 

                        I have built end-to-end web applications using technologies such as Figma, JavaScript, ReactJS, Next.js,  Bootstrap, Tailwind CSS, NodeJS, Git, MongoDB, and MySQL.
                    </p>
                    <div className="flex items-center mt-4">
                        <a href="https://drive.google.com/uc?export=download&id=1aaB2RHfcTb3VGHqXSFzF1wF28Rh7UwlQ" className="inline-flex items-center justify-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition duration-300 ease-in-out">
                            <img src={downloadIcon} alt="Download"  className="w-6 h-6 mr-2" style={{ borderRadius: '50%', objectFit: 'cover' }} />
                            Download CV
                        </a>
                    </div>
                </div>
                <div className="flex py-[10px] tm:mt-[40px] items-start mt-[-30px] tm:pr-0 sm:pr-0 sm:justify-between sm:flex-col">
                    <motion.div 
                        className="box"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="h-full justify-end flex items-center sm:justify-center">
                            <img
                                src={myImage}
                                alt="main"
                                className="h-[80%] min-h-[100px] min-w-[100px] tm:h-[36px] tm:mt-[200px] sm:min-h-[100px] sm:min-w-[100px] sm:ml-[30px]"
                            />
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    className="flex place-content-center mt-7"
                    initial={{ x: '100vw' }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1, type: 'spring', stiffness: 50 }}
                >
                    <div className="flex flex-row sm:flex-col gap-4">
                        <a rel="noreferrer" href="https://www.linkedin.com/in/kunalpuri1/" target="_blank">
                            <img width="40" height="40" src={linkedin} style={{ borderRadius: '50%', objectFit: 'cover' }} alt="LinkedIn" />
                        </a>
                        <a rel="noreferrer" href="https://github.com/kunalpuri123.com/" target="_blank">
                            <img width="40" height="40" src={github} style={{ borderRadius: '50%', objectFit: 'cover' }} alt="GitHub" />
                        </a>
                        <a rel="noreferrer" href="https://leetcode.com/u/kunalpuri_123/" target="_blank">
                            <img width="40" height="40" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo.png" alt="LeetCode" />
                        </a>
                        <a rel="noreferrer" href="https://x.com/kunalpuri_123?mx=2" target="_blank">
                            <img width="40" height="40" src={twitter} style={{ borderRadius: '50%', objectFit: 'cover' }} alt="Twitter" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Main;
