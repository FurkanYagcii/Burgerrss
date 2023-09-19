import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-icons">
        <FontAwesomeIcon className="icons" icon={faYoutube} />
        <FontAwesomeIcon className="icons" icon={faTwitter} />
        <FontAwesomeIcon className="icons" icon={faFacebook} />
      </div>
      <p>Tüm hakları saklıdır|Burgerrss</p>
    </div>
  );
}

export default Footer;
