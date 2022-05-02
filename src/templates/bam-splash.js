import React, { useEffect } from 'react';
import usePrevious from '../hooks/usePrevious';

import Layout from '../components/Layout';

const BamSplashTemplate = () => {
  const bamSplashImages = [
    'https://res.cloudinary.com/dunew51zn/image/upload/v1617059121/bam/atlas_grvhwz.jpg',
    'https://res.cloudinary.com/dunew51zn/image/upload/v1617059121/bam/bench_jlxyyo.jpg',
    'https://res.cloudinary.com/dunew51zn/image/upload/v1617059121/bam/the-fight_b4tmfv.jpg',
  ];

  const random = Math.floor(Math.random() * bamSplashImages.length);
  const splash = bamSplashImages[random];
  const prevSplash = usePrevious(splash);

  useEffect(() => {
    if (!prevSplash) {
      document.querySelector(
        '#container.bam-splash'
      ).style.backgroundImage = `url(${splash})`;
    }
  }, [prevSplash, splash]);

  return (
    <div
      style={{
        position: 'relative',
        zIndex: '100',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <a href="/animation/#bam">
        <img
          src="https://res.cloudinary.com/dunew51zn/image/upload/v1617059120/bam/button-240_yr76p9.jpg"
          alt="BAM. Click here to watch movie (5 minutes)"
        />
      </a>
    </div>
  );
};

const BamSplash = () => {
  return (
    <Layout className="bam-splash no-columns">
      <BamSplashTemplate />
    </Layout>
  );
};

export default BamSplash;
