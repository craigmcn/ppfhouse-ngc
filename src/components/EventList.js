import React, {
  Fragment,
  useState,
  useEffect
} from 'react'
import PropTypes from 'prop-types'
import {
  graphql,
  StaticQuery
} from 'gatsby'
import format from 'date-fns/format'
import subDays from 'date-fns/subDays'
import EventItem from './EventItem'
import {
  formatSongkickEvents
} from '../utilities/songkick'
import {
  usePrevious
} from '../hooks'

const EventList = ({
  data
}) => {

  const [songkick, setSongkick] = useState([])
  const [songkickPast, setSongkickPast] = useState([])
  const [songkickCurrent, setSongkickCurrent] = useState([])
  const [songkickPastLoading, setSongkickPastLoading] = useState(false)
  const [songkickCurrentLoading, setSongkickCurrentLoading] = useState(false)
  const prevSongKickPast = usePrevious(songkickPast)
  const prevSongKickCurrent = usePrevious(songkickCurrent)

  useEffect(() => {
    setSongkickPastLoading(true)
    setSongkickCurrentLoading(true)

    const minDate = format(subDays(new Date(), 60), 'y-MM-dd')

    const fetchSongkickPast = () => {
      fetch(
          `https://api.songkick.com/api/3.0/artists/1158046/gigography.json?apikey=uXVXqBVJWP5nwl9d&order=desc&min_date=${minDate}`
        )
        .then((response) => response.json())
        .then((data) => {
          const {
            resultsPage
          } = data
          if (
            resultsPage.status === 'ok' &&
            resultsPage.results.event &&
            resultsPage.results.event.length
          ) {
            const songkickEvents = formatSongkickEvents(resultsPage.results.event)
            setSongkickPast(songkickEvents)
          } else {
            if (resultsPage.error) {
              console.error(resultsPage.error.message)
            } else {
              console.warn('No past Songkick events found')
            }
          }
          setSongkickPastLoading(false)
        })
        .catch((e) => console.error(e))
    }

    const fetchSongkickCurrent = () => {
      fetch(
          `https://api.songkick.com/api/3.0/artists/1158046/calendar.json?apikey=uXVXqBVJWP5nwl9d`
        )
        .then((response) => response.json())
        .then((data) => {
          const {
            resultsPage
          } = data
          if (
            resultsPage.status === 'ok' &&
            resultsPage.results.event &&
            resultsPage.results.event.length
          ) {
            const songkickEvents = formatSongkickEvents(resultsPage.results.event)
            setSongkickCurrent(songkickEvents)
          } else {
            if (resultsPage.error) {
              console.error(resultsPage.error.message)
            } else {
              console.warn('No current Songkick events found')
            }
          }
          setSongkickCurrentLoading(false)
        })
        .catch((e) => console.error(e))
    }

    fetchSongkickPast()
    fetchSongkickCurrent()
  }, [])

  useEffect(() => {
    if (prevSongKickPast && !prevSongKickPast.length && songkickPast.length) {
      setSongkick(songkick.concat(songkickPast))
    }
    if (prevSongKickCurrent && !prevSongKickCurrent.length && songkickCurrent.length) {
      setSongkick(songkick.concat(songkickCurrent))
    }
  }, [
    prevSongKickPast,
    songkickPast,
    prevSongKickCurrent,
    songkickCurrent,
    songkick,
  ])

  // Combine locally-created events with Songkick events
  const {
    edges
  } = data.allMarkdownRemark
  const localPosts = edges.map(({
    node
  }, index) => {
    const {
      fields: {
        time,
      },
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
    } = node

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
      url
    }
  })
  const posts = [...localPosts, ...songkick]
  posts.sort((a, b) => (a.date > b.date ? 1 : a.date < b.date ? -1 : 0))

  return (
    <Fragment>
      <h2 id="events">events</h2>
      { posts.length > 0
        && posts.map((post, index, a) => (
          <EventItem
            key={post.id}
            data={post}
            previous={ index > 0 ? a[index - 1] : undefined }
          />
        ))
      }
      { posts.length === 0 && <p>No events currently scheduled</p> }
      { (songkickPastLoading || songkickCurrentLoading) &&
          <p className="text-muted">Loading from Songkick…</p>
      }
    </Fragment>
  )
}

EventList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery query={
    graphql`
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
    `
  }
  render={ data => <EventList data={data}/> }
/>)
