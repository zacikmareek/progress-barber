import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";


function openBookio() {
  window.open("https://services.bookio.com/progressbarber/widget", "_blank");
}

const Header = () => {
    return (
      <div id="home" className="header-wraper">
          <div className="main-info">
              <h3 className="headerText">Už ma nájdeš v nových priestoroch. Viac info <Link smooth={true} to="place" offset={-110} className="header-nav-link" href="#"><b>TU</b></Link><br></br></h3>
              <br />
              <h1>LUKÁŠ SLANEC</h1>
              <Typed
                className="typed-text"
                strings={["Človek", "Barber", "#progressbarber"]}
                typeSpeed={40}
                backSpeed={60}
                loop
              />
              <button className="btn-main-offer" onClick={openBookio} >Objednaj sa</button>
          </div>
      </div> 
    )
}

export default Header;