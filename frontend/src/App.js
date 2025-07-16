import React from "react";
import { createRoot } from 'react-dom/client'
import Pizza from "./components/Pizza";

// const Pizza = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.name),
//     React.createElement("p", {}, props.description),
//   ]);
// };

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "name 1",
      description: "description 1",
    }),
    React.createElement(Pizza, {
      name: "name 2",
      description: "description 2",
    }),
    React.createElement(Pizza, {
      name: "name 3",
      description: "description 3",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
