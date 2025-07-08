const Pizaa = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizaa, {
      name: "name 1",
      description: "description 1",
    }),
    React.createElement(Pizaa, {
      name: "name 2",
      description: "description 2",
    }),
    React.createElement(Pizaa, {
      name: "name 3",
      description: "description 3",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
