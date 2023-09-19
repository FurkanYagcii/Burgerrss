import React from "react";
import { Link } from "react-router-dom";
import NavbarImg from "./../img/navbarImg.jpg";

function HeadersNav() {
  return (
    <div className="navbar">
      <img className="navbarImg" src={NavbarImg} alt="" />
      <div>
        <div className="Link-div">
          <Link to="/">Anasasyfa</Link>

          <Link to="/menu">Menu</Link>

          <Link to="/aboutUs">Hakkımızda</Link>

          <Link to="/contact">İletişim</Link>
        </div>
      </div>
    </div>
  );
}

export default HeadersNav;
