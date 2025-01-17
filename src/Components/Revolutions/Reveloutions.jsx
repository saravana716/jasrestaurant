import React from "react";
import "./Revolutions.css"
import logo1 from "../../Assets/Poke DEMO/focus-03.jpg"
import logo2 from "../../Assets/Poke DEMO/focus-09.jpg"
const Reveloutions = () => {
  return (
    <>
      <div className="revolutions">
        <div className="revlotions1">
          <div className="revolutionsinner">
            <h3>Business Insights and Beyond</h3>
            <h1>Unveiling the Revolution</h1>
            <p>
              In a rapidly evolving world, the only constant is change. Nowhere
              is this truer than in the realms of technology and innovation. As
              we stand on the precipice of the fourth industrial revolution,
              it's essential to understand and adapt to the seismic shifts
              shaping our future. It's no longer enough to innovate
              incrementally; we must be ready to disrupt ourselves.
            </p>
            <button>MORE INFO</button>
          </div>
         <div className="ch">
         <div className="Stratagies">
            <img src={logo1} alt="" />
          </div>
          <div className="stratagies1">
          <div className="contents123">
            <h3>Exploring Strategies</h3>
            <h6>Join us on this insightful journey as we uncover the tactics that drive progress.</h6>
          </div>
          <div className="contents123">
            <h3>Exploring Strategies</h3>
            <h6>Join us on this insightful journey as we uncover the tactics that drive progress.</h6>
          </div>
          </div>
         </div>
        </div>
        <div className="ch1">
            <img src={logo2} alt="" />
        </div>
      </div>
    </>
  );
};

export default Reveloutions;
