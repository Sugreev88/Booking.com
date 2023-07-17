import React from "react";
import "./bookingInput.css";
// import "../assets/bedlogo.png";
import bedlogo from "./bedlogo.png";
import calenderlogo from "./calender.png";
import peoplelogo from "./people.png";

export default function BookingInput() {
  return (
    <div className="booking-container">
      <div className="booking-input">
        <img src={bedlogo} />
      </div>
      <div className="booking-input">
        <img src={calenderlogo} />
      </div>
      <div className="booking-input">
        <img src={peoplelogo} />
      </div>
      <button>Search</button>
    </div>
  );
}

{
  /* <div className="booking-container">
    <div className="booking-input">
      <div className="booking-input-list">
        <input type="text" placeholder="enter your location" />
        <p>ENTER-YOUR-LOCATION</p>
      </div>
      <div className="booking-input-list">
        <input type="date" placeholder="check in date" />
        <p>CHECK-IN-DATE</p>
      </div>
      <div className="booking-input-list">
        <input type="date" placeholder="check-out-date" />
        <p>CHECK-OUT-DATE</p>
      </div>
      <div className="booking-input-list">
        <input type="text" placeholder="number of person" />
        <p>NO-OF-PERSONS</p>
      </div>
      <div className="booking-input-list" id="add-button">
        <button>FIND</button>
      </div>
    </div>
  </div>{" "} */
}
