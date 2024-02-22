import React from 'react'
import "./components/leftbar.css";


function LeftBar() {
  return (
    <div>
        <div className='parent'>
        <div className='child'><a href="#html">Html</a></div>
        <div className='child'><a href="#css">CSS</a></div>
        <div className='child'><a href='#js'>JavaScript</a></div>
        <div className='child'><a href='#mdb'>Mongo DB</a></div>
        <div className='child'><a href='#expjs'>Express JS</a></div>
        <div className='child'><a href='#react'>React</a></div>
        <div className='child'><a href='#nodejs'>Node JS</a></div>
        </div>
    </div>
  );
}

export default LeftBar
