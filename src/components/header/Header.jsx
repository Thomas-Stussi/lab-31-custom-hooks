import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <>
    <h1>Rick and Morty Character List</h1>
    <Link to="/">Back to Home</Link>
  </>
);
export default Header;
