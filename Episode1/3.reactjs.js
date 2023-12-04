/*
create this structure using 

<div id="parent">
   <div id="child">
  <h1>Hello</h1>
  <h3>Helloo</h3>

</div>
</div>
*/
const heading =React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},
[React.createElement("h1",{},"Hello"),React.createElement("h1",{},"Helloo")]))
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)