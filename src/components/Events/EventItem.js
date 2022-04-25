import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const EventItem = ({ data, previous }) => {
  const {
    artist,
    city,
    monthYear,
    eventStartDate,
    time,
    guests,
    venue,
    url,
  } = data

  return (
    <Fragment>
      { (!previous || (previous && previous.monthYear !== monthYear)) &&
        <h3 className="calendar">{ monthYear }</h3>
      }
      <article className="calendar-item">
        <div className="calendar-item-date">{ eventStartDate }</div>
        <div className="calendar-item-content">
          <span className="calendar-item-heading">
            { !!url &&
              <a href={ url } target="_blank" rel="noreferrer">{ artist }</a>
            }
            { !url && artist }
          </span><br />
          WHERE: { venue }{ !!city && ` (${ city })` }<br />
          WHEN: { time }<br />
          { !!guests && `WITH: ${ guests }` }
        </div>
      </article>
    </Fragment>
  )
}

EventItem.propTypes = {
  data: PropTypes.shape({
    artist: PropTypes.string.isRequired,
    city: PropTypes.string,
    date: PropTypes.string.isRequired,
    eventStartDate: PropTypes.string.isRequired,
    time: PropTypes.string,
    guests: PropTypes.string,
    venue: PropTypes.string,
    url: PropTypes.string,
  }),
}

export default EventItem
