import React from "react";
import { motion } from "framer-motion";
import AbtImg from '../asset/abImg.jpg';
import MyGoalImg from '../asset/mygoalLogo.jpg';
import Javascript from '../asset/javascript.png';
import Html from '../asset/html.png'
import Css from '../asset/css.png';
import GitHub from '../asset/git&github.png';
import Typescript from '../asset/typescript.png';
import Termina from '../asset/cmd.png';
import Photoshop from '../asset/adobe.png';
import Reactjs from '../asset/react.png';
import { Container, Row, Col } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const AboutMe = () => {

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

        <div className="aboutMe">
            <section data-aos="zoom-in" className="aboutDesc">
                <div data-aos="flip-right">
                <img src={AbtImg} alt="aboutImg" loading="lazy"/>

                <h4>About Me</h4>
                <p>I’m well known as Maaz,
                I am a Self-Taught Frontend Web Developer 
                based in Nigeria (West Africa). I Am passionate
                about Developing & Designing,  I love Coding
                as well as Designing</p>
                </div>
            </section>
            <section data-aos="flip-right" className="mygoal">
            <div data-aos="zoom-in">
                <img src={MyGoalImg} alt="mygoal" loading="lazy" />

                <h4>My Goal</h4>
                <p>I would love to bring my Design Imagination 
                to Reality Through my Skills. I am Creator
                and i’m open to Learn more Technologies
                to make me fit in to the World 
                of Software Development.</p>
                </div>
                
            </section>

        </div>

        {/* my technologies page */}


            <div>

            
            <Container fluid className="technologies">
            <h2 style={{color: "#737171", background: "#000000",
             textAlign: "center", margin: "0px"}}>
                Tools/Technologies</h2>
          
            <Row>
                <Col lg={3} md={3} sm={3} xs={6}>
                <div data-aos="zoom-in" className="html">
                    <img className="pro-images" src={Html} alt="html-img"/>
                    <h3>Html</h3>
                    <h6>hypertext markup language</h6>
                </div>
                </Col>

                <Col lg={3} md={3} sm={3} xs={6}>
                <div data-aos="fade-down" className="html">
                    <img className="pro-images" src={Css} alt="css-img"/>
                    <h3>Css</h3>
                    <h6>cascading style sheet</h6>
                </div>
                </Col>
                <Col lg={3} md={3} sm={3} xs={6}>
                <div data-aos="fade-right" className="html">
                    <img className="pro-images" src={Javascript} alt="js-img"/>
                    <h3>Javascript</h3>
                    <h6>web scripting Language</h6>
                </div>
                </Col>
                <Col lg={3} md={3} sm={3} xs={6}>
                <div data-aos="zoom-in-up" className="html">
                    <img className="pro-images" src={Reactjs} alt="js-img"/>
                    <h3>React</h3>
                    <h6>javascript framework for building
                        user interface
                    </h6>
                </div>
                </Col>
                
            </Row>

            <Row className="row2" >
                <Col lg={3} md={3} sm={3} xs={6}>
                <div data-aos="slide-up" className="html">
                    <img className="type-images" src={Typescript} alt="typescript-img"/>
                    <h3>Typescript</h3>
                    <h6>adding more features to javascript</h6>
                </div>
                </Col>

                <Col lg={3} md={3} sm={3} xs={6}>
                <div data-aos="zoom-in" className="html">
                    <img className="pro-images" src={GitHub} alt="git-img"/>
                    <h3>Git/Github</h3>
                    <h6>open source. version control tools</h6>
                </div>
                </Col>
                <Col lg={3} md={3} sm={3} xs={6}>
                <div data-aos="flip-left" className="html">
                    <img className="pro-images" src={Termina} alt="terminal-img"/>
                    <h3>Cmd/Terminal</h3>
                    <h6>command line interface</h6>
                </div>
                </Col>
                <Col lg={3} md={3} sm={3} xs={6} >
                <div data-aos="fade-up-left" className="html">
                    <img className="ph-images" src={Photoshop} alt="photoshop-img"/>
                    <h3>Adobe Photoshop</h3>
                    <h6>Graphic Design
                    </h6>
                </div>
                </Col>
                
            </Row>
        </Container>
            </div>

        </motion.div>
    )
}

export default AboutMe
