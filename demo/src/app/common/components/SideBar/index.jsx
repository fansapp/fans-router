import React from 'react';
import { Link } from '../../../../../../dist';

import './styles.scss';


const SideBar = () => (
  <div className="SideBar">
    <div className="SideBar__logo">FANS Router Example</div>
    <div className="SideBar__navigation">
      <ul>
        <li className="SideBar__link"><Link to="/">Home</Link></li>
        <li className="SideBar__link"><Link to="/posts">Posts</Link></li>
        <li className="SideBar__link"><Link to="/login">Login</Link></li>
        <li className="SideBar__link"><Link to="/secret">Secret</Link></li>
      </ul>
    </div>
  </div>
);

export default SideBar;
