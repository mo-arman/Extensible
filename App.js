/**<div>
 *  <div>
 *  <h1>
 *  <div>
 * <h2>
 *</div>
  </div>
 */
 import React from "react";
 import ReactDOM from "react-dom";

  const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},[
        React.createElement("h2",{},"I am H1 Tag and My Father Name Div"),
        React.createElement("h2",{},"I am H2 Tag and My Father Name Also div because H1 and H2 Siblings")
    ]),
    React.createElement("div",{id:"child"},[
        React.createElement("h2",{},"I am H3 Tag and My Father Name Div"),
        React.createElement("h2",{},"I am H4 Tag and My Father Name Also div because H1 and H2 Siblings")
    ])
  );
 console.log(parent);
  const root = React.createElement('h1',{},'Hello Arman');
    const heading = ReactDOM.createRoot(document.getElementById('root'));

    heading.render(parent);