import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Project from "./Project";
import AboutMe from "./About";
import Contact from "./Contact";


const Pages = () => {

    return(
        <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutMe />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
        </div>
    )
}

export default Pages