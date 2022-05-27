import React from 'react';

const BamSplashTemplate = () => {
  return (
    <div
      style={{
        position: 'relative',
        zIndex: '80',
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

export default BamSplashTemplate;
