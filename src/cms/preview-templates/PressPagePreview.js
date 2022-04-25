import React from 'react'
import PropTypes from 'prop-types'
import { md2Html } from '../../utilities'
import { HTMLContent } from '../../components/Content'
import PressList from '../../components/Press/PressList'

const PressPagePreview = ({ entry }) => {
  const { title, body, press, pressSections } = entry.get('data').toJSON()

  return (
    <>
      <h2 className="is-size-3">{ title?.toLowerCase() }</h2>
      <div className="content">
        <HTMLContent content={ md2Html(body) } />
      </div>

      <PressList title={ press } items={ pressSections } preview={ true } />
    </>
  )
}

PressPagePreview.propTypes = {
  entry: PropTypes.shape({
    get: PropTypes.func,
  }),
}

export default PressPagePreview
