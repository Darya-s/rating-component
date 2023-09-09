import React from "react";
import illustration from "./images/illustration-thank-you.svg";
export default function Thankyou({ divinfo }) {
  console.log(divinfo);

  return (
    <div className="grid-xl center">
      <div className="grid-xl container">
        <div id="thank-you">
          <img src={illustration} alt="" />
        </div>

        <div className="rating">You selected {divinfo} out of 5</div>

        <div>
          <div className="text-wrapper">
            <h1> Thank you!</h1>
            <p>
              We appreciate you taking the time to give a rating.
              <br />
              If you ever need more support, don't hesitate to <br /> get in
              touch!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
