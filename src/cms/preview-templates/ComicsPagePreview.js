import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const ComicsPagePreview = ({ entry }) => {
  const { title, comics } = entry.get('data').toJSON()

  return (
    <>
      <h1 className="is-size-3 has-text-weight-semibold">{title}</h1>

      { comics.map(({ id, title, cover, pages }) => {
        return (
          <Fragment key={id}>
            <h2 className="is-size-4">{ title }</h2>

            <img src={cover} alt={title} />

            { pages.map(({image, name}) => {
              return (
                <Fragment key={image}>
                  <h3 className="is-size-5 has-text-weight-light">{name}</h3>
                  <img src={image} alt={name} />
                </Fragment>
              )
            })}
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
