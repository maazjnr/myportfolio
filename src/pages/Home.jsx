import React, { useEffect, useState } from "react";
import HomeImg from '../asset/myNewImg.jpg' ;
import { motion } from "framer-motion";
import MaazCV from '../asset/Ademu D. Ishaq Resume.pdf';
import Aos from "aos";
import "aos/dist/aos.css";
import {Link} from 'react-router-dom';
import {RiDownloadCloud2Fill} from 'react-icons/ri';


const Home = () => {

    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);


    return(
        <motion.div
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{ duration: 0.7}}
        >
        
            <div className="homepage" data-aos="flip-right">
             <section data-aos="zoom-in" className="section1">

                <p style={{color: "white"}}>Hi, my name is Maaz</p>
                <hr />
                <h1>I'm a Frontend <br />
                    Web & Mobile Developer</h1>
                <p className="two-years">With 2+ years 
                    of experience, i design awesome website, <br />
                    dynamic webapp & mobile application using latest tools & 
                    technologies. <br /> Passion to learn and  solve real world 
                    problems with my skills with the <br /> most useful
                     tools and technologies to get the perfect job done.
                    </p>

                <div className="mybtn">
                    <button className="btn1"><Link style={{color: '#000'}} to="/about">
                    More About Me</Link></button>
                    <button className="btn2"><Link style={{color: 'white'}} to="/project">
                    My Projects</Link></button>
                </div>

             </section>

             <section data-aos="zoom-in"  className="section2">
             <img className="homeImg" src={HomeImg} loading="lazy" alt="homeImg" />
            <div>
            <button className="my-cv">
                <a href={MaazCV} download alt="mycv"> <RiDownloadCloud2Fill/>RESUME</a>
                </button>
            </div>

             </section>
            </div>
        </motion.div>
    )
}

export default Home;



