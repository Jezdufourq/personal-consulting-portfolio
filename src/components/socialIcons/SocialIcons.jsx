import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faInstagram,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
export default function SocialIcons() {
  return (
    <div className="justify-center">
      <a href="https://twitter.com/Jezdufourq">
        <FontAwesomeIcon
          className="mx-1 hover:text-blue-600"
          size="lg"
          icon={faTwitter}
        />
      </a>
      <a href="https://github.com/Jezdufourq">
        <FontAwesomeIcon
          icon={faGithub}
          size="lg"
          className="mx-1 hover:text-blue-600"
        />
      </a>
      <a href="https://www.instagram.com/jezdufourq/">
        <FontAwesomeIcon
          className="mx-1 hover:text-blue-600"
          size="lg"
          icon={faInstagram}
        />
      </a>
      <a href="https://www.linkedin.com/in/jeremiah-d-0a0b86133/">
        <FontAwesomeIcon
          icon={faLinkedinIn}
          size="lg"
          className="mx-1 hover:text-blue-600"
        />
      </a>
    </div>
  );
}
