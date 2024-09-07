// const heading = document.createElement("h1")
// heading.innerHTML = "Hello from javaScript";
// const root = document.getElementById("root")
// root.appendChild(heading)4
// const heading = React.createElement("h1", {}, "Hello from React!");
// const root = ReactDom.createRoot(document.getElementById("root"));
// console.log(heading)
// ReactDom.render(heading,root)
// import React from "react";
const heading = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, React.createElement("h1", {}, "hello from React")));
console.log("heading");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//# sourceMappingURL=index.672d4772.js.map
