import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <div className="Header">
 
    
    <Link to="/">Home</Link>
    <Link to="/expenses">Expenses</Link>
    <Link to="/income">Income</Link>

  </div>
);

export default Header;
