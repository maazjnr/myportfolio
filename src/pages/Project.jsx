import { motion } from "framer-motion";
import styled from "styled-components";
import ElshadImg from '../image/elshad.jpg';
import EcomImg from '../image/shoeecom.jpg';
import Memegen from '../image/memegen.jpg';
import Maazsite from '../image/maazartsite.jpg';
import WeatherImg from '../image/weatherapp.jpg';
import GymImg from '../image/mjgym.jpg';
import Tenzie from '../image/tenzie.jpg';
import RecipeFood from '../image/recipefood.jpg';
import Todo from '../image/todo.jpg';
import Loopstudios from '../image/loopstudios.jpg';
import Countdown from '../image/countdown.jpg';
import Calculator from '../image/calculator.jpg';
import { Container, Row, Col } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";

const Project = () => {

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

        <Container fluid className="project d-flex ">
            <Row className="myProjects d-flex">


            <Col xxl={4} lg={4} md={6} sm={6} xs={12}>
            <div data-aos="flip-right" className="project-1">
                        <img src={ElshadImg} alt="project1-img"
                        className="project-image" />
                    <div className="project-deatils">
                        <h5>Elshad Search Food</h5>
                        <h6>Design: Self inspired :)</h6>
                        <h4>Technologies uses:</h4>
                        <ul>
                        <li>React Js</li>
                        <li>Css</li>
                        <li>Styled Components</li>
                        </ul>

                        
                        <button className="demo-btn">
                        <a href="https://el-shadfood.netlify.app/"
                        style={{color: "white"}} 
                        alt="image-link0" target="_blank">Live Demo</a>
                        </button>
                        <button className="repo-btn">
                        <a href="https://github.com/maazjnr/elshad-food" 
                        style={{color: "white"}}
                        alt="image-link0" target="_blank">Repo Link</a>
                        </button>
                    </div>
                    </div>
            </Col>

            <Col xxl={4} lg={4} md={6} sm={6} xs={12}>
            <div data-aos="zoom-in" className="project-2">
                        <img src={EcomImg} alt="project1-img"
                        className="project-image" />
                    <div className="project-deatils">
                        <h5>Shoe Ecom WebApp</h5>
                        <h6>Design: Frontend Mentor Challenge :)</h6>
                        <h4>Technologies uses:</h4>
                        <ul>
                        <li>Html</li>
                        <li>Css</li>
                        <li>Javascript</li>
                        </ul>

                        
                        <button className="demo-btn">
                        <a href="https://ecommerce-mz.netlify.app/"
                        style={{color: "white"}} 
                        alt="image-link0" target="_blank">Live Demo</a>
                        </button>
                        <button className="repo-btn">
                        <a href="https://github.com/maazjnr/ecommerceweb" 
                        style={{color: "white"}}
                        alt="image-link0" target="_blank">Repo Link</a>
                        </button>
                    </div>
                    </div>
            </Col>

            <Col xxl={4} lg={4} md={6} sm={6} xs={12}>
            <div data-aos="fade-left" className="project-1">
                        <img src={Memegen} alt="project1-img"
                        className="project-image" />
                    <div className="project-deatils">
                        <h5>Meme Genertor WebApp</h5>
                        <h6>Design: Scrimba :)</h6>
                        <h4>Technologies uses:</h4>
                        <ul>
                        <li>React Js</li>
                        <li>Css</li>
                        </ul>

                        
                        <button className="demo-btn">
                        <a href="https://maaz-meme-generator.netlify.app/"
                        style={{color: "white"}} 
                        alt="image-link0" target="_blank">Live Demo</a>
                        </button>
                        <button className="repo-btn">
                        <a href="https://github.com/maazjnr/maazjnr-maazjnr-meme-generator-" 
                        style={{color: "white"}}
                        alt="image-link0" target="_blank">Repo Link</a>
                        </button>
                    </div>
                    </div>
            </Col>

            <Col xxl={4} lg={4} md={6} sm={6} xs={12}>
            <div data-aos="flip-up" className="project-1">
                        <img src={Loopstudios} alt="project1-img"
                        className="project-image" />
                    <div className="project-deatils">
                        <h5>Single Landing Page</h5>
                        <h6>Design: Frontend Mentor :)</h6>
                        <h4>Technologies uses:</h4>
                        <ul>
                        <li>React Js</li>
                        <li>Css</li>
                        </ul>

                        
                        <button className="demo-btn">
                        <a href="https://loopstudios0.netlify.app/"
                        style={{color: "white"}} 
                        alt="image-link0" target="_blank">Live Demo</a>
                        </button>
                        <button className="repo-btn">
                        <a href="https://github.com/maazjnr/loopstudios" 
                        style={{color: "white"}}
                        alt="image-link0" target="_blank">Repo Link</a>
                        </button>
                    </div>
                    </div>
            </Col>
            


            <Col xxl={4} lg={4} md={6} sm={6} xs={12}>
            <div data-aos="flip-right" className="project-1">
                        <img src={Tenzie} alt="project1-img"
                        className="project-image" />
                    <div className="project-deatils">
                        <h5>Tenzie Gmae</h5>
                        <h6>Design: Scrimba :)</h6>
                        <h4>Technologies uses:</h4>
                        <ul>
                        <li>React Js</li>
                        <li>Css</li>
                        </ul>

                        
                        <button className="demo-btn">
                        <a href="https://tenziesgamei.netlify.app/"
                        style={{color: "white"}} 
                        alt="image-link0" target="_blank">Live Demo</a>
                        </button>
                        <button className="repo-btn">
                        <a href="https://github.com/maazjnr/tenzie-game" 
                        style={{color: "white"}}
                        alt="image-link0" target="_blank">Repo Link</a>
                        </button>
                    </div>
                    </div>
            </Col>

            <Col xxl={4} lg={4} md={6} sm={6} xs={12}>
            <div data-aos="zoom-in" className="project-1">
                        <img src={RecipeFood} alt="project1-img"
                        className="project-image" />
                    <div className="project-deatils">
                        <h5>Recipe Food Search</h5>
                        <h6>Design: Ed Dev :) (not mobile responsive)</h6>
                        <h4>Technologies uses:</h4>
                        <ul>
                        <li>React Js</li>
                        <li>Css</li>
                        <li>Styled Components</li>
                        </ul>

                        
                        <button className="demo-btn">
                        <a href="https://recepefood0.netlify.app/"
                        style={{color: "white"}} 
                        alt="image-link0" target="_blank">Live Demo</a>
                        </button>
                        <button className="repo-btn">
                        <a href="https://github.com/maazjnr/recipefood" 
                        style={{color: "white"}}
                        alt="image-link0" target="_blank">Repo Link</a>
                        </button>
                    </div>
                    </div>
            </Col>

            <Col xxl={4} lg={4} md={6} sm={6} xs={12}>
            <div data-aos="zoom-out" className="project-1">
                        <img src={Todo} alt="project1-img"
                        className="project-image" />
                    <div className="project-deatils">
                        <h5>Todo List</h5>
                        <h6>Design: Ed Dev:)</h6>
                        <h4>Technologies uses:</h4>
                        <ul>
                        <li>React Js</li>
                        <li>Css</li>

                        </ul>

                        
                        <button className="demo-btn">
                        <a href="https://maaztodolist.netlify.app/"
                        style={{color: "white"}} 
                        alt="image-link0" target="_blank">Live Demo</a>
                        </button>
                        <button className="repo-btn">
                        <a href="https://github.com/maazjnr/todoList" 
                        style={{color: "white"}}
                        alt="image-link0" target="_blank">Repo Link</a>
                        </button>
                    </div>
                    </div>
            </Col>
            


            <Col xxl={4} lg={4} md={6} sm={6} xs={12}>
            <div data-aos="fade-left" className="project-1">
                        <img src={Maazsite} alt="project1-img"
                        className="project-image" />
                    <div className="project-deatils">
                        <h5>Mz Art Website</h5>
                        <h6>Design: Self inspired :)</h6>
                        <h4>Technologies uses:</h4>
                        <ul>
                        <li>Html</li>
                        <li>Css</li>
                        <li>Bootstrap</li>
                        </ul>

                        
                        <button className="demo-btn">
                        <a href="https://goalmaazg.netlify.app/"
                        style={{color: "white"}} 
                        alt="image-link0" target="_blank">Live Demo</a>
                        </button>
                        <button className="repo-btn">
                        <a href="https://github.com/maazjnr/maazsite" 
                        style={{color: "white"}}
                        alt="image-link0" target="_blank">Repo Link</a>
                        </button>
                    </div>
                    </div>
            </Col>
            

            <Col xxl={4} lg={4} md={6} sm={6} xs={12}>
            <div data-aos="flip-right" className="project-1">
                        <img src={GymImg} alt="project1-img"
                        className="project-image" />
                    <div className="project-deatils">
                        <h5>Gym Website</h5>
                        <h6>Design: Javascript Mastery:) 
                            (responsive only on Large Screen)</h6>
                        <h4>Technologies uses:</h4>
                        <ul>
                        <li>React Js</li>
                        <li>Material UI</li>
                        <li>Css</li>
                        </ul>

                        
                        <button className="demo-btn">
                        <a href="https://mjgym.netlify.app/"
                        style={{color: "white"}} 
                        alt="image-link0" target="_blank">Live Demo</a>
                        </button>
                        <button className="repo-btn">
                        <a href="https://github.com/maazjnr/gymwebapp" 
                        style={{color: "white"}}
                        alt="image-link0" target="_blank">Repo Link</a>
                        </button>
                    </div>
                    </div>
            </Col>

            <Col xxl={4} lg={4} md={6} sm={6} xs={12}>
            <div data-aos="zoom-in" className="project-1">
                        <img src={Calculator} alt="project1-img"
                        className="project-image" />
                    <div className="project-deatils">
                        <h5>Calculator WebApp</h5>
                        <h6>Design: Tutorial Practical :) </h6>
                        <h4>Technologies uses:</h4>
                        <ul>
                        <li>React Js</li>
                        <li>Context api</li>
                        <li>Css</li>
                        </ul>

                        
                        <button className="demo-btn">
                        <a href="https://maaz-calculator.netlify.app/"
                        style={{color: "white"}} 
                        alt="image-link0" target="_blank">Live Demo</a>
                        </button>
                        <button className="repo-btn">
                        <a href="https://github.com/maazjnr/calculator" 
                        style={{color: "white"}}
                        alt="image-link0" target="_blank">Repo Link</a>
                        </button>
                    </div>
                    </div>
            </Col>


            </Row>
        </Container>
        </motion.div>
    ) 
}

export default Project
