import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          {/*<a href="/">Home</a>*/}
          <Link to="/">Home</Link>
        </li>
        <li>
          {/*<a href="/about">About</a>*/}
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
