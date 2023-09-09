import star from "./images/icon-star.svg";
import "./App.css";
import Thankyou from "./Thankyou";
import { useState } from "react";

function App() {
  const [valueSubmit, setValueSubmit] = useState(false);
  const [clickedDiv, setClickedDiv] = useState({});

  const handleClick = (e) => {
    e.preventDefault();
    setValueSubmit(true);
  };

  const handleDivClick = (divinfo) => {
    console.log(divinfo);
    setClickedDiv(divinfo);
  };

  return (
    <div className="grid-xl">
      {valueSubmit ? (
        <Thankyou divinfo={clickedDiv.id} />
      ) : (
        <div className="grid-xl container">
          <div className="circle ">
            <img src={star} alt="" />
          </div>

          <div className="flex">
            <div className="text-wrapper">
              <h1> How did we do?</h1>
              <p>
                Please let us know how we did with your <br />
                support request. All feedback is appreaciated <br /> to help us
                improve our offering!
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="circle" onClick={() => handleDivClick({ id: 1 })}>
              1
            </div>

            <div className="circle" onClick={() => handleDivClick({ id: 2 })}>
              2
            </div>

            <div className="circle" onClick={() => handleDivClick({ id: 3 })}>
              3
            </div>

            <div className="circle" onClick={() => handleDivClick({ id: 4 })}>
              4
            </div>

            <div className="circle" onClick={() => handleDivClick({ id: 5 })}>
              5
            </div>
          </div>
          <button className="btn flex" onClick={handleClick}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
