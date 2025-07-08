const Pizaa = () => {
  return React.createElement(
    "div", 
    {}, 
    [
      React.createElement("h1", {}, "The Pepperoni Pizza"),
      React.createElement("p", {}, "Cheese, pepperoni")
    ]
  )
}

const App = () => {
  return React.createElement(
    "div", 
    {},
    [
      React.createElement("h1", {}, "Padre Gino's"),
      React.createElement(Pizaa),
      React.createElement(Pizaa),
      React.createElement(Pizaa),
    ]
  )
}

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)
root.render(React.createElement(App))