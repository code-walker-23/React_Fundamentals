import React from "react";
import ReactDOM from "react-dom/client";

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

//1. const RestaurantCard = ({resName, cuisine}) => {you have to write the same name that is being passed to the component}

const resList = [
{
  "info": {
  "id": "435405",
  "name": "Chaayos Chai+Snacks=Relax",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_435405.JPG",
  "locality": "Cunningham Road",
  "areaName": "Central Bangalore",
  "costForTwo": "₹250 for two",
  "cuisines": [
  "Bakery",
  "Beverages",
  "Chaat",
  "Desserts",
  "Home Food",
  "Italian",
  "Maharashtrian",
  "Snacks",
  "Street Food",
  "Sweets"
  ],
  "avgRating": 4.5,
  "parentId": "281782",
  "avgRatingString": "4.5",
  "totalRatingsString": "1K+",
  "sla": {
  "deliveryTime": 24,
  "lastMileTravel": 2.8,
  "serviceability": "SERVICEABLE",
  "slaString": "20-25 mins",
  "lastMileTravelString": "2.8 km",
  "iconType": "ICON_TYPE_EMPTY"
  }
}
},{
  "info": {
  "id": "435405",
  "name": "KFC",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_435405.JPG",
  "locality": "Cunningham Road",
  "areaName": "Central Bangalore",
  "costForTwo": "₹250 for two",
  "cuisines": [
  "Bakery",
  "Beverages",
  "Chaat",
  "Desserts",
  "Home Food",
  "Italian",
  "Maharashtrian",
  "Snacks",
  "Street Food",
  "Sweets"
  ],
  "avgRating": 4.5,
  "parentId": "281782",
  "avgRatingString": "4.5",
  "totalRatingsString": "1K+",
  "sla": {
  "deliveryTime": 24,
  "lastMileTravel": 2.8,
  "serviceability": "SERVICEABLE",
  "slaString": "20-25 mins",
  "lastMileTravelString": "2.8 km",
  "iconType": "ICON_TYPE_EMPTY"
  }
}
},{
  "info": {
  "id": "435405",
  "name": "Chaayos",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_435405.JPG",
  "locality": "Cunningham Road",
  "areaName": "Central Bangalore",
  "costForTwo": "₹250 for two",
  "cuisines": [
  "Bakery",
  "Beverages",
  "Chaat",
  "Desserts",
  "Home Food",
  "Italian",
  "Maharashtrian",
  "Snacks",
  "Street Food",
  "Sweets"
  ],
  "avgRating": 4.5,
  "parentId": "281782",
  "avgRatingString": "4.5",
  "totalRatingsString": "1K+",
  "sla": {
  "deliveryTime": 24,
  "lastMileTravel": 2.8,
  "serviceability": "SERVICEABLE",
  "slaString": "20-25 mins",
  "lastMileTravelString": "2.8 km",
  "iconType": "ICON_TYPE_EMPTY"
  }
}
},{
  "info": {
  "id": "435405",
  "name": "Chaayos Chai+Snacks",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_435405.JPG",
  "locality": "Cunningham Road",
  "areaName": "Central Bangalore",
  "costForTwo": "₹250 for two",
  "cuisines": [
  "Bakery",
  "Beverages",
  "Chaat",
  "Desserts",
  "Home Food",
  "Italian",
  "Maharashtrian",
  "Snacks",
  "Street Food",
  "Sweets"
  ],
  "avgRating": 4.5,
  "parentId": "281782",
  "avgRatingString": "4.5",
  "totalRatingsString": "1K+",
  "sla": {
  "deliveryTime": 24,
  "lastMileTravel": 2.8,
  "serviceability": "SERVICEABLE",
  "slaString": "20-25 mins",
  "lastMileTravelString": "2.8 km",
  "iconType": "ICON_TYPE_EMPTY"
  }
}
},{
  "info": {
  "id": "435405",
  "name": "Snacks=Relax",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_435405.JPG",
  "locality": "Cunningham Road",
  "areaName": "Central Bangalore",
  "costForTwo": "₹250 for two",
  "cuisines": [
  "Bakery",
  "Beverages",
  "Chaat",
  "Desserts",
  "Home Food",
  "Italian",
  "Maharashtrian",
  "Snacks",
  "Street Food",
  "Sweets"
  ],
  "avgRating": 4.5,
  "parentId": "281782",
  "avgRatingString": "4.5",
  "totalRatingsString": "1K+",
  "sla": {
  "deliveryTime": 24,
  "lastMileTravel": 2.8,
  "serviceability": "SERVICEABLE",
  "slaString": "20-25 mins",
  "lastMileTravelString": "2.8 km",
  "iconType": "ICON_TYPE_EMPTY"
  }
}
},{
  "info": {
  "id": "435405",
  "name": "Burger",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_435405.JPG",
  "locality": "Cunningham Road",
  "areaName": "Central Bangalore",
  "costForTwo": "₹250 for two",
  "cuisines": [
  "Bakery",
  "Beverages",
  "Chaat",
  "Desserts",
  "Home Food",
  "Italian",
  "Maharashtrian",
  "Snacks",
  "Street Food",
  "Sweets"
  ],
  "avgRating": 4.5,
  "parentId": "281782",
  "avgRatingString": "4.5",
  "totalRatingsString": "1K+",
  "sla": {
  "deliveryTime": 24,
  "lastMileTravel": 2.8,
  "serviceability": "SERVICEABLE",
  "slaString": "20-25 mins",
  "lastMileTravelString": "2.8 km",
  "iconType": "ICON_TYPE_EMPTY"
  }
}
},{
  "info": {
  "id": "435405",
  "name": "Pizza",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_435405.JPG",
  "locality": "Cunningham Road",
  "areaName": "Central Bangalore",
  "costForTwo": "₹250 for two",
  "cuisines": [
  "Bakery",
  "Beverages",
  "Chaat",
  "Desserts",
  "Home Food",
  "Italian",
  "Maharashtrian",
  "Snacks",
  "Street Food",
  "Sweets"
  ],
  "avgRating": 4.5,
  "parentId": "281782",
  "avgRatingString": "4.5",
  "totalRatingsString": "1K+",
  "sla": {
  "deliveryTime": 24,
  "lastMileTravel": 2.8,
  "serviceability": "SERVICEABLE",
  "slaString": "20-25 mins",
  "lastMileTravelString": "2.8 km",
  "iconType": "ICON_TYPE_EMPTY"
  }
}
},{
  "info": {
  "id": "435405",
  "name": "Patte ki Chaat",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_435405.JPG",
  "locality": "Cunningham Road",
  "areaName": "Central Bangalore",
  "costForTwo": "₹250 for two",
  "cuisines": [
  "Bakery",
  "Beverages",
  "Chaat",
  "Desserts",
  "Home Food",
  "Italian",
  "Maharashtrian",
  "Snacks",
  "Street Food",
  "Sweets"
  ],
  "avgRating": 4.5,
  "parentId": "281782",
  "avgRatingString": "4.5",
  "totalRatingsString": "1K+",
  "sla": {
  "deliveryTime": 24,
  "lastMileTravel": 2.8,
  "serviceability": "SERVICEABLE",
  "slaString": "20-25 mins",
  "lastMileTravelString": "2.8 km",
  "iconType": "ICON_TYPE_EMPTY"
  }
}
},{
  "info": {
  "id": "435405",
  "name": "Coffee House",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_435405.JPG",
  "locality": "Cunningham Road",
  "areaName": "Central Bangalore",
  "costForTwo": "₹250 for two",
  "cuisines": [
  "Bakery",
  "Beverages",
  "Chaat",
  "Desserts",
  "Home Food",
  "Italian",
  "Maharashtrian",
  "Snacks",
  "Street Food",
  "Sweets"
  ],
  "avgRating": 4.5,
  "parentId": "281782",
  "avgRatingString": "4.5",
  "totalRatingsString": "1K+",
  "sla": {
  "deliveryTime": 24,
  "lastMileTravel": 2.8,
  "serviceability": "SERVICEABLE",
  "slaString": "20-25 mins",
  "lastMileTravelString": "2.8 km",
  "iconType": "ICON_TYPE_EMPTY"
  }
}
},{
  "info": {
  "id": "435405",
  "name": "Chaayos Chai+Snacks=Relax",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_435405.JPG",
  "locality": "Cunningham Road",
  "areaName": "Central Bangalore",
  "costForTwo": "₹250 for two",
  "cuisines": [
  "Bakery",
  "Beverages",
  "Chaat",
  "Desserts",
  "Home Food",
  "Italian",
  "Maharashtrian",
  "Snacks",
  "Street Food",
  "Sweets"
  ],
  "avgRating": 4.5,
  "parentId": "281782",
  "avgRatingString": "4.5",
  "totalRatingsString": "1K+",
  "sla": {
  "deliveryTime": 24,
  "lastMileTravel": 2.8,
  "serviceability": "SERVICEABLE",
  "slaString": "20-25 mins",
  "lastMileTravelString": "2.8 km",
  "iconType": "ICON_TYPE_EMPTY"
  }
}
}
];


const RestaurantCard = (props) => {
  // name must be same as the props key name
  // const {resName, cuisine} = props;
  const {resData} = props;
  const {name, cuisines,avgRating,deliveryTime, locality,costForTwo} = resData?.info;
// console.log(props);
  return (
    <div className="restaurant-card" >
      <div className="restaurant-image" style={{backgroundColor: "#f0f0f0"}}>
        <img className="res-image" alt="res-image" src="https://lh5.googleusercontent.com/p/AF1QipP0eUAms3T6iZD_d5bf8ivyJVzVKp9d4gZALh2S=w178-h178-n-k-no"></img>
        <h3 className="res-name">{name}</h3>
        <h4 className="res-rating">{avgRating} star</h4>
        <h4 className="res-delivery-time">{deliveryTime} hours</h4>
        <h4 className="res-cuisines">{cuisines.join(", ")}</h4>
        <h4 className="res-loacality">{costForTwo}</h4>
        <h4 className="res-loacality">{locality}</h4>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        {/* <RestaurantCard resData = {resList[0]} />
        <RestaurantCard resData = {resList[1]}/>
        <RestaurantCard resData = {resList[2]}/>
        <RestaurantCard resData = {resList[3]}/>
        <RestaurantCard resData = {resList[4]}/>
        <RestaurantCard resData = {resList[5]}/>
        <RestaurantCard resData = {resList[6]}/>
        <RestaurantCard resData = {resList[7]}/> */}
        {/* each resaurant must have unique id  */}
        {/* we can use index instea of dreaturant.info.id */}
        {resList.map((restaurant,index) => (<RestaurantCard key={index}resData = {restaurant}/>))}
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

/* 

Important
config driven UI : our website are driven by data or config
different UI for different cities
all the UI's are driven by config and the config is json file netwrok
https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.191957&lng=78.00384059999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

carousel : different for different cities and nothing for some cities 
UI is powered by data.
there is two layer: 
1 Data Layer
2.UI Layer 
Both make a good frontend application. you must be good engineer in both


*/

/* 

Importance of key attribute in react:
There are lot of restaurant card in restaurant container:
if we remove the first restaurant card then react will remove the first card from the dom and then it will re-render the whole restaurant container
so to avoid this we use key attribute in react
if we want add a restuarant card at the beginning then react will add the card at the beginning and it will re-render the whole restaurant container
Give them a unique id so that react can identify them uniquely
If some is added with some id it will render that restuarant card only and not the whole restaurant container
Big operation is done in O(1) time complexity

*/

/* 

UI is driven by config and this config is coming from the network(Backend).

*/