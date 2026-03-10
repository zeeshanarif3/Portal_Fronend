// import React from "react";
// import "./Sidebar.css";

// function Sidebar() {
//   return (
//     <div className="sidebar">

//       <button className="orange-btn">
//         Non-Linear
//       </button>

//       <h4>Non-Linear Data Structures</h4>

//       <ul>
//         <li className="active">📋 All Non-linear Problems</li>
//         <li>🌳 Tree</li>
//         <li>📊 Graph</li>
//       </ul>

//     </div>
//   );
// }

// export default Sidebar;
import React, { useState } from "react";
import "./Sidebar.css";

function Sidebar() {

const [type, setType] = useState("nonlinear");

return (

<div className="sidebar">

<button
className="orange-btn"
onClick={() =>
setType(type === "nonlinear" ? "linear" : "nonlinear")
}
>
{type === "nonlinear" ? "Non-Linear ▼" : "Linear ▼"}
</button>

<h4>
{type === "nonlinear"
? "Non-Linear Data Structures"
: "Linear Data Structures"}
</h4>

<ul>

<li className="active">
📋 {type === "nonlinear"
? "All Non-linear Problems"
: "All Linear Problems"}
</li>

{type === "nonlinear" && (
<>
<li>🌳 Tree</li>
<li>📊 Graph</li>
</>
)}

{type === "linear" && (
<>
<li>📊 Array</li>
<li>📚 Stack</li>
<li>📬 Queue</li>
<li>🔗 Linked List</li>
</>
)}

</ul>

</div>

);

}

export default Sidebar;