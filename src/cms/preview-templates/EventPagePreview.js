import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

const EventPagePreview = ({ entry }) => {
  const {
    title,
    artist,
    venue,
    city,
    date,
    eventTime,
    guests,
    url,
    group,
    image,
  } = entry.get('data').toJSON();
  const slug = `${format(parseISO(date), 'y-MM-dd')}${
    artist ? '-' + artist : ''
  }${venue ? '-' + venue : ''}`;
  const link =
    url || `/events/${slug.toLowerCase().replaceAll(/[^a-z0-9]/g, '-')}`;

  return (
    <>
      {image && <img src={image} alt={`${title} poster`} />}

      <h2 className="is-size-3">{title}</h2>

      <p className="mb-2">
        WHO: {artist}
        <br />
        WHERE: {venue}
        {!!city && ` (${city})`}
        <br />
        WHEN: {format(parseISO(date), 'MMMM d, y')}
        {!!eventTime && eventTime !== 'none' && ` ${eventTime}`}
        <br />
        {!!guests && `WITH: ${guests}`}
      </p>

      <p className="mb-1">
        <code>
          <a href={link} target="_blank" rel="noreferrer">
            {link}
          </a>
        </code>
      </p>
      <p>
        <span className="tag is-primary">{group}</span>
      </p>
    </>
  );
};

EventPagePreview.propTypes = {
  entry: PropTypes.shape({
    get: PropTypes.func,
  }),
};

export default EventPagePreview;
