import React from "react";
import "./DSASheet.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import Navbar from "../navbar";
import Sidebar from "../DSASheet/Sidebar";
import { FaTrophy,FaCheckCircle,FaCheck } from "react-icons/fa";

function DSASheet() {

const problems = [
{
id:1,
title:"Maximum Depth of Binary Tree",
desc:"Find maximum depth of binary tree",
topic:"Tree",
difficulty:"Easy",
link:"https://leetcode.com/problems/maximum-depth-of-binary-tree/"
},
{
id:2,
title:"Same Tree",
desc:"Check if two trees are same",
topic:"Tree",
difficulty:"Medium",
link:"https://leetcode.com/problems/same-tree/"
},
{
id:3,
title:"Invert Binary Tree",
desc:"Invert the binary tree",
topic:"Tree",
difficulty:"Hard",
link:"https://leetcode.com/problems/invert-binary-tree/"
},
{
id:1,
title:"Maximum Depth of Binary Tree",
desc:"Find maximum depth of binary tree",
topic:"Tree",
difficulty:"Easy",
link:"https://leetcode.com/problems/maximum-depth-of-binary-tree/"
},
{
id:2,
title:"Same Tree",
desc:"Check if two trees are same",
topic:"Tree",
difficulty:"Easy",
link:"https://leetcode.com/problems/same-tree/"
},
{
id:3,
title:"Invert Binary Tree",
desc:"Invert the binary tree",
topic:"Tree",
difficulty:"Easy",
link:"https://leetcode.com/problems/invert-binary-tree/"
},
{
id:1,
title:"Maximum Depth of Binary Tree",
desc:"Find maximum depth of binary tree",
topic:"Tree",
difficulty:"Easy",
link:"https://leetcode.com/problems/maximum-depth-of-binary-tree/"
},
{
id:2,
title:"Same Tree",
desc:"Check if two trees are same",
topic:"Tree",
difficulty:"Easy",
link:"https://leetcode.com/problems/same-tree/"
},
{
id:3,
title:"Invert Binary Tree",
desc:"Invert the binary tree",
topic:"Tree",
difficulty:"Easy",
link:"https://leetcode.com/problems/invert-binary-tree/"
},
{
id:1,
title:"Maximum Depth of Binary Tree",
desc:"Find maximum depth of binary tree",
topic:"Tree",
difficulty:"Easy",
link:"https://leetcode.com/problems/maximum-depth-of-binary-tree/"
},
{
id:2,
title:"Same Tree",
desc:"Check if two trees are same",
topic:"Tree",
difficulty:"Easy",
link:"https://leetcode.com/problems/same-tree/"
},
{
id:3,
title:"Invert Binary Tree",
desc:"Invert the binary tree",
topic:"Tree",
difficulty:"Easy",
link:"https://leetcode.com/problems/invert-binary-tree/"
},
{
id:1,
title:"Maximum Depth of Binary Tree",
desc:"Find maximum depth of binary tree",
topic:"Tree",
difficulty:"Easy",
link:"https://leetcode.com/problems/maximum-depth-of-binary-tree/"
},
{
id:2,
title:"Same Tree",
desc:"Check if two trees are same",
topic:"Tree",
difficulty:"Easy",
link:"https://leetcode.com/problems/same-tree/"
},
{
id:3,
title:"Invert Binary Tree",
desc:"Invert the binary tree",
topic:"Tree",
difficulty:"Easy",
link:"https://leetcode.com/problems/invert-binary-tree/"
},
{
id:1,
title:"Maximum Depth of Binary Tree",
desc:"Find maximum depth of binary tree",
topic:"Tree",
difficulty:"Easy",
link:"https://leetcode.com/problems/maximum-depth-of-binary-tree/"
},
{
id:2,
title:"Same Tree",
desc:"Check if two trees are same",
topic:"Tree",
difficulty:"Easy",
link:"https://leetcode.com/problems/same-tree/"
},
{
id:3,
title:"Invert Binary Tree",
desc:"Invert the binary tree",
topic:"Tree",
difficulty:"Easy",
link:"https://leetcode.com/problems/invert-binary-tree/"
}
];

return (
<>

<Navbar/>

<div className="sheet-container">

{/* ================= PROGRESS ================= */}

<div className="progress-section">

<div className="progress-card">

<div className="card-header">

<div>
<p>Overall Progress</p>
<h1>2/32</h1>
</div>

<FaTrophy className="card-icon"/>

</div>

<div className="progress-bar">
<div className="progress-fill" style={{width:"6%"}}></div>
</div>

<span>6.2% Complete</span>

</div>


<div className="progress-card">

<div className="card-row">

<div className="circle circle-easy">
<FaCheck />
</div>

<div>
<p className="card-title">Easy</p>
<h2 className="card-number">2</h2>
</div>

</div>

</div>


<div className="progress-card">

<div className="card-row">

<div className="circle circle-medium">
<FaCheck />
</div>

<div>
<p className="card-title">Medium</p>
<h2 className="card-number">0</h2>
</div>

</div>

</div>

<div className="progress-card">

<div className="card-row">

<div className="circle circle-hard">
<FaCheck />
</div>

<div>
<p className="card-title">Hard</p>
<h2 className="card-number">0</h2>
</div>

</div>

</div>

</div>


{/* ================= MAIN SECTION ================= */}

<div className="main-card">

{/* SIDEBAR */}

<Sidebar/>


{/* RIGHT CONTENT */}

<div className="problem-area">


{/* FILTERS */}

{/* FILTERS */}

<div className="filter-row">

<button className="filter-btn active">
Show All Problems
</button>

<button className="filter-btn1">Easy</button>
<button className="filter-btn2">Medium</button>
<button className="filter-btn3">Hard</button>
<button className="filter-btn">Clear All</button>

</div>


{/* TABLE HEADER */}

<div className="table-header">
<span></span>
<span>Problem</span>
<span>Topic</span>
<span>Difficulty</span>
<span>Link</span>
</div>


{/* ================= PROBLEM LIST ================= */}

{problems.map((p,index)=>(
<div className="problem-card" key={index}>

<div className="check-col">
<input type="checkbox"/>
<span className="number">{p.id}</span>
</div>

<div className="problem-info">
<h3>{p.title}</h3>
<p>{p.desc}</p>
</div>

<div className="topic">
<span className="dot"></span>
{p.topic}
</div>

<div className={`difficulty ${p.difficulty.toLowerCase()}`}>
{p.difficulty}
</div>

<a href={p.link} target="_blank" rel="noreferrer">
<FaExternalLinkAlt className="link"/>
</a>

</div>
))}

</div>

</div>

</div>

</>
);
}

export default DSASheet;