import React, { useState, useEffect } from "react";
import "./hotel.css";
import leaf from "./leaf.png";
import star from "./star1.png";

export default function Hotel(props) {
  // const { data } = props;
  // console.log(data[0].name);
  // console.log(props.hoteldata);
  // console.log(hoteldata);
  // const data = hoteldata;
  // console.log(data.name);
  // console.log(props.data.name);
  return (
    <>
      <div className="container">
        <div className="hotel-container">
          <img src={props.data.img} />
        </div>
        <div className="second-container">
          <div className="in-sec">
            <h1>
              {props.data.name} <img src={star} />
            </h1>
            <div className="in-sec-1">
              <a href="#" className="n">
                {props.data.location}
              </a>
              <a href="#" className="n">
                Show on map
              </a>
              <p>3.9 km from centre</p>
            </div>
            <p id="lo-head">metro access</p>
            <div className="lower-div">
              <div id="leaf">
                <img src={leaf} />
                <p id="n1">Travel Sustainable Level 3</p>
              </div>
              <div id="n3">
                <h2>Twin Room with Private Bathroom</h2>
                <p>2 single beds</p>
                <p className="n4">FREE cancellation</p>
                <p className="n4">No prepayment needed – pay at the property</p>
                <p className="n5">
                  Only {props.data.roomsLeft} room left at this price on our
                  site
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="third-container">
          <div id="n8">
            <h3>Exceptional</h3>
            <p>{props.data.rating}</p>
          </div>
          <p id="n9">{props.data.review} reviews</p>
          <p id="n10">Location 9.5</p>
          <p id="n11">New to Booking.Com</p>
          <p>2 nights, 2 adults</p>
          <p id="n12">₹ 4,946 10% off</p>
          <p>₹ 4,451</p>
          <p>+₹ 534 taxes and charges</p>
          <button>See Availability</button>
        </div>
      </div>
    </>
  );
}
