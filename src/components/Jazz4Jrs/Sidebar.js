import React from 'react';
import { Link } from 'gatsby';

const Sidebar = (
  <div id="sidebar">
    <div className="wrapper">
      <div id="music-menu" className="group">
        <ul>
          <li>
            <Link to="/jazz-4-jrs" activeClassName="active">
              overview
            </Link>
          </li>
          <li>
            <Link to="/jazz-4-jrs/testimonials" activeClassName="active">
              testimonials
            </Link>
          </li>
          <li>
            <Link to="/jazz-4-jrs/educational-content" activeClassName="active">
              curriculum
            </Link>
          </li>
          <li>
            <Link to="/jazz-4-jrs/the-original-video" activeClassName="active">
              video
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
