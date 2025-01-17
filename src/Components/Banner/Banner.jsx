import React from "react";
import "./Banner.css";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import logo from "../../Assets/Poke DEMO/focus-02.jpg"
import logo1 from "../../Assets/Poke DEMO/vertical-01.jpg"
import logo2 from "../../Assets/Poke DEMO/focus-05-768x512.jpg"
const Banner = () => {
  useEffect(() => {
    // Initialize ScrollReveal and configure animations
    ScrollReveal().reveal(".reveal", {
      delay: 200, // Delay before animation starts
      distance: "50px", // Distance for slide animations
      duration: 1000, // Duration of the animation
      easing: "ease-in-out", // Easing function for the animation
      origin: "bottom", // Direction from which the element will animate in
      reset: true, // Reset animation after it leaves the viewport
    });
    ScrollReveal().reveal(".reveal-1", {
      delay: 200,
      distance: "100px",
      duration: 1500,
      origin: "top",
      reset: true,
    });

    ScrollReveal().reveal(".reveal-2", {
      delay: 400,
      distance: "50px",
      duration: 1000,
      origin: "bottom",
      reset: true,
    });

    ScrollReveal().reveal(".reveal-3", {
      delay: 600,
      distance: "70px",
      duration: 1200,
      origin: "left",
      reset: true,
    });


  }, []);
  return (
    <>
      <div className="Banner">
        <div className="Banneerinner">
        <div className="bannerleft">
         <div className="bannerleft1">
         <div className="leftcontent reveal">
            <h3>Fostering Tomorrow's Innovators</h3>
            <h1>Sparks</h1>
            <h1>Success</h1>
          </div>
          <div className="innovation">
            <div className="innimgae" >
              <img src={logo} alt="" />
            </div>
            <div className="inncontent">
              <div className="lines">
                <h4>Innovation solution</h4>
                <p></p>
                <h4>$ 24</h4>
              </div>
              <p>
                Our team of experts is always ready to assist you, whether you
                have questions, need support,or more.
              </p>
            </div>
          </div>
         </div>
        </div>
        <div className=" bannerright">
<div className="imges2">
<div className="imges1" >
            <img src={logo1} alt="" />
        </div>
</div>
        <div className="images3">
        <div className="imges1 reveal-2">
        <img src={logo2} alt="" />
            
        </div>
        </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
