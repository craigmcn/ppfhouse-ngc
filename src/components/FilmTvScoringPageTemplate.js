import React, { Fragment, useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { getLightboxType, md2Html } from '../utilities'
import AnimationItem from './Animation/AnimationItem'
import Lightbox from './Lightbox/Lightbox'

export const FilmTvScoringPageTemplate = ({ content }) => {
  const gallery = content
    .map((item) => ({
      id: item.id,
      title: item.video,
      src: item.url,
      description: md2Html(item.body),
      thumbnail: content.thumbnail,
      type: getLightboxType(item.url),
    }))

    console.table(gallery)

  const column1 = content.slice(0, Math.ceil(content.length / 2))
  const column2 = content.slice(Math.ceil(content.length / 2))

  const [current, setCurrent] = useState({})
  const [open, setOpen] = useState(false)

  const handleClick = useCallback((id) => {
    setCurrent(gallery.find(item => item.id === id))
    setOpen(true)
  }, [gallery])

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  return (
    <div className="columns-2">
      <div className="column">
          <div className="wrapper">
            { column1.map((content) => {
              return (
                <Fragment key={ content.id }>
                  <AnimationItem
                    id={ content.id }
                    url={ content.url }
                    content={ content.body }
                    thumbnail={ content.thumbnail }
                    title={ content.video }
                    onClick={ handleClick }
                  />
                </Fragment>
              )
            }) }
          </div>
      </div>

      <div className="column">
          <div className="wrapper">
            { column2.map((content) => {
              return (
                <Fragment key={ content.id }>
                  <AnimationItem
                    id={ content.id }
                    url={ content.url }
                    content={ content.body }
                    thumbnail={ content.thumbnail }
                    title={ content.video }
                    onClick={ handleClick }
                  />
                </Fragment>
              )
            }) }
          </div>
      </div>

      <Lightbox
        gallery={gallery}
        current={current}
        open={open}
        onClose={handleClose}
      />
    </div>
  )
}

FilmTvScoringPageTemplate.propTypes = {
  content: PropTypes.array,
}
