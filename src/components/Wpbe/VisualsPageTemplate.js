import React, { Fragment, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { getLightboxType, getYoutubeUrl, md2Html } from '../../utilities';
import VisualsItem from './VisualsItem';
import Lightbox from '../Lightbox/Lightbox';

export const WpbeVisualsPageTemplate = ({ items }) => {
  const gallery = items.map((item) => ({
    id: item.id,
    title: item.title,
    src: item.url ? getYoutubeUrl(item.url) : item.image,
    description: md2Html(item.body),
    thumbnail: item.thumbnail,
    type: getLightboxType(item.url || item.image),
  }));

  const column1 = items.slice(0, Math.ceil(items.length / 2));
  const column2 = items.slice(Math.ceil(items.length / 2));

  const [current, setCurrent] = useState({});
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(
    (id) => {
      setCurrent(gallery.find((item) => item.id === id));
      setOpen(true);
    },
    [gallery],
  );

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div className="columns-2">
      <div className="column">
        <div className="wrapper">
          {column1.map((item) => {
            return (
              <Fragment key={item.id}>
                <VisualsItem
                  id={item.id}
                  url={item.url || item.image}
                  items={item.body}
                  thumbnail={item.thumbnail}
                  title={item.title}
                  onClick={handleClick}
                  type={getLightboxType(item.url || item.image)}
                />
              </Fragment>
            );
          })}
        </div>
      </div>

      <div className="column">
        <div className="wrapper">
          {column2.map((item) => {
            return (
              <Fragment key={item.id}>
                <VisualsItem
                  id={item.id}
                  url={item.url || item.image}
                  items={item.body}
                  thumbnail={item.thumbnail}
                  title={item.title}
                  onClick={handleClick}
                  type={getLightboxType(item.url || item.image)}
                />
              </Fragment>
            );
          })}
        </div>
      </div>

      <Lightbox
        gallery={gallery}
        current={current}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
};

WpbeVisualsPageTemplate.propTypes = {
  items: PropTypes.array,
};
