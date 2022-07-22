import React from "react";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-scroll";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                        <a href="https://goo.gl/maps/7ndFMoJxfCwDGS2c9" alt="" target="_blank" rel="noreferrer">Petra Pazmáňa 11, 927 01, Šaľa</a>
                        </div>
                        <div className="d-flex">
                            <a href="tel: +421 944 584 281" alt="">0944 584 281</a>
                        </div>
                        <div className="d-flex">
                            <a href="mailto: lukas.slanec@gmail.com" alt="">lukas.slanec@gmail.com</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <Link smooth={true} to="home" offset={-110} className="footer-nav">Domov</Link>
                                <br/>
                                <Link smooth={true} to="about" offset={-110} className="footer-nav">O mne</Link>
                                <br/>
                                <Link smooth={true} to="services" offset={-110} className="footer-nav">Moja práca</Link>
                            </div>
                            <div className="col">
                                <Link smooth={true} to="experience" offset={-110} className="footer-nav">Cenník</Link>
                                <br/>
                                <Link smooth={true} to="place" offset={-110} className="footer-nav">Kde ma nájdeš</Link>
                                <br/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <SocialIcon className="mx-3" url="https://www.facebook.com/progressbarber.sk" style={{ height: 36, width: 36 }}/>
                            <SocialIcon className="mx-3" url="https://www.instagram.com/progressbarber.sk/" style={{ height: 36, width: 36 }}/>
                            <SocialIcon className="mx-3" url="https://services.bookio.com/progressbarber/widget" bgColor="#00599a" fgColor="black" style={{ height: 36, width: 36 }}/>
                            <SocialIcon className="mx-3" url="https://www.youtube.com/channel/UCpfb8jQy96o-iZfm1Bc1eqA" bgColor="#00599a" fgColor="black" style={{ height: 36, width: 36 }}/>
                        </div>
                        <p className="pt-3 text-center">
                            Progressbarber&copy;
                            {new Date().getFullYear()}&nbsp;Všetky práva vyhradené
                        </p>
                        <p className="pt-3 text-center">
                            Vytvoril: <a href="https://www.instagram.com/zarek_macik/" alt="@zarek_macik" target="_blank" rel="noreferrer"><b>Marek Žáčik</b></a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
