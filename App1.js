import React from "react";
import ReactDOM from "react-dom";

/* 

Building food delivery app

Components:
1.Header
  - Logo
  - Navigation
    - Home
    - About
    - Contact
    - Cart
    - User
2.Body
  - Search
  - ReastaurantContainer
    - Restaurant Cards
      - Image
      - Name
      - Rating
      - Delivery Time
      - Add to Cart
      - CUISINES
3.Footer
  - About
  - Contact
  - Social Media
  - Privacy Policy

*/

const Header = () => {
  return (
    <div className="header">

      <div className="logo-container">
        <img src="https://i.pinimg.com/564x/0a/34/26/0a3426ff961a9b2c98b20269927508c5.jpg" className="logo" alt="logo" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <li>User</li>
        </ul>
      </div>
  
    </div>
  );
};

// const style = {
//   backgroundColor: "pink",
// };

// destructuring on the fly

//1. const RestaurantCard = ({resName, cuisine}) => {


const RestaurantCard = (props) => {
//2.  const {resName, cuisine} = props;
console.log(props);
  return (
    <div className="restaurant-card" >
      <div className="restaurant-image" style={{backgroundColor: "#f0f0f0"}}>
        <img className="res-image" alt="res-image" src="https://lh5.googleusercontent.com/p/AF1QipP0eUAms3T6iZD_d5bf8ivyJVzVKp9d4gZALh2S=w178-h178-n-k-no"></img>
        <h3 className="res-name">{props.resName}</h3>
        <h4 className="res-rating">Rating</h4>
        <h4 className="res-delivery-time">Delivery Time</h4>
        <h4 className="res-cuisines">{props.cuisine}</h4>
        <h4 className="res-add-to-cart">Add to Cart</h4>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        <RestaurantCard resName="KFC" cuisine="biryani , Paratha"/>
        <RestaurantCard resName="Burger King" cuisine="Burger ,Pepsi"/>
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard /> 
      </div>
    </div>
  );
};


const AppLayout = () => {
  return (
  <div className="app">
    <Header />
    <Body />
  </div>
  );
};


const Footer = () => {};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

