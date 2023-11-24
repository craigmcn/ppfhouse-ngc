import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SharedHead from '../components/shared/Head';
import Layout from '../components/Layout';

const EventTemplate = ({
  title,
  artist,
  venue,
  city,
  date,
  time,
  guests,
  url,
  image,
}) => {
  return (
    <>
      {image && <img src={image} alt={`${title} poster`} />}

      <h2>{title}</h2>

      <p className="calendar-item-content">
        WHO: {artist}
        <br />
        WHERE: {venue}
        {!!city && ` (${city})`}
        <br />
        WHEN: {date}
        {!!time && time !== 'none' && ` ${time}`}
        <br />
        {!!guests && `WITH: ${guests}`}
      </p>
      {url && (
        <p>
          <a href={url} target="_blank" rel="noreferrer">
            {url}
          </a>
        </p>
      )}
    </>
  );
};

EventTemplate.propTypes = {
  title: PropTypes.string,
  artist: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  guests: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
};

const Event = ({ data }) => {
  const { markdownRemark: event } = data;
  const { title, artist, venue, city, date, eventTime, guests, url, image } =
    event?.frontmatter;

  return (
    <Layout className="event has-sidebar">
      <EventTemplate
        title={title}
        artist={artist}
        venue={venue}
        city={city}
        date={date}
        time={eventTime}
        guests={guests}
        url={url}
        image={image}
      />
    </Layout>
  );
};

Event.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Event;

export const contactQuery = graphql`
  query Event($id: String!) {
    markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      frontmatter {
        title
        artist
        venue
        city
        date(formatString: "MMMM D, YYYY")
        eventTime
        guests
        url
        group
        image
      }
    }
  }
`;

/* eslint-disable react/prop-types */
export const Head = ({ data }) => {
  const { markdownRemark: event } = data;
  const { title } = event?.frontmatter;
  return (
    <SharedHead title={`${title} :: Event`} description={`Events: ${title}`} />
  );
};
/* eslint-enable react/prop-types */
