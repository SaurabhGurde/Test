import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <form className="form-inline">
        <Link to="login" className="btn btn-outline-success bg-success text-white mx-5 " type="button">Log in</Link>
        <Link to="signup" className="btn btn-outline-secondary bg-success text-white" type="button">Sign up</Link>
      </form>
    </nav>
  )
}

export default Navbar