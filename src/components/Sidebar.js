import React from 'react'
import './Sidebar.css'

function Sidebar() {
	var bool = true;
	const myFunction=()=>{
		if(bool===true){
			document.getElementById('container').style.left='0px';
			document.getElementById('task_num').style.display='none';
			bool=false;
		}
		else{
			document.getElementById('container').style.left='-153px';
			document.getElementById('task_num').style.display='inline';
			bool=true;
		}
	}
  return (
    <aside id='container' className="sidebar">
		<div className='jb'>
		<p>Journey Board</p>
		<i className="fa fa-bars" onClick={myFunction}></i>
		</div>
		<h4>1. demo task</h4>
		<span id='task_num'>1</span>
		<nav>
				<ul className="sidebar__nav">
					<li>
						<span className="sidebar__nav__text">task heading 1</span>
					</li>
					<li>
						<span className="sidebar__nav__text">task heading 2</span>
					</li>
					<li>
						<span className="sidebar__nav__text">task heading 3</span>
					</li>
					<li>
						<span className="sidebar__nav__text">task heading 4</span>
					</li>
					<li>
						<span className="sidebar__nav__text">task heading 5</span>
					</li>
					<li>
						<span className="sidebar__nav__text">task heading 6</span>
					</li>
				</ul>
			</nav>
		</aside>
  )
}

export default Sidebar