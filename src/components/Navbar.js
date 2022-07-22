import React from "react";
import logo from "../Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
        <div className="container">
  <Link smooth={true} to="home" offset={-110} className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo" /><b>PROGRESS</b>BARBER</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{ color: "#fff"}} />
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link smooth={true} to="home" offset={-110} className="nav-link" href="#">Domov<span class="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="about" offset={-110} className="nav-link" href="#">O mne</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="services" offset={-110} className="nav-link" href="#">Moja práca</Link>
    </li>
    <li className="nav-item">
        <Link smooth={true} to="experience" offset={-110} className="nav-link" href="#">Cenník</Link>
    </li>
    <li className="nav-item">
        <Link smooth={true} to="place" offset={-110} className="nav-link" href="#">Kde ma nájdeš</Link>
    </li>
    <li className="nav-item">
        <Link smooth={true} to="contacts" offset={-110} className="nav-link" href="#">Kontakt</Link>
    </li>
    </ul>
  </div>
  </div>
</nav>
    )
}

export default Navbar
