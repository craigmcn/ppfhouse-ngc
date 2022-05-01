import React, { useCallback } from "react";

const AnimationItem = (props) => {
  const { id, url, content, thumbnail, title, onClick } = props

  const handleClick = useCallback((e) => {
    e.preventDefault()
    onClick(id)
  }, [
    id,
    onClick,
  ])

  return (
    <div className="animation-item">
      <a
        href={ url }
        title={ `${title}${content ? ': '+content : ''}` }
        onClick={ handleClick }
        data-id={ id }
        data-title={ title }
      >
        <img src={ thumbnail } alt={ title } />
      </a>
    </div>
  )
}

export default AnimationItem