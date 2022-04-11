import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const ComicsPagePreview = ({ entry }) => {
  const data = entry.get('data').toJSON()

  return (
    <>
      <h1 className="is-size-3 has-text-weight-semibold">{data.title}</h1>
      <img src={data.cover} alt={data.title} />

      { data.pages.map((page) => {
        return (
          <Fragment key={page.image}>
            <h2 className="is-size-4 has-text-weight-light">{page.name}</h2>
            <img src={page.image} alt={page.name} />
          </Fragment>
        )
      })}
    </>
  )
}

ComicsPagePreview.propTypes = {
  entry: PropTypes.shape({
    get: PropTypes.func,
  }),
}

export default ComicsPagePreview
