import React from 'react';
import ReactDOM from 'react-dom';


/* 

const heading = React.createElement("h1", 
  {id:"heading"},
   "Hello World from React!"
  );
// {} -> it is a placeholder for attributes and it is used to create a attributes inside the element 
// everything will be rendered in root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
// render methos take the object and convert it into the DOM element and render it in the root element
// we are passing an javascript object or react element to the render method such that the element will be rendered in the root element


// React comes with a philosophy of "Learn Once, Write Anywhere"
// React comes with concept of manipulating the DOM using javascript/react.

// React.createElement() -> it is used to create a element in react. it creates an javascript object and returns it.
// ReactDOM.createRoot() -> it is used to create a root in react
// root.render() -> it is used to render the element in the root

console.log(heading); // it creates react element and prints an object in console
console.log(root);  


*/

/*   <div id="parent">
      <div id="child">
        <h1>
        </h1>
      </div>
     </div>
 */

const parent = React.createElement(
  "div",
  {id:"parent"},
  [
    React.createElement("div",{id:"child1"},
    [React.createElement("h1",{id:"heading"},"Hello World"),
    React.createElement("p",{id:"paragraph"},"This is a paragraph")
    ]),
    React.createElement("div",{id:"child2"},
    [React.createElement("h1",{id:"heading"},"Hello World"),
    React.createElement("p",{id:"paragraph"},"This is a paragraph")
    ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);
console.log(root);

// React can apply independent changes to the DOM without affecting the other elements in the DOM
// It can be applied to the samll portions of the DOM without affecting the other elements in the DOM
// React at the end of the day is a javascript library that is used to manipulate the DOM

// order of files matters alot in react.
// first inject react in html file and then inject the react-dom in html file and then inject the app.js file in html file

// CDN -> Content Delivery Network in react -> it is used to deliver the react and react-dom files to the browser
// React is only a library and it is not a framework with a lot of features.
// It is used to create the large scale applications and it is used to create the single page applications


// crossorigin attribute

/* The crossorigin attribute in React is used to specify how the browser should handle cross-origin requests for elements like images, scripts, and links. This attribute is part of HTML and can be used in JSX within React components to control the behavior of fetching resources from different origins.

Here are the possible values for the crossorigin attribute and their meanings:

anonymous: This is the default value. It sends a cross-origin request without credentials (cookies, TLS client certificates, etc.).
use-credentials: This value sends a cross-origin request with credentials.
"" (empty string): This is equivalent to anonymous.



Usage Context

The crossorigin attribute is particularly useful when dealing with resources that might be loaded from a different domain than your application's origin. This can be important for:

Handling CORS (Cross-Origin Resource Sharing) policies.
Enabling certain features like Subresource Integrity (SRI) checks for ensuring the integrity of fetched resources.
Managing how cookies and authentication credentials are sent with requests

*/

/* 
npm -> it is used to install the packages
npx -> npx is used to used to execute the packages
and npx will host development build of the react application to loaclhost:1234
npm start -> it is used to start the react application

CDN -> it is bad to bring the react and react-dom files from the CDN because it will slow down the application and it will take time to load the application.

It should be better to install the react and react-dom files using the npm and then use the files from the node_modules folder.

*/