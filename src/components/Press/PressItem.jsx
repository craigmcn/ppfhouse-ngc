import React from 'react'
import PropTypes from 'prop-types'
import { md2Html } from '../../utilities'
import { HTMLContent } from '../../components/Content'

const PressItem = ({ body, source }) => {
  return (
    <div className="content">
      <blockquote>
        <HTMLContent content={ md2Html(body) } />
        <cite>{ source }</cite>
      </blockquote>
    </div>
  )
}

PressItem.defaultProps = {
  item: {},
}

PressItem.propTypes = {
  item: PropTypes.shape({
    body: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
  }),
}

export default PressItem