import React from "react";
import "./hotel.css";

export default function Hotel() {
  return (
    <>
      <div className="hotel-container">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/476026226.webp?k=d25bd158fbbd3a0fb145c6a9983485a7318e33c20983a52321adbb7a0d58de8c&o=" />
        {/* <h1>Hotel Sai Pritam</h1> */}
      </div>
      <div className="second-container">
        <div className="in-sec">
          <h1>Hotel Sai Pritam</h1>
          <div className="in-sec-1">
            <a>Central Suburbs,Mumbai</a>
            <a>Show on map</a>
            <p>3.9 km from centre</p>
          </div>
          <p id="lo-head">metro access</p>
        </div>
      </div>
    </>
  );
}
