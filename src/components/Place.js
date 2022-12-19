import React from "react";
import place1 from '../images/place1.jpeg'
import place2 from '../images/place2.jpeg'
import place3 from '../images/place3.jpeg'
import place4 from '../images/place4.jpeg'
import place5 from '../images/place5.jpeg'
import place6 from '../images/place6.jpeg'
import place7 from '../images/place7.jpeg'
import fotka1 from '../images/fotka7.jpg';
import fotka2 from '../images/fotka9.jpg';
import fotka3 from '../images/fotka10.jpg';


const Place = () => {
    return (
       <div id="place" className="place">
           <h1 className="py-5">Kde ma nájdeš</h1>
                <h4>Presnú adresu máš tu na <a href="https://goo.gl/maps/7ndFMoJxfCwDGS2c9" alt="" target="_blank" rel="noreferrer">Google mapách.</a></h4>
               <div className="container">
                   <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                           <div className="box">
                               <img className="place_images" src={place3} alt=""></img>
                           </div>
                       </div>
                       <div className="col-lg-6 col-md-6 col-sm-6">
                           <div className="box">
                               <img className="place_images" src={place2} alt=""></img>
                           </div>
                       </div>
                   </div>
               </div>
               <h4>Fotky priestorov</h4>
               <div className="container">
                   <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                           <div className="box">
                               <img className="place_images" src={place7} alt="PlaceImage1"></img>
                           </div>
                       </div>
                       <div className="col-lg-4 col-md-4 col-sm-4">
                           <div className="box">
                               <img className="place_images" src={place6} alt="PlaceImage2"></img>
                           </div>
                       </div>
                       <div className="col-lg-4 col-md-4 col-sm-4">
                           <div className="box">
                               <img className="place_images" src={place5} alt="PlaceImage3"></img>
                           </div>
                       </div>
                       <div className="col-lg-4 col-md-4 col-sm-4">
                           <div className="box">
                               <img className="place_images" src={place4} alt="PlaceImage4"></img>
                           </div>
                       </div>
                       <div className="col-lg-4 col-md-4 col-sm-4">
                           <div className="box">
                               <img className="place_images" src={fotka1} alt="PlaceImage5"></img>
                           </div>
                       </div>
                       <div className="col-lg-4 col-md-4 col-sm-4">
                           <div className="box">
                               <img className="place_images" src={fotka2} alt="PlaceImage6"></img>
                           </div>
                       </div>
                       <div className="col-lg-4 col-md-4 col-sm-4">
                           <div className="box">
                               <img className="place_images" src={fotka3} alt="PlaceImage7"></img>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
    )
}

export default Place;
