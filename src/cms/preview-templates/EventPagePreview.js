import React from 'react'
import PropTypes from 'prop-types'
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'

const EventPagePreview = ({ entry }) => {
  console.log(entry.get('data').toJSON())
  const { title, artist, venue, city, date, eventTime, guests, url, group } = entry.get('data').toJSON()

  return (
    <>
      <h2 className="is-size-3">{ title }</h2>

      <p className="mb-2">
        WHO: { artist }<br />
        WHERE: { venue }{ !!city && ` (${ city })` }<br />
        WHEN: {format(parseISO(date), 'MMMM d, y') }{ (!!eventTime && eventTime !== "none") && ` ${ eventTime }` }<br />
        { !!guests && `WITH: ${ guests }` }
      </p>
      
      <p className="mb-1"><code><a href={ url } target="_blank" rel="noreferrer">{ url }</a></code></p>
      <p><span className="tag is-primary">{ group }</span></p>
    </>
  )
}

EventPagePreview.propTypes = {
  entry: PropTypes.shape({
    get: PropTypes.func,
  }),
}

export default EventPagePreview
