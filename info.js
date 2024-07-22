
/* 


Yes, you can embed multiple `<script>` tags within the HTML `<body>`. This is commonly done to include different JavaScript files or inline scripts in your web page. Here is an example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multiple Scripts Example</title>
</head>
<body>
    <h1>Hello, World!</h1>

    <script src="script1.js"></script>
    <script src="script2.js"></script>
    <script>
        // Inline script
        console.log("This is an inline script.");
    </script>
</body>
</html>
```

In this example, there are three `<script>` tags within the `<body>`:
1. The first one includes an external JavaScript file (`script1.js`).
2. The second one includes another external JavaScript file (`script2.js`).
3. The third one contains an inline JavaScript script.

You can place as many `<script>` tags as needed, either in the `<head>` or `<body>` sections of your HTML document.







*/


/* 


When you include multiple `<script>` tags in an HTML document, the scripts are executed in the order they appear. Here's a step-by-step explanation of how the example will execute:

1. **HTML Parsing**: The browser starts parsing the HTML document from top to bottom.

2. **Head Section**: The browser processes the `<head>` section first, setting up meta tags and loading any scripts or stylesheets if included here.

3. **Body Section**: The browser then starts parsing the `<body>` section. When it encounters a `<script>` tag, it will pause HTML parsing, download the script if it's an external file, and then execute it.

4. **First `<script>` Tag**: 
   ```html
   <script src="script1.js"></script>
   ```
   - The browser will download and execute `script1.js`.

5. **Second `<script>` Tag**:
   ```html
   <script src="script2.js"></script>
   ```
   - After finishing `script1.js`, the browser will download and execute `script2.js`.

6. **Inline `<script>` Tag**:
   ```html
   <script>
       console.log("This is an inline script.");
   </script>
   ```
   - Finally, the browser will execute the inline script, logging the message "This is an inline script." to the console.

If `script1.js` and `script2.js` contain code that modifies the DOM or depends on the DOM being fully loaded, they might use `window.onload` or `document.addEventListener('DOMContentLoaded', callback)` to ensure their code runs at the appropriate time.

### Example HTML with Explanations:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multiple Scripts Example</title>
</head>
<body>
    <h1>Hello, World!</h1>

    <script src="script1.js"></script> <!-- Script 1 is loaded and executed -->
    <script src="script2.js"></script> <!-- Script 2 is loaded and executed after script 1 -->
    <script>
        // Inline script
        console.log("This is an inline script."); <!-- This script is executed after script 2 -->
    </script>
</body>
</html>
```

### Execution Flow:

1. The HTML and head section are parsed.
2. The first script (`script1.js`) is downloaded and executed.
3. The second script (`script2.js`) is downloaded and executed.
4. The inline script is executed, logging the message to the console.

By following this order, scripts can ensure dependencies are met (e.g., functions defined in `script1.js` are available to `script2.js`).






*/



/* 


The placement of `<script>` tags in an HTML document can affect the loading and execution of the scripts as well as the rendering of the webpage. Here are the key differences between putting a `<script>` tag in the `<head>` and in the `<body>`:

### `<script>` Tag in `<head>`

1. **Blocking Behavior**: 
   - When a `<script>` tag is placed in the `<head>`, the browser will pause HTML parsing to download and execute the script. This can block the rendering of the rest of the page until the script is fully loaded and executed, leading to slower initial page load times.

2. **Execution Timing**:
   - Scripts in the `<head>` execute before the DOM is fully loaded, which means if the script tries to manipulate the DOM, it might fail unless the script includes a mechanism to wait for the DOM to be ready, such as using `document.addEventListener('DOMContentLoaded', callback)` or `window.onload`.

3. **Use Cases**:
   - Typically used for scripts that need to run before the page content is rendered, such as polyfills, analytics, or other initialization scripts that don't depend on the DOM being fully loaded.

### `<script>` Tag in `<body>`

1. **Non-blocking Behavior**: 
   - When a `<script>` tag is placed at the end of the `<body>`, the browser will first parse and render the HTML content and then download and execute the script. This results in faster rendering of the page content, as the scripts are loaded after the DOM is fully built.

2. **Execution Timing**:
   - Scripts in the `<body>` (especially at the end) execute after the DOM is fully loaded, making it safe to manipulate the DOM without additional checks or event listeners.

3. **Use Cases**:
   - Ideal for scripts that depend on the DOM being fully loaded, such as event listeners, DOM manipulations, or third-party libraries that interact with the page content.

### Example of Both Placements:

#### Script in `<head>`:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Script in Head</title>
    <script>
        console.log("Script in head");
    </script>
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>
```

#### Script in `<body>` (at the end):
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Script in Body</title>
</head>
<body>
    <h1>Hello, World!</h1>

    <script>
        console.log("Script in body");
    </script>
</body>
</html>
```

### Best Practices:

1. **Defer and Async Attributes**:
   - To improve page load performance, you can use the `defer` or `async` attributes with `<script>` tags.
   - `defer`: The script is downloaded in parallel with the page, but executed only after the HTML parsing is complete.
   - `async`: The script is downloaded in parallel with the page, and executed as soon as it's downloaded (which might still block HTML parsing).

#### Example with `defer`:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Defer Script</title>
    <script src="script.js" defer></script>
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>
```

By understanding these differences and best practices, you can optimize the performance and behavior of your web pages.



*/



/* The issue lies in your use of React's createRoot method. You are trying to create two separate roots (root and app), but React 18's createRoot method is typically used to initialize one root instance for the entire application. */





/* 


Destructuring on the fly refers to the process of unpacking values from arrays or properties from objects directly in the context where they are needed, often within function parameters or variable assignments. This technique is common in JavaScript and allows for more concise and readable code.

Here's an example:

### Destructuring Arrays on the Fly
```javascript
const [a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2
```

### Destructuring Objects on the Fly
```javascript
const person = { name: 'John', age: 30 };
const { name, age } = person;
console.log(name); // John
console.log(age); // 30
```

### Destructuring in Function Parameters
You can destructure objects or arrays directly within function parameters to extract specific values:

```javascript
const printPerson = ({ name, age }) => {
  console.log(`Name: ${name}, Age: ${age}`);
};

const person = { name: 'John', age: 30 };
printPerson(person); // Name: John, Age: 30
```

### Nested Destructuring
You can also perform nested destructuring to extract values from nested objects or arrays:

```javascript
const person = {
  name: 'John',
  address: {
    city: 'New York',
    zip: '10001'
  }
};

const {
  name,
  address: { city, zip }
} = person;

console.log(name); // John
console.log(city); // New York
console.log(zip);  // 10001
```

### Default Values
You can assign default values to variables while destructuring:

```javascript
const person = { name: 'John' };
const { name, age = 25 } = person;
console.log(name); // John
console.log(age);  // 25 (default value)
```

### Function Parameters with Default Values
You can also provide default values for function parameters when destructuring:

```javascript
const printPerson = ({ name, age = 25 } = {}) => {
  console.log(`Name: ${name}, Age: ${age}`);
};

printPerson({ name: 'John' }); // Name: John, Age: 25
printPerson(); // Name: undefined, Age: 25 (default parameter object)
```

Destructuring on the fly simplifies the code, especially when working with complex data structures, and helps in writing cleaner and more maintainable code.


*/



/* 


In JavaScript, you can define object keys with or without double quotes. The difference lies mainly in the scenarios where each is required or preferred:

### Without Double Quotes
- Standard way of defining keys when the keys are valid JavaScript identifiers (e.g., names without spaces or special characters).
- Easier to read and write for simple keys.

```javascript
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};
```

### With Double Quotes
- Necessary when the keys include spaces, special characters, or keywords.
- Useful when keys are dynamically generated or when using certain JSON structures where quotes are required.

```javascript
const person = {
  "name": 'John',
  "age": 30,
  "city": 'New York',
  "full name": 'John Doe', // key with space
  "123": 'ID number'       // key starting with a number
};
```

### Differences and Considerations
1. **Valid Identifiers**: Without quotes, keys must be valid JavaScript identifiers:
   - Must start with a letter, underscore (_), or dollar sign ($)
   - Subsequent characters can be letters, numbers, underscores, or dollar signs
   - Cannot be a reserved word (e.g., `class`, `let`)

   ```javascript
   const obj = {
     validKey: 'value',
     anotherKey: 'value'
   };
   ```

2. **Invalid Identifiers**: With quotes, keys can be any string, including those that are not valid JavaScript identifiers:
   - Can include spaces, punctuation, or start with a number
   - Can be a reserved word

   ```javascript
   const obj = {
     "invalid key": 'value',
     "another-key": 'value',
     "123number": 'value',
     "class": 'reserved word'
   };
   ```

3. **JSON Compatibility**: JSON requires double quotes around keys. When working with JSON data, you must use double quotes:

   ```json
   {
     "name": "John",
     "age": 30
   }
   ```

4. **Accessing Keys**: When accessing keys, both notations can be used interchangeably if the key is a valid identifier. If not, bracket notation must be used.

   ```javascript
   const person = {
     "name": 'John',
     "age": 30,
     "full name": 'John Doe'
   };

   console.log(person.name);       // John
   console.log(person['name']);    // John
   console.log(person['full name']); // John Doe
   ```

In summary, while you can use keys with or without double quotes in JavaScript objects, the choice depends on the nature of the key. For simplicity and readability, avoid quotes for valid identifiers, but use quotes when the key includes special characters, spaces, or reserved words.


*/

/* 

Here are different types of writing identifiers commonly used in software development:

1. **CamelCase**: camelCase
2. **PascalCase**: PascalCase
3. **Snake_case**: snake_case
4. **kebab-case**: kebab-case
5. **SCREAMING_SNAKE_CASE**: SCREAMING_SNAKE_CASE
6. **lowercase**: lowercase
7. **UPPERCASE**: UPPERCASE

*/

/* 

/* 

two types of export:
1. default export
2. named export
1. default export: it is used to export only one module from a file
2. named export: it is used to export multiple modules from a file

types of import:
1. default import
2. named import
1. default import: it is used to import the default module from a file.
2. named import: it is used to import multiple modules from a file.

*/

/* 

Yes, you can use both named exports and default exports in the same module. Here's an example to illustrate how this works:

### myModule.js
```javascript
// Named export
export const namedExport = () => {
  console.log("This is a named export");
};

// Default export
const defaultExport = () => {
  console.log("This is a default export");
};

export default defaultExport;
```

### Usage
```javascript
import defaultExport, { namedExport } from './myModule';

defaultExport();  // Output: This is a default export
namedExport();    // Output: This is a named export
```

In this example:

1. `namedExport` is exported as a named export.
2. `defaultExport` is exported as the default export.
3. When importing, you can import the default export with any name you choose and named exports using their exact names.


*/


/* 
state variable : It is a variable that holds some data that may change over the lifetime of the component.

react hook : It is a function that lets you use state and other React features in a functional component.

useState : It is a react hook that lets you add state to functional components.

props : It is an object that holds the data that is passed to a component from its parent component.

filter : It is a method that creates a new array with all elements that pass the test implemented by the provided function.

map : It is a method that creates a new array populated with the results of calling a provided function on every element in the calling array.

onClick : It is an event handler that is called when an element is clicked.

key : It is a special string attribute you need to include when creating lists of elements in React. */


/* 

React, a popular JavaScript library for building user interfaces utilizes a virtual DOM to optimize rendering and improve performance. To comprehend this fundamental concept, we’ll start with the basics and gradually delve into more advanced use cases with code examples.

The Basics: What is the Virtual DOM?
The Virtual DOM is an abstraction of the actual DOM in a tree-like structure. It's a lightweight copy of the actual DOM, maintained by React to track changes efficiently.


How Does Virtual DOM Work?

Initialization: When a React component is rendered for the first time, a virtual representation of the DOM is created.
Rendering: React compares the current virtual DOM with 
the previous version to identify changes.

Differential Algorithm: React uses a differential algorithm to identify the minimum number of changes needed to update the virtual DOM.

Update: The identified changes are applied to the virtual DOM.
Reconciliation: React reconciles(Adapt) the differences and calculates the most efficient way to update the actual DOM.

Update to Actual DOM: React applies the changes to the actual DOM using a process called "reconciliation," minimizing the number of updates needed.


Understanding Reconciliation in React
Reconciliation is the process through which React updates the actual DOM based on changes identified in the virtual DOM. It’s a critical part of React’s performance optimization strategy.

How Reconciliation Works
Element Creation: React creates a new virtual DOM tree with the updated component structure.
Diffing: React performs a “diffing” or comparison between the new and previous virtual DOM trees, identifying the differences.
Update Strategy: React determines the most efficient strategy to update the actual DOM, minimizing unnecessary operations.
Patch Changes: React patches or apply the identified changes to the actual DOM, ensuring it accurately reflects the updated virtual DOM.
Key Concepts in Virtual DOM
Understanding some key concepts related to the Virtual DOM helps in effective use and optimization.

1. Component Reusability
Components in React are reusable and composable, enabling the creation of complex user interfaces by combining simpler, modular components.

2. Immutable Data Structures
The virtual DOM is often implemented using immutable data structures, allowing efficient change detection and easy comparisons.

3. Component Lifecycle
React components have a lifecycle with various stages (mounting, updating, unmounting), each triggering specific functions. The virtual DOM plays a vital role in managing these lifecycle stages.

*/



/* 


Hook is a normal function that allows you to "hook into" React features. For example, useState is a Hook that lets you add React state to function components.

we got all the utility function when we type command npm install react 

Two very important hooks are useState and useEffect. useState is used to manage state in a functional component, and useEffect is used to perform side effects in a functional component.

useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.

useEffect is a Hook that runs after the render is committed to the screen. It runs after the render function and is used for data fetching, manually changing the DOM, and more.

Creating state variables in a functional component is done using the useState Hook. The useState Hook returns an array with two elements. The first element is the current state value, and the second element is a function that lets you update the state value.

The useState Hook is a named export from the react package, so you can import it using the following syntax:

import { useState } from 'react';

The useState Hook is used to create state variables in functional components. It takes the initial state value as an argument and returns an array with two elements. The first element is the current state value, and the second element is a function that lets you update the state value.

useState variable declaration : 
const [state, setState] = useState(initialState);
Here, state is the current state value, and setState is a function that lets you update the state value. initialState is the initial value of the state variable.

In a normal let listOfReastuarant UI is not updating when we click on the button. But when we use useState hook the UI is updating when we click on the button.

The useState hook keep sync the state variable with the UI.

whenever a state variable is changes react will re-render the component.

React will update the ui quickly  


*/

/* 

Recomciliation is the process through which react updates the actual DOM based on changes identified in the virtual DOM. It's a critical part of React's performance optimization strategy.

React uses a differential algorithm to identify the minimum number of changes needed to update the virtual DOM.

React fibre : React Fiber is a complete rewrite of the React core algorithm, enabling incremental rendering of components. It allows React to split rendering work into chunks and spread it out over multiple frames, improving performance and user experience.

Virtual DOM : It is an javascript object eg: 

Difference between Virtual DOM and Real DOM

Virtual DOM
1. It is a lightweight copy of the actual DOM.
2. It is a JavaScript object that represents the structure of the actual DOM.
3. Changes are made to the virtual DOM first, and then React updates the actual DOM efficiently.
4. It helps in optimizing rendering performance by minimizing direct updates to the actual DOM.

Real DOM:

1. It is the actual browser DOM that represents the structure of the web page.
2. Changes directly affect the actual DOM, leading to potential performance issues.
3. Direct updates to the real DOM can be slower and less efficient compared to the virtual DOM.
4. It can cause reflows and repaints, impacting the performance of the web page.


EXAMPLES OF VIRTUAL DOM AND REAL DOM

Virtual DOM Example : {type: 'div', props: {id: 'myDiv'}, children: ['Hello, World!']}

Real DOM Example : <div id="myDiv">Hello, World!</div>

Differential Algorithm : React uses a differential algorithm to identify the minimum number of changes needed to update the virtual DOM. This algorithm efficiently compares the current virtual DOM with the previous version to determine the specific updates required for the actual DOM.

Reconciliation : Reconciliation is the process through which React updates the actual DOM based on changes identified in the virtual DOM. It involves comparing the current and previous virtual DOM trees, identifying differences, and applying the necessary updates to the actual DOM.

*/

/* 

About React Fibre:

1. React Fiber is a complete rewrite of the React core algorithm, enabling incremental rendering of components.

2. It allows React to split rendering work into chunks and spread it out over multiple frames, improving performance and user experience.

3. React Fiber enhances React's ability to handle complex and asynchronous interactions, making it more efficient and responsive.

4. It introduces a new reconciliation algorithm that prioritizes user interactions and ensures smoother animations and transitions.

5. React Fiber is designed to be more flexible, efficient, and scalable, providing a solid foundation for future React development and optimizations.

6. React Fiber is a significant advancement in React's architecture, offering better control over rendering priorities, error boundaries, and component lifecycles.

7. Overall, React Fiber represents a major evolution in React's capabilities, enabling developers to build more interactive, responsive, and performant web applications.

History: 
React Fiber was introduced in React 16 as a major rewrite of the React core algorithm. It aimed to address performance issues, improve rendering efficiency, and enhance React's capabilities for handling complex user interfaces.

Benefits:

1. Improved Performance: React Fiber enables incremental rendering, optimizing the rendering process and reducing the time needed to update the DOM.

2. Enhanced Responsiveness: By breaking rendering work into smaller chunks, React Fiber ensures smoother user interactions and more responsive applications.

3. Better Error Handling: React Fiber introduces error boundaries and improved error handling mechanisms, making it easier to manage and recover from errors.

4. Scalability: React Fiber's architecture is designed to be more scalable and flexible, allowing for better control over rendering priorities and component lifecycles.

5. Future-Proofing: React Fiber provides a solid foundation for future React development, enabling ongoing optimizations and enhancements to the library.

Overall, React Fiber represents a significant step forward in React's evolution, offering developers a more powerful and efficient platform for building modern web applications.


*/

// Comparing two virtual doms(javascript objects) is eassy and fast compared to comparing two real doms(html elements).

// reconcialation comes under react core algorithm(React 16).

// Current version of react is 18.0.0


/* 

Monolithic Architecture : In a monolithic architecture, all the components of an application are tightly integrated and deployed as a single unit. This can make it challenging to scale, maintain, and update the application.

Component eg : UI,API,Database,Server,Authentication,Authorization,SMS,Email

Microservices Architecture : In a microservices architecture, an application is divided into smaller, independent services that communicate with each other through APIs. This approach offers greater flexibility, scalability, and resilience.

In microservice architecture, each component is a separate service and they communicate with each other through APIs. 

*/