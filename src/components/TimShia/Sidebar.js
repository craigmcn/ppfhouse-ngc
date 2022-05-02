import React from 'react';
import { Link } from 'gatsby';

const Sidebar = (
  <div id="sidebar">
    <div className="wrapper">
      <div id="music-menu" className="group">
        <ul>
          <li>
            <Link to="/tim-shia" activeClassName="active">
              bio
            </Link>
          </li>
          <li>
            <Link
              to="/tim-shia/live-music-and-dj-services"
              activeClassName="active"
            >
              services
            </Link>
          </li>
          <li>
            <Link to="/tim-shia/music" activeClassName="active">
              music
            </Link>
          </li>
          <li>
            <a href="mailto:tim@ppfhouse.com">contact</a>
          </li>
        </ul>

        <p className="menu-footer">
          <Link to="/music/">back to ppf music</Link>
        </p>
      </div>
    </div>
  </div>
);

export default Sidebar;
