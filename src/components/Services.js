import React from "react";
import fotka1 from '../images/fotka1.jpeg';
import fotka2 from '../images/fotka2.jpeg';
import fotka3 from '../images/fotka3.jpeg';
import fotka4 from '../images/fotka4.jpeg';
import fotka5 from '../images/fotka5.jpeg';
import fotka6 from '../images/fotka6.jpg';
import fotka7 from '../images/fotka8.jpeg';

const Services = () => {
    return (
       <div id="services" className="services">
           <h1 className="py-5">Ukážka mojej práce</h1>
                <h4>Viac ukážok mojej práce si môžeš pozrieť na mojom <a href="https://www.facebook.com/progressbarber.sk" alt="Facebook">Facebooku </a>
                alebo <a href="https://www.instagram.com/progressbarber.sk/" alt="Instagram">Instagrame</a>.</h4>
               <div className="container">
                   <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                           <div className="box">
                               <img className="people_images" src={fotka1} alt="Fotka1"></img>
                           </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                           <div className="box">
                               <img className="people_images" src={fotka2} alt="Fotka2"></img>
                           </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                           <div className="box">
                               <img className="people_images" src={fotka3} alt="Fotka3"></img>
                           </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                           <div className="box">
                               <img className="people_images" src={fotka4} alt="Fotka4"></img>
                           </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                           <div className="box">
                               <img className="people_images" src={fotka5} alt="Fotka5"></img>
                           </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                           <div className="box">
                               <img className="people_images" src={fotka6} alt="Fotka6"></img>
                           </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                           <div className="box">
                               <img className="people_images" src={fotka7} alt="Fotka7"></img>
                           </div>
                        </div>                        
                   </div>
               </div>
           </div>
    )
}

export default Services;
