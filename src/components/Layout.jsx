import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { ChildrenPropType } from '../utilities/propTypes';
import useSplash from '../hooks/useSplash';
import useSplashBackground from '../hooks/useSplashBackground';
import useBamSplash from '../hooks/useBamSplash';
import usePrevious from '../hooks/usePrevious';

import '../styles/base.css';
import '../styles/layout.css';
import '../styles/utilities.css';
import * as layout from '../styles/layout.module.scss';

const Layout = ({
  children,
  className,
  hasBackground,
  isSplash,
  isBamSplash,
}) => {
  const containerRef = useRef(null);
  const background = hasBackground
    ? useSplashBackground()
    : isSplash
      ? useSplash()
      : isBamSplash
        ? useBamSplash()
        : null;
  const prevBackground = usePrevious(background);

  useEffect(() => {
    if (prevBackground === undefined && background !== null) {
      containerRef.current.style.backgroundImage = `url(${background})`;
    }
  }, [prevBackground, background]);

  useEffect(() => {
    document.documentElement.className = 'js';
  }, []);

  return (
    <>
      <a className="sr-only" href="#content">
        Skip to main content
      </a>

      <div
        className={cx(
          layout.container,
          { [layout.splash]: isSplash || isBamSplash },
          className,
        )}
        ref={containerRef}
      >
        <div id="content" className={cx('content', layout.content)}>
          <div className="wrapper">{children}</div>
        </div>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: ChildrenPropType,
  className: PropTypes.string,
  hasBackground: PropTypes.bool,
  isSplash: PropTypes.bool,
  isBamSplash: PropTypes.bool,
};

export default Layout;
