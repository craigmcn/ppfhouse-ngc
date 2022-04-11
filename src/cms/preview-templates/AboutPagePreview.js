import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { md2Html } from '../../utilities'
import { HTMLContent } from '../../components/Content'

const AboutPagePreview = ({ entry }) => {
  const data = entry.get('data').toJSON()

  return (
    <div className="columns">
      <div className="column">
        <h2 className="is-size-3">PPF House</h2>
        <HTMLContent content={ md2Html(data.body) } />
      </div>

      <div className="column">
        { data.content.map((content, index) => {
          return (
            <Fragment key={ index }>
              <h2 className="is-size-3">{ content.heading }</h2>
              <HTMLContent content={ md2Html(content.body) } />
            </Fragment>
          )
        }) }
      </div>
    </div>
  )
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    get: PropTypes.func,
  }),
}

export default AboutPagePreview
