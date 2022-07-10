
import { motion } from "framer-motion";
import styled from "styled-components";
import ElshadImg from '../image/elshad.jpg';
import EcomImg from '../image/shoeecom.jpg';
import Memegen from '../image/memegen.jpg';
import Maazsite from '../image/maazartsite.jpg';
import WeatherImg from '../image/weatherapp.jpg';
import GymImg from '../image/mjgym.jpg';
import RecipeFood from '../image/recipefood.jpg';
import Todo from '../image/todo.jpg';
import Countdown from '../image/countdown.jpg';
import IncomeTracker from '../image/incometracker.jpg';
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
            <div data-aos="flip-right" className="project-1">
                        <img src={WeatherImg} alt="project1-img"
                        className="project-image" />
                    <div className="project-deatils">
                        <h5>Search Weather</h5>
                        <h6>Design: Self inspired :)</h6>
                        <h4>Technologies uses:</h4>
                        <ul>
                        <li>React Js</li>
                        <li>Css</li>
                        <li>Api</li>
                        </ul>

                        
                        <button className="demo-btn">
                        <a href="https://maazweather.netlify.app/"
                        style={{color: "white"}} 
                        alt="image-link0" target="_blank">Live Demo</a>
                        </button>
                        <button className="repo-btn">
                        <a href="https://github.com/maazjnr/weatherapp" 
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
                        <img src={IncomeTracker} alt="project1-img"
                        className="project-image" />
                    <div className="project-deatils">
                        <h5>Income Tracker</h5>
                        <h6>Design: Tutorial Practical :) (not mobile responsive)</h6>
                        <h4>Technologies uses:</h4>
                        <ul>
                        <li>React Js</li>
                        <li>Css</li>
                        </ul>

                        
                        <button className="demo-btn">
                        <a href="https://incometracker0.netlify.app/"
                        style={{color: "white"}} 
                        alt="image-link0" target="_blank">Live Demo</a>
                        </button>
                        <button className="repo-btn">
                        <a href="https://github.com/maazjnr/income-tracker" 
                        style={{color: "white"}}
                        alt="image-link0" target="_blank">Repo Link</a>
                        </button>
                    </div>
                    </div>
            </Col>

            <Col xxl={4} lg={4} md={6} sm={6} xs={12}>
            <div data-aos="flip-up" className="project-1">
                        <img src={Countdown} alt="project1-img"
                        className="project-image" />
                    <div className="project-deatils">
                        <h5>Simple 1 Year Countdown</h5>
                        <h6>Design: Self inspired :)</h6>
                        <h4>Technologies uses:</h4>
                        <ul>
                        <li>Html</li>
                        <li>Css</li>
                        <li>Javascript</li>
                        </ul>

                        
                        <button className="demo-btn">
                        <a href="https://mycountdown0.netlify.app/"
                        style={{color: "white"}} 
                        alt="image-link0" target="_blank">Live Demo</a>
                        </button>
                        <button className="repo-btn">
                        <a href="https://github.com/maazjnr/countdown" 
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
