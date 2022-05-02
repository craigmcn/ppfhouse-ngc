import React from 'react';
import { Link } from 'gatsby';
import * as styles from '../styles/wpbe-splash.module.css';

const WpbeStaticIndexPage = () => {
  return (
    <div className={styles.container}>
      <h1>WPBE</h1>

      <Link to="/wpbe/news-shows">
        <img
          src="https://res.cloudinary.com/dunew51zn/image/upload/v1617059321/music/wpbe-blackout-bulb-logo_vrqova.jpg"
          alt="lightbulb logo"
          style={{ display: 'inline-block' }}
        />
      </Link>

      <h2>Blackout</h2>

      <div className={styles.nav}>
        <div className={styles.navItem}>
          <Link to="/wpbe/news-shows">Enter Site</Link>
        </div>
        <div className={`${styles.navItem} ${styles.navItemCenter}`}>
          <span>Download</span>
          <div className={styles.navItemSub}>
            <strong>
              <a href="https://wpbe.bandcamp.com/">Bandcamp</a>
            </strong>
            <strong>
              <a href="https://bandcamp.com/yum">Redeem</a>
            </strong>
            <strong>
              <a href="https://itunes.apple.com/ca/artist/the-worst-pop-band-ever/id279748483">
                iTunes
              </a>
            </strong>
          </div>
        </div>
        <div className={styles.navItem}>
          <a href="https://www.facebook.com/WorstPopBandEver">Facebook</a>
        </div>
      </div>
    </div>
  );
};

export default WpbeStaticIndexPage;
