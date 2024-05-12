const descr = React.createElement(
  "h1",
  {
    // attributes
    id: "heading",
  },
  "Welcome to React Learning"
);

const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Nested1a"),
    React.createElement("h2", {}, "Nested1b"),
  ]),

  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Nested2a"),
    React.createElement("h2", {}, "Nested2b"),
  ])
]
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
