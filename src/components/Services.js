import React from "react";
import foto1 from '../images/foto1.jpg';
import foto2 from '../images/foto2.jpg';
import foto3 from '../images/foto3.jpg';
import foto4 from '../images/foto4.jpg';
import foto5 from '../images/foto5.jpg';
import foto6 from '../images/foto6.jpg';

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
                               <img className="people_images" src={foto4} alt=""></img>
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-6 col-sm-6">
                           <div className="box">
                               <img className="people_images" src={foto5} alt=""></img>
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-6 col-sm-6">
                           <div className="box">
                               <img className="people_images" src={foto2} alt=""></img>
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-6 col-sm-6">
                           <div className="box">
                               <img className="people_images" src={foto3} alt=""></img>
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-6 col-sm-6">
                           <div className="box">
                               <img className="people_images" src={foto6} alt=""></img>
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-6 col-sm-6">
                           <div className="box">
                               <img className="people_images" src={foto1} alt=""></img>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
    )
}

export default Services;
