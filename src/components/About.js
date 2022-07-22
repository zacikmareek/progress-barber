import React from "react";
import avatar from "../Profile_picture.jpeg";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-scroll";

const About = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={avatar} alt="Avatar"/>
                    </div>
                    <div className="photo-wrap mb-5">
                    <h3>Nájdeš ma aj na: </h3>
                    <SocialIcon className="mx-3" url="https://www.facebook.com/progressbarber.sk" bgColor="#FF4500" fgColor="black" style={{ height: 36, width: 36 }}/>
                    <SocialIcon className="mx-3" url="https://www.instagram.com/progressbarber.sk/" bgColor="#FF4500" fgColor="black" style={{ height: 36, width: 36 }}/>
                    <SocialIcon className="mx-3" url="https://www.youtube.com/channel/UCpfb8jQy96o-iZfm1Bc1eqA" bgColor="#FF4500" fgColor="black" style={{ height: 36, width: 36 }}/>
                    </div>
                </div>
    
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">O mne</h1>
                    <p>Čauko,  <br/>
                    volám sa Lukáš, a.k.a <b>Progressbarber</b>.<br />
                    Prečo Lukáš? O tom rozhodli rodičia 😁 Prečo Progressbarber? Celý život je v podstate progres. Učíme sa celý život.<br />
                    Rozhodol som sa nechať prácu v korporatnej spoločnosti a ísť si po svojom. Ako rád hovorievam, stále je to hlavne moje hobby ktoré vykonávam s láskou. 
                    Hovorí sa, že pokiaľ si ochotný to robiť aj zadarmo, je to to pravé a dlho tomu tak aj bolo. <br />
                    Snažím sa na sebe pracovať denno denne a poskytnúť ti službu najvyššej úrovne. <br /> <br />

                    Ako ortodoxný bradatý muž je samozrejmosťou možnosť zakúpenia rôznych produktov na starostlivosť o bradu. < br/>
                    Ďakujem! <br /><br /> S pozdravom, <br /> Slanec Lukáš < br/> #progressbarber
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default About;
