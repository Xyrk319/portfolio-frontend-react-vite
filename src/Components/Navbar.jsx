import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component{
  render(){
    return <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">
          <Link to="/" className="hover:text-red-300">My Portfolio</Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="hover:text-red-300">Home</Link>
          <Link to="/about" className="hover:text-red-300">About</Link>
          <Link to="/projects" className="hover:text-red-300">Projects</Link>
          <Link to="/contact" className="hover:text-red-300">Contact</Link>
        </div>
      </div>
    </nav>
  }
}