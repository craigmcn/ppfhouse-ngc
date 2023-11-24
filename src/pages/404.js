import React, { useCallback } from 'react';
import { Link, navigate } from 'gatsby';
import SharedHead from '../components/shared/Head';

const Page404 = () => {
  const handleClick = useCallback((e) => {
    e.preventDefault();
    navigate(-1);
  }, []);

  return (
    <>
      <div
        style={{
          backgroundColor: 'white',
          height: '100vh',
          marginTop: '-40px',
        }}
      >
        <div style={{ margin: '40px auto', width: '640px', textAlign: 'left' }}>
          <h2
            style={{
              color: '#222',
              fontFamily: 'Georgia, Times, serif',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              paddingTop: '20px',
            }}
          >
            <img
              src="/img/ppf_control.gif"
              alt="PPF"
              width="70"
              height="98"
              style={{ display: 'inline-block', verticalAlign: 'middle' }}
            />{' '}
            &#160; PPF House
          </h2>
          <h3
            style={{
              color: '#222',
              fontFamily: 'Georgia, Times, serif',
              fontSize: '1.17rem',
              fontWeight: 'bold',
            }}
          >
            Error 404: Page not found
          </h3>
          <p style={{ fontFamily: 'Georgia, Times, serif' }}>
            The page you requested can not be found. You can{' '}
            <Link to="/" onClick={handleClick}>
              return to the previous page
            </Link>{' '}
            or <Link to="/">go back to the home page</Link>.
          </p>
        </div>
      </div>
    </>
  );
};

export default Page404;

export const Head = () => {
  return (
    <SharedHead title="404 Page not found" description="Page not found error" />
  );
};
