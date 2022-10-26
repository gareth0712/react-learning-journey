import { FC } from "react";
import { NavLink } from "react-router-dom";

import classes from "./MainHeader.module.css";

const MainHeader: FC = (): JSX.Element => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/welcome">
              Welcome
            </NavLink>
            {/* 
                1. Anchor tag
                Default behavior of anchor clears the state of current page, send requests to obtain the page details and direct to the welcome page
                <a href="/welcome">Welcome</a> 
                2. Link Component
                Link component of react-router still uses anchor tag underhood, goes to the the welcome page directly, suppresses the state clearing and does not send requests to get the page details (Prevent the browser defaults)
                <Link to="/welcome">Welcome</Link>
                3. NavLink Component
                Same as Link component but adds an active css class by allowing dev when the anchor is active (i.e. achor tag that the current page belongs to)
            */}
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
