import React from "react";
import { ReactComponent as EmailLogo } from "../img/email.svg";
import { ReactComponent as GithubLogo } from "../img/github.svg";
import { ReactComponent as LinkedInLogo } from "../img/linkedin.svg";
import { ReactComponent as TwitterLogo } from "../img/twitter.svg";
import "../stylesheets/contact.css";

const Contact = () => {
  return (
    <div>
      <ul id="contact">
        <li>
          <a
            href="https://www.linkedin.com/in/thumn/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInLogo height={20} color={"#ff5757"} />
          </a>
        </li>
        <li>
          <a href="https://github.com/thumn/" target="_blank" rel="noreferrer">
            <GithubLogo height={20} />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/heythuthu"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterLogo height={20} />
          </a>
        </li>
        <li>
          <a href="mailto:tmnguyen@berkeley.edu">
            <EmailLogo height={20} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
