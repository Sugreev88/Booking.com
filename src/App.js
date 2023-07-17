import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarContainer from "./components/navbarContainer/NavbarContainer";
import BookingInput from "./components/bookingInput/BookingInput";
import Hotel from "./components/hotel/Hotel";
import FilterComponent from "./components/filter/Filter";

const data = [
  {
    id: 1,
    img: "https://cf.bstatic.com/xdata/images/hotel/square600/476532951.jpg?k=286751c6b4f3547ffe468e407a1c379283399cd91627179a0c12da53a6ce8ac7&o=",
    name: "Hotel Sai",
    location: "worli,mumbai",
    rating: 4,
    roomsLeft: 10,
    review: 1,
  },
  {
    id: 2,
    img: "https://cf.bstatic.com/xdata/images/hotel/square600/467624705.jpg?k=48e601ec8bb2be1c112d06a8803c119bf84135d6db2695ee167669a2f7b7462e&o=",
    name: "The St. Regis MumbaiOpens in new window",
    location: "bandra,mumbai",
    rating: 5,
    roomsLeft: 5,
    review: 510,
  },
  {
    id: 3,
    img: "https://cf.bstatic.com/xdata/images/hotel/square600/476551719.jpg?k=eb9a8b7ae6b89a479640f05248016b78e283234f078affdbc02bff6b0a2a0c2d&o=",
    name: "ITC Maurya",
    location: "connaught place,delhi",
    rating: 4,
    roomsLeft: 58,
    review: 1000,
  },
  {
    id: 4,
    img: "https://cf.bstatic.com/xdata/images/hotel/square600/453086895.jpg?k=d31630ab7180d1f4ad9755858b8325d377b6dc343436d1c29684dc6a90877f96&o=",
    name: "tsy By Treebo - Prince, MumbaiOpens in new window   ",
    location: "jaipur,rajasthan",
    rating: 4,
    roomsLeft: 18,
    review: 20,
  },
  {
    id: 5,
    img: "https://cf.bstatic.com/xdata/images/hotel/square600/454730064.jpg?k=2de790a800723fcf6e84cd8214022e2df7456680279e2f8618804edcd73624e5&o=",
    name: "Mauli Aksh",
    location: "Ajmer,rajasthan",
    rating: 5,
    roomsLeft: 8,
    review: 200,
  },
  {
    id: 3,
    img: "https://cf.bstatic.com/xdata/images/hotel/square600/449946773.jpg?k=3cf33b1e808b42fca7709f75573c547b69c95dfbcf967867ab7898d4595984ef&o=",
    name: "Arnna Hotel- Goregaon EastOpens in new window    ",
    location: "Western Suburbs, Mumbai",
    rating: 2,
    roomsLeft: 9,
    review: 15,
  },
];

function App() {
  const [hotelData, setHotelData] = useState(data);
  const [filteredData, setFilteredData] = useState(data);

  const filterHotels = (minReview) => {
    const filteredHotels = hotelData.filter(
      (hotel) => hotel.rating >= minReview
    );
    setFilteredData(filteredHotels);
    // console.log(filteredHotels);
    // console.log(minReview);
  };
  // console.log(data[0].review);
  return (
    <>
      <div>{/* <Hotel></Hotel> */}</div>
      <Router>
        <NavbarContainer></NavbarContainer>
        <BookingInput></BookingInput>
        <FilterComponent filterHotels={filterHotels} />
        <Routes>
          <Route
            path="/search"
            element={filteredData.map((hotel) => (
              <Hotel key={hotel.id} data={hotel} />
            ))}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
