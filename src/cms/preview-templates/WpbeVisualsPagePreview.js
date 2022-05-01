import React from 'react'
import PropTypes from 'prop-types'

const WpbeVisualsPagePreview = ({ entry }) => {
  const { title, items } = entry.get('data').toJSON()

  const column1 = items.slice(0, Math.ceil(items.length / 2))
  const column2 = items.slice(Math.ceil(items.length / 2))

  return (
    <>
      <h2 className="is-size-3">{ title?.toLowerCase() }</h2>

      <div className='columns'>
        <div className='column'>
          { column1.map((item) => {
            return (
              <article key={ item.id } style={{ maxWidth: '32rem'}}>
                <h3 className="is-size-5">{ item.title }</h3>
                <img src={ item.thumbnail } alt={ item.title } width={item.image ? '200' : '420' } />
                {item.image && <img src={ item.image } alt={ item.title } width="420" />}
                {item.url && <p style={{ wordBreak: 'break-word'}}><a href={ item.url }>{ item.url }</a></p>}
              </article>
            )
          }) }
        </div>

        <div className='column'>
          { column2.map((item) => {
            return (
              <article key={ item.id } style={{ maxWidth: '32rem'}}>
                <h3 className="is-size-5">{ item.title }</h3>
                <img src={ item.thumbnail } alt={ item.title } width={item.image ? '200' : '420' } />
                {item.image && <img src={ item.image } alt={ item.title } width="420" />}
                {item.url && <p style={{ wordBreak: 'break-word'}}><a href={ item.url }>{ item.url }</a></p>}
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
