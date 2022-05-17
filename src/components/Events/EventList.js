import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import EventItem from './EventItem';
// import Songkick from '../shared/Songkick';
// import { useSongkick } from '../../hooks/useSongkick';

const EventList = ({ data }) => {
  // const songkickCurrent = useSongkick('1158046', 'current');
  // const songkickPast = useSongkick('1158046', 'past', 60);

  // Combine locally-created events with Songkick events
  const { edges } = data.allMarkdownRemark;
  const localPosts = edges.map(({ node }, index) => {
    const {
      fields: { time },
      frontmatter: {
        artist,
        city,
        date,
        monthYear,
        eventStartDate,
        eventTime,
        guests,
        venue,
        url,
      },
    } = node;

    return {
      id: index,
      artist,
      city,
      date,
      monthYear,
      eventStartDate,
      time: eventTime || time,
      guests,
      venue,
      url,
    };
  });

  const posts = localPosts;
  // .concat(songkickPast.data)
  // .concat(songkickCurrent.data);
  posts.sort((a, b) => (a.date > b.date ? 1 : a.date < b.date ? -1 : 0));

  return (
    <>
      {posts.length > 0 &&
        posts.map((post, index, a) => (
          <EventItem
            key={post.id}
            data={post}
            previous={index > 0 ? a[index - 1] : undefined}
          />
        ))}
      {posts.length === 0 && <p>No events currently scheduled</p>}

      {/* <Songkick loading={songkickPast.loading || songkickCurrent.loading} /> */}
    </>
  );
};

EventList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

const StaticQueryRender = () => (
  <StaticQuery
    query={graphql`
      query eventList {
        allMarkdownRemark(
          filter: {
            frontmatter: { templateKey: { eq: "event" } }
            last60Days: { eq: true }
          }
          sort: { fields: frontmatter___date, order: DESC }
        ) {
          edges {
            node {
              fields {
                time
              }
              frontmatter {
                artist
                city
                date
                monthYear: date(formatString: "MMMM YYYY")
                eventStartDate: date(formatString: "dddd, MMMM D")
                guests
                venue
                eventTime
                url
              }
            }
          }
        }
      }
    `}
    render={(data) => <EventList data={data} />}
  />
);

export default StaticQueryRender;
