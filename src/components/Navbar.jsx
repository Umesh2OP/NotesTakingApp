import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full flex flex-row gap-5 text-red-500 bg-radial bg-black items-center justify-center py-4  font-bold text-xl z-50 shadow-md">
      <NavLink to="/" className="hover:underline">
        Home
      </NavLink>
      <NavLink to="/pastes" className="hover:underline">
        Pastes
      </NavLink>
    </div>
  );
};

export default Navbar;
