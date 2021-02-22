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
      <FontAwesomeIcon
        className="mx-1 hover:text-blue-600"
        size="1x"
        icon={faTwitter}
      />
      <FontAwesomeIcon
        icon={faGithub}
        size="1x"
        className="mx-1 hover:text-blue-600"
      />
      <FontAwesomeIcon
        className="mx-1 hover:text-blue-600"
        size="1x"
        icon={faInstagram}
      />
      <FontAwesomeIcon
        icon={faLinkedinIn}
        size="1x"
        className="mx-1 hover:text-blue-600"
      />
    </div>
  );
}
