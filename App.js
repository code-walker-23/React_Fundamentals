import React from 'react';
import ReactDOM from 'react-dom/client';


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

/* const parent = React.createElement(
  "div",
  {id:"parent"},
  [
    React.createElement("div",{id:"child1"},
    [React.createElement("h1",{id:"heading"},"Hello World!"),
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
console.log(root); */

// React can apply independent changes to the DOM without affecting the other elements in the DOM

// It can be applied to the samll portions of the DOM without affecting the other elements in the DOM

// React at the end of the day is a javascript library that is used to manipulate the DOM

// order of files matters alot in react.
// first inject react in html file and then inject the react-dom in html file and then inject the app.js file in html file

// CDN -> Content Delivery Network in react -> it is used to deliver the react and react-dom files to the browser
// React is only a library and it is not a framework with a lot of features.

// It is used to create the large scale applications and it is used to create the single page applications


// crossorigin attribute

/* 

The crossorigin attribute in React is used to specify how the browser should handle cross-origin requests for elements like images, scripts, and links. This attribute is part of HTML and can be used in JSX within React components to control the behavior of fetching resources from different origins.

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


React.createElement() -> it is an object when we render into the DOM it will be converted into the DOM element
object => DOM element(rendered in the DOM)

*/






/* 

JSX is a statically-typed, object-oriented programming language designed to run on modern web browsers. It is a syntax extension for JavaScript that allows developers to write HTML-like code within their JavaScript files. JSX is commonly used with React to describe what the UI should look like.

JSX, or JavaScript XML(Extensible Markup Language), is a syntax extension for JavaScript used with React to describe what the UI should look like. Here are some key points about JSX:

Looks Like HTML: JSX looks similar to HTML but is written within JavaScript. This makes it easier to write and understand the structure of the UI components.

Embedding Expressions: You can embed any JavaScript expression in JSX by wrapping it in curly braces {}. This allows you to dynamically insert values into your UI.

Babel Transpilation: JSX isn't valid JavaScript by itself. Tools like Babel are used to transpile JSX into regular JavaScript function calls (React.createElement), which the browser can understand.

Attributes and Children: You can pass attributes to JSX elements, similar to HTML attributes. Children elements can be nested inside parent elements, creating a tree structure.

Self-Closing Tags: Like HTML, JSX supports self-closing tags for elements that don't have children, e.g., <input />.

jsx is not a html in javascript 
jsx is HTML-like or XML-like syntax



JSX is a syntax extension for javascript and it is used to write the react code in a more readable way.

Jsx is different and react is different. Jsx is a syntax extension for javascript and react is a library that is used to manipulate the DOM.



*/







/* 


Transpiling (or transpilation) is the process of converting code written in one programming language or version of a language into another language or version. In the context of modern web development, transpiling often refers to converting newer JavaScript syntax or languages (such as JSX, TypeScript, or ES6/ES7 JavaScript) into older JavaScript syntax that can be understood and executed by all browsers.

Here's a more detailed breakdown:

1. **Syntax Transformation**: Transpilers convert code from one syntax to another. For example, Babel can convert JSX syntax into regular JavaScript, and ES6+ features (like arrow functions, classes, and template literals) into ES5 syntax.

2. **Browser Compatibility**: Many modern JavaScript features are not supported in all browsers, especially older ones. Transpiling ensures that code using these features can run on any browser by converting it to a version that has wider support.

3. **Tools**: Common tools for transpiling include Babel for JavaScript and TypeScript Compiler (tsc) for TypeScript. These tools take in your source code, apply transformations, and output code that is compatible with target environments.

### Example: JSX Transpilation

Consider the following JSX code:

```jsx
const element = <h1>Hello, world!</h1>;
```

A transpiler like Babel will convert this into regular JavaScript code that uses `React.createElement`:

```javascript
const element = React.createElement('h1', null, 'Hello, world!');
```

### Example: ES6 to ES5

ES6 arrow function:

```javascript
const add = (a, b) => a + b;
```

After transpiling to ES5:

```javascript
var add = function(a, b) {
  return a + b;
};
```

### Benefits of Transpiling

- **Cross-Browser Compatibility**: Ensures your code works across all browsers, including older ones.
- **Use of Modern Features**: Allows developers to use the latest language features and syntactic sugar without worrying about compatibility issues.
- **Code Consistency**: Helps maintain consistency in codebases by standardizing the code that gets shipped to production.

In your React project with Parcel, Babel can be configured to handle the transpilation of JSX and modern JavaScript features into a version that is compatible with the browsers you intend to support.



*/





/* const Heading = React.createElement("h1", {id:"heading"}, "Hello World from React!");
console.log(Heading);

const jsxHeading = <h1>Hello, I am using JSX here!</h1>;
console.log(jsxHeading);

// Both will print same object that means jsx is creating react element in the background and react element is an object.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Heading);
root.render(jsxHeading); */

// it will render the jsxHeading in the root element and it will replace the Heading element with jsxHeading element in the root element.





// Difference between jsx and html


/* 



JSX (JavaScript XML) and HTML (HyperText Markup Language) are similar in that they both describe the structure of a user interface. However, they have some key differences due to their purposes and contexts in which they are used. Here’s a detailed comparison:

### JSX

- **Usage Context**: JSX is used within JavaScript code, primarily with React, to describe the UI components.

- **Syntax**: JSX syntax is similar to HTML but can embed JavaScript expressions directly within the markup using curly braces `{}`.

- **Compilation**: JSX is not directly executable by browsers. It needs to be transpiled (e.g., by Babel) into JavaScript, specifically into `React.createElement` calls.

- **Attributes**: JSX uses camelCase for attribute names (e.g., `className` instead of `class`, `onClick` instead of `onclick`).

- **JavaScript Integration**: In JSX, you can embed JavaScript expressions directly. For example:

  ```jsx
  const name = "Vinay";
  const element = <h1>Hello, {name}!</h1>;
  ```

- **Components**: JSX can be used to define and use custom components, which are not a part of HTML.

### HTML

- **Usage Context**: HTML is the standard markup language for creating web pages. It is used to structure the content on the web.

- **Syntax**: HTML syntax is a straightforward markup language that does not allow embedding of JavaScript directly within the tags (though it can include script tags for JavaScript).

- **Execution**: HTML is directly rendered by browsers without the need for any compilation or transpilation.

- **Attributes**: HTML attributes are generally written in lowercase (e.g., `class`, `onclick`).

- **JavaScript Integration**: JavaScript can be included in HTML files using `<script>` tags, but you cannot embed JavaScript directly within HTML attributes without using event handlers or JavaScript expressions.

  ```html
  <div>Hello, world!</div>
  <script>
    const name = "Vinay";
    document.querySelector('div').innerText = `Hello, ${name}!`;
  </script>
  ```

-**Components**: HTML does not have a built-in concept of reusable components like JSX does with React.

### Detailed Comparison

1. **Syntax and Flexibility**:
   - **JSX**: 
     ```jsx
     const element = <h1>Hello, world!</h1>;
     ```
     You can embed JavaScript expressions:
     ```jsx
     const name = "Vinay";
     const element = <h1>Hello, {name}!</h1>;
     ```
   - **HTML**: 
     ```html
     <h1>Hello, world!</h1>
     ```

2. **Attributes**:

   - **JSX**:
     ```jsx
     <div className="container"></div>
     <button onClick={handleClick}>Click me</button>
     ```
   - **HTML**:
     ```html
     <div class="container"></div>
     <button onclick="handleClick()">Click me</button>
     ```

3. **Component Usage**:

   - **JSX**: Custom components can be created and used like regular HTML elements.
     ```jsx
     function Greeting(props) {
       return <h1>Hello, {props.name}</h1>;
     }
     const element = <Greeting name="Vinay" />;
     ```
   - **HTML**: Does not support custom components in the same way. You would need additional JavaScript to achieve similar functionality.

### Conclusion
While JSX and HTML look similar, JSX offers the powerful capability of embedding JavaScript within the markup, enabling dynamic and interactive UI development in React applications. HTML, on the other hand, is static and used primarily for defining the structure and content of web pages, without direct integration with JavaScript.


*/

















/* 


React Components -> it is a building block of the react application

React components are the reusable pieces of the code that can be used to create the user interface

Types of React Components:
1. Functional Components
2. Class Components

Functional Components: 
- Functional components are the javascript functions that accept the props and return the react element
- Functional components are also called as stateless components
- Functional components are the simplest way to define the components in react

Class Components:
- Class components are the ES6 classes that extend from React.Component
- Class components are also called as stateful components
- Class components have additional features like state and lifecycle methods

Functional Components are better than the class components because functional components are simple and easy to understand and easy to test.

Everything in react is a component and every component is a function or class.

A function which return a jsx is called as a functional component.
A javascript function that accepts the props and returns the react element is called as a functional component.


*/






/* 


// React element
const heading = (<h1 className='head'>
    Hello World from React!
  </h1>
);

*/
  




// Rendering react component inside the another react component

/*

const Title = () => (
  <h1 className="head">
    Hello World from React!
  </h1>
);


// React Functional Component
// component composition -> it is a concept of combining the components to create the complex components
const HeadingComponent = () => ( 
  <div id="container">
    <Title /> or <Title></Title> or {Title()}
    <h1 className='Heading'>Hello, I am a functional component!</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// root.render(HeadingComponent());
root.render(<HeadingComponent />);

// console.log(heading);
// console.log(HeadingComponent());
console.log(HeadingComponent); //transpiled version of the functional component 

*/






// Rendering the react element inside the react component

/* 


const title =(
  <h1 className="head">
    Hello World from React!
  </h1>
);

const HeadingComponent = () => ( 
  <div id="container">
    {title}
    <h1 className='Heading'>Hello, I am a functional component!</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// root.render(HeadingComponent());
root.render(<HeadingComponent />);


*/







// Rendering raect elemet inside the another react element

/* 


const title =(
  <h1 className="head">
    Hello World from React!
  </h1>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
const HeadingComponent = ( 
  <div id="container">
    {title}
    <h1 className='Heading'>Hello, I am a functional component!</h1>
  </div>
);

root.render(HeadingComponent);


*/












/* 

const title =(
  <h1 className="head">
    Hello World from React!
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

const HeadingComponent = () => 
   (
    <>
      <div id="container1">
      {title}
      <h1 className='heading'>Hello, I am a functional component!</h1>
      </div>
      <div id="container2">
      {title}
      <h1>{"Vinay Chhabra"}</h1>
      <h1 className='heading'>Hello, I am a functional component!</h1>
      </div>
    </>
  
  ); 
  // you can add inside pair of curly braces but write explicitly return

// These all are same
root.render(HeadingComponent());
// root.render(<HeadingComponent/>);
// root.render(<HeadingComponent></HeadingComponent>);

// Jsx is making your code more readable and easy to understand instead of writing the react element in the javascript object.



 */

















