import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink

export default class Navbar extends React.Component{
  render(){
    return (
      <>
        <div className="sticky top-0 z-50 navbar bg-base-300">
          <div className="navbar-start">
            <a className="text-xl btn btn-ghost" href='/'>作品選集</a>
            <div className="hidden lg:flex">
              <ul className="px-1 menu menu-horizontal">
                <li><NavLink to="/" exact >Home</NavLink></li>
                <li><NavLink to="/about" >About</NavLink></li>
                <li><NavLink to="/projects" >Projects</NavLink></li>
                <li><NavLink to="/contact" >Contact</NavLink></li>
              </ul>
            </div>
          </div>
          
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="Avatar" src="./src/assets/avatar.png" />
                </div>
              </div>
              <ul tabIndex={0} className="z-10 p-2 mt-3 w-52 shadow menu menu-sm dropdown-content bg-base-100 rounded-box">
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
