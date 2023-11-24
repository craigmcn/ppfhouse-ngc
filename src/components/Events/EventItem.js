import React from 'react';
import { EventPropType } from '../../utilities/propTypes';

const EventItem = ({ data, previous }) => {
  const { artist, city, monthYear, eventStartDate, time, guests, venue, url } =
    data;

  return (
    <>
      {(!previous || (previous && previous.monthYear !== monthYear)) && (
        <h3 className="calendar">{monthYear}</h3>
      )}
      <article className="calendar-item">
        <div className="calendar-item-date">{eventStartDate}</div>
        <div className="calendar-item-content">
          <span className="calendar-item-heading">
            {!!url && (
              <a href={url} target="_blank" rel="noreferrer">
                {artist}
              </a>
            )}
            {!url && artist}
          </span>
          <br />
          WHERE: {venue}
          {!!city && ` (${city})`}
          <br />
          WHEN: {time}
          <br />
          {!!guests && `WITH: ${guests}`}
        </div>
      </article>
    </>
  );
};

EventItem.propTypes = {
  data: EventPropType,
  previous: EventPropType,
};

export default EventItem;
