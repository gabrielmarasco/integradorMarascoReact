import React from 'react';
import { Link } from 'react-router-dom';

const Header = function () {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
