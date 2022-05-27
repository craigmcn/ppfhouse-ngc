import React from 'react';
import { Link } from 'gatsby';

const Sidebar = (
  <div className="sidebar">
    <div className="wrapper">
      <div className="music-menu">
        <ul>
          <li>
            <Link to="/wpbe/news-shows" activeClassName="active">
              news
            </Link>
          </li>
          <li>
            <Link to="/wpbe/about" activeClassName="active">
              about
            </Link>
          </li>
          <li>
            <Link to="/wpbe/music" activeClassName="active">
              music
            </Link>
          </li>
          <li>
            <Link to="/wpbe/epk-stage-plot" activeClassName="active">
              epk
            </Link>
          </li>
          <li>
            <Link to="/wpbe/visuals" activeClassName="active">
              visuals
            </Link>
          </li>
          <li>
            <a
              href="https://facebook.com/WorstPopBandEver"
              target="_blank"
              rel="noreferrer"
            >
              FB
            </a>
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
