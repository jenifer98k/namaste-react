import React from 'react';
import ReactDOM from 'react-dom';

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, []),
  React.createElement("h1", { id: "heading_1" }, "this is vanakam react"),
  React.createElement("h2", { id: "heading_2 " }, "Heading 2 vanakam"),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading_1_child2" }, "Heading "),
    React.createElement("h2", { id: "heading_2_child2" }, "Heading 2"), 
    1
  ]),
  10
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
