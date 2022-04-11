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
        title={ content }
        onClick={ handleClick }
      >
        <img src={ thumbnail } alt={ title } />
      </a>
    </div>
  )
}

export default AnimationItem