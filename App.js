/* 


const heading = React.createElement("h1", 
  {id:"heading"},
   "Hello World from React!"
  );
// {} -> it is a placeholder for attributes and it is used to create a attributes inside the element 
// everything will be rendered in root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
// rebder methos take the object and convert it into the DOM element and render it in the root element
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

// React can apply independent changes to the DOM without affecting the other elements in the DOM
// It can be applied to the samll portions of the DOM without affecting the other elements in the DOM
// React at the end of the day is a javascript library that is used to manipulate the DOM

// order of files matters alot in react.
// first inject react in html file and then inject the react-dom in html file and then inject the app.js file in html file

// CDN -> Content Delivery Network in react -> it is used to deliver the react and react-dom files to the browser
// React is only a library and it is not a framework with a lot of features.
// It is used to create the large scale applications and it is used to create the single page applications