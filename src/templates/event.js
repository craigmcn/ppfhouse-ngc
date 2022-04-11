import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Helmet } from 'react-helmet'

const EventTemplate = ({ title, fieldsTitle, artist, venue, city, date, time, guests, url }) => {

  return (
    <Fragment>
      <h2>{ title || fieldsTitle }</h2>

      <p className="calendar-item-content">
        WHO: { artist }<br />
        WHERE: { venue }{ !!city && ` (${ city })` }<br />
        WHEN: { date }{ (!!time && time !== "none") && ` ${ time }` }<br />
        { !!guests && `WITH: ${ guests }` }
      </p>
      <p><a href={ url } target="_blank" rel="noreferrer">{ url }</a></p>
    </Fragment>
  )
}

EventTemplate.propTypes = {
  title: PropTypes.string,
  fieldsTitle: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  guests: PropTypes.string,
  url: PropTypes.string,
}

const Event = ({ data }) => {
  const { markdownRemark: event } = data

  return (
    <Layout className="event has-sidebar">
      <Helmet>
        <title>{ event.frontmatter.title || event.fields.title } :: Event :: PPF House</title>
        <meta name="description" content={ `PPF House Event: ${event.frontmatter.title || event.fields.title}` } />
      </Helmet>
      <EventTemplate
        title={ event.frontmatter.title }
        fieldsTitle={ event.fields.title }
        artist={ event.frontmatter.artist }
        venue={ event.frontmatter.venue }
        city={ event.frontmatter.city }
        date={ event.frontmatter.date }
        time={ event.frontmatter.eventTime }
        guests={ event.frontmatter.guests }
        url={ event.frontmatter.url }
      />
    </Layout>
  )
}

Event.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Event

export const contactQuery = graphql`
  query Event($id: String!) {
    markdownRemark(id: { eq: $id }) {
      fields {
        title
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
      }
    }
  }
`
