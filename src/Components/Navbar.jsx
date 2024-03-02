import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component{
  render(){
    return (
      <>
        <div className="navbar bg-base-300">
          <div className="navbar-start">
            <a className="text-xl btn btn-ghost" href='/'>作品選集</a>
            <div className="hidden lg:flex">
              <ul className="px-1 menu menu-horizontal">
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/about" >About</Link></li>
                <li><Link to="/projects" >Projects</Link></li>
                <li><Link to="/contact" >Contact</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS Navbar component" src="./src/assets/avatar.png" />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><div className="justify-start">Jonahlee Xyrkcysz Fabula</div></li>
                <li><a href="https://www.linkedin.com/in/xyrkfabula/">Linkedin</a></li>
              </ul>
            </div>
          </div>
        </div>
      </>
      
    );
  }
}