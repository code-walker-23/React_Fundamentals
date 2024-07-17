// npm -> It does not stands for node package manager.
// It is a huge package manager that is used to manage the dependencies of the project.
// It is a standard repository where all the packages are hosted.
// Behind the scenes it works as a node package manager.But actually idt does not stands for node package manager.
// if you go the official website of npm you will see that it does not stands for node package manager.It will give you a random full form for npm.

/* The NPM registry is an online database of public and private packages that you can browse and search for useful libraries to use in your React project.
Popular packages for React development include redux, axios, styled-components, etc. */


/* 

he terms "package" and "library" are often used interchangeably in the context of software development, especially when discussing package managers like NPM. However, there are subtle differences between the two concepts.

Package
A package is a bundle of code that can include one or more modules, scripts, assets, metadata, and configuration files. It is designed to be easily distributed and reused. A package typically contains the following:

Library
A library is a collection of pre-written code that developers can use to optimize tasks. Libraries provide functionality that can be included and reused in other programs. A library focuses on providing a set of related functions, classes, or methods.

Example
Consider the axios NPM package:

As a Package: It includes metadata (package.json), the library code, documentation, and possibly other files.
As a Library: The core functionality of axios is to make HTTP requests, which you can include in your project to handle HTTP communication.
In summary, a package is a container for code and related files, while a library is a collection of code that provides specific functionality. 

*/
// json file -> it is used to store the metadata of the project.
// it is the configuration for npm.

// Dependencies -> it is the list of the packages that are required to run the project. these are the packages on which the project is dependent.npm will install these packages automatically when you run the npm install command.npm will take care of the dependencies of the project.



/* 


Cross-origin refers to the practice of making requests to a domain different from the one that the currently loaded web page is on. In the context of web development, "origin" refers to the combination of the protocol (http or https), domain, and port of a URL. Cross-origin requests happen when these components differ between the requesting page and the resource being requested.

Cross-Origin Resource Sharing (CORS)
To understand cross-origin, it's essential to understand CORS, which stands for Cross-Origin Resource Sharing. CORS is a mechanism that allows web applications to request resources from a different origin (domain, protocol, or port) than the one from which the application was loaded.

Why CORS is Needed
By default, web browsers implement a security feature called the Same-Origin Policy (SOP). This policy restricts how a web page can request resources from another domain, aiming to prevent malicious websites from accessing sensitive data from another site without the user's consent.

However, there are legitimate cases where cross-origin requests are necessary, such as:

A web application hosted on example.com needs to request data from an API on api.example.com.
A website needs to load images, scripts, or styles from a Content Delivery Network (CDN).


*/


// there is html file and css file and js file so our whole code needs to minified , bundled together , cached , compressed , clean before it is deployed to the production server. That all these things are done by the webpack.
// web pack is a module bundler that is used to bundle the modules of the project together.

 // Bundlers example: Webpack, Parcel, Rollup , vite etc 

 // Parcel is the very easy bundler to use and it is very easy to configure and it is very fast as well.

 // Parcel gives strength to our project.

 // types of dependencies in the project:

 // 1. Development dependencies -> these are the dependencies that are only required in the development environment and they are not required in the production environment.

 // 2. Production dependencies -> these are the dependencies that are required in the production environment and they are not required in the development environment.

 // npm install -D parcel -> it will install the parcel as the development dependency or devdependency.

 /* 
 
 value	  -> desc
~version	-> Approximately equivalent to version, i.e., only accept new patch versions -> major updates

^version	-> minor updates -> Compatible with version, i.e., accept new minor and patch versions

it is always recommended to use the ^version in the package.json file.
if nothing is there , it will be the same version as the version that is installed in the project.

*/

/* 
node_modules -> it is the folder that is created when we run the npm install command. It contains all the dependencies of the project.

there is transitive dependency because parcel as project has some dependencies and those dependencies have some dependencies and so on. So, all the dependencies are stored in the node_modules folder.

package-lock.json -> it is the file that is created when we run the npm install command. It contains the exact version of the dependencies that are installed in the project. there is hash code in "Integrity" that is used to check the integrity of the dependencies.that system runs on local machine but not in production environment that resolves by the integrity.

parcel uses all libraries in node_modules folder.

it is not needed to push node_modules folder to the github because it is very large in size and it is not needed to push the node_modules folder to the github.
Because in package-lock.json there is record of all version of the dependencies that are installed in the project.

and you just need to push the package.json and package-lock.json file to the github and when you clone the project from the github then you just need to run the( npm install) command to install all the dependencies of the project.

whatever you can regenerate donn't push it to the github.Only the essentials files are pushed to the github.

*/