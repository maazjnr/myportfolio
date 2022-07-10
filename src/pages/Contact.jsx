import { Container, Row, Col } from "react-bootstrap";
import { FaHome } from 'react-icons/fa';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com';

const Contact = () => {

    const sendEmail = (e) => {

        e.preventDefault();
        emailjs.sendForm('service_yruu843',
        'template_7x3jxi8',
        e.target,
        'zOmG_SZh0HoEJY57O').then(res=>{
            console.log(res)
        }).catch(err=> console.log(err))
    }

    return(

        <motion.div
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{ duration: 0.7}}
        >
        <Container fluid className="contact">
            <Row>


                <form className="form" onSubmit={sendEmail}>
                <input text="email" name="user_email" placeholder="Email" />
                <input text="text" name="name" placeholder="Your Name" />
                
                    <textarea placeholder="Message" name="message" className="text-area">
                        
                    </textarea>

                    <input type="submit" value="Send Message"
                    className="send-message-btn" />
                </form>

            </Row>



               <Row>
               
               <Link style={{color: "rgba(255, 119, 0, 0.738)"}} className="back-to-home-page" to={"/"}>
               <FaHome /> back to home page
                </Link>
               </Row>


        </Container>

        </motion.div>
    )
}

export default Contact

