import React from "react";
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { GrTwitter } from "react-icons/gr";
import "./socialmedia.css";

const SocialMedia = () => {
  return (
    <div className="socialmedia">
      <div  >
        <a style={{color: 'white'}}
          className="instagram"
          href="https://www.instagram.com/maazjnr/"
          alt="email"
        >
          <AiFillInstagram className="insta-icon" /> maazjnr
        </a>
      </div>
      <div>
        <a style={{color: 'white'}}
          className="instagram"
          href="https://github.com/maazjnr"
          alt="email"
        >
          <BsGithub className="insta-icon" /> Github
        </a>
      </div>

      <div>
        <a style={{color: 'white'}}
          className="instagram"
          href="https://twitter.com/maazjnr7"
          alt="email"
        >
          <GrTwitter className="insta-icon" /> maazjnr7
        </a>
      </div>
      <div>
        <a style={{color: 'white'}}
         className="email-link" href="mailto:goalmaaz@gmail.com" alt="email"
        >
          <MdEmail className="insta-icon" /> Email
        </a>
      </div>
      <div>
        <a style={{color: 'white'}}
          className="instagram"
          href="tel:+2349059898242"
          alt="email"
        >
          <MdCall className="insta-icon" /> Tel
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
