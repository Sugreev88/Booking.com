import React from "react";
import "./navbarcontainer.css";
import "./navbarcontainer2.css";

export default function NavbarContainer() {
  return (
    <>
      <div className="navbar-conatiner">
        <div className="in-nav1">
          <h1>Booking.com</h1>
          <div className="in-nav-11">
            <div className="in-nav" id="special2">
              <span>INR</span>
            </div>
            <div className="in-nav">
              <img src="https://t-cf.bstatic.com/design-assets/assets/v3.79.0/images-flags/In@3x.png" />
            </div>
            <div className="in-nav" id="path">
              ?
            </div>
            <div className="in-nav" id="add-property">
              <span>List Your Property</span>
            </div>
            <div className="in-nav" id="special1">
              <a href="#">Register</a>
            </div>
            <div className="in-nav" id="special">
              <a href="#">Sign In</a>
            </div>
          </div>
        </div>
        <div className="in-nav2">
          <div className="lower-nav">
            <a href="">Stays</a>
            <a href="">Flights</a>
            <a href="">Flight+Hotel</a>
            <a href="">Car Rentals</a>
            <a href="">Attractions</a>
            <a href="">Airport Taxis</a>
          </div>
        </div>
        <div className="lower-nav-1">
          <div className="in-lower-nav">
            <h1>Find Your Next Stay</h1>
            <h2>Search low prices on hotels, homes and much more...</h2>
          </div>
        </div>
      </div>
    </>
  );
}
