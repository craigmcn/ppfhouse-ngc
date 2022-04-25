import React from 'react'
import PropTypes from 'prop-types'

const WpbeVisualsPagePreview = ({ entry }) => {
  const { title, content } = entry.get('data').toJSON()

  const column1 = content.slice(0, Math.ceil(content.length / 2))
  const column2 = content.slice(Math.ceil(content.length / 2))

  return (
    <>
      <h2 className="is-size-3">{ title?.toLowerCase() }</h2>

      <div className='columns'>
        <div className='column'>
          { column1.map((item) => {
            return (
              <article className="box" key={ item.id } style={{ maxWidth: '32rem'}}>
                <h3 className="is-size-5">{ item.visuals }</h3>
                <img src={ item.thumbnail } alt={ item.visuals } />
                <p style={{ wordBreak: 'break-word'}}><a href={ item.url }>{ item.url }</a></p>
              </article>
            )
          }) }
        </div>

        <div className='column'>
          { column2.map((item) => {
            return (
              <article className="box" key={ item.id } style={{ maxWidth: '32rem'}}>
                <h3 className="is-size-5">{ item.visuals }</h3>
                <img src={ item.thumbnail } alt={ item.visuals } />
                <p style={{ wordBreak: 'break-word'}}><a href={ item.url }>{ item.url }</a></p>
              </article>
            )
          }) }
        </div>
      </div>
    </>
  )
}

WpbeVisualsPagePreview.propTypes = {
  entry: PropTypes.shape({
    get: PropTypes.func,
  }),
}

export default WpbeVisualsPagePreview
