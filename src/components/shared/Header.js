import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'gatsby'

const Header = () => {

  const nav = useRef(null);
  const [ isOpen, setIsOpen ] = useState(false);

  const handleClick = e => {
		e.preventDefault()
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    nav.current.style.display = `${ isOpen ? "block" : "" }`;
  }, [ isOpen ]);

  return (
    <header className="navbar" id="top" role="banner">
    <div className="brand">
      <Link to="/">PPF House</Link>
    </div>
    <nav role="navigation">
      <ul className="nav" ref={ nav }>
        <li><Link to="/about/">about</Link></li>
        <li><Link to="/news-events/">news &amp; events</Link></li>
        <li><Link to="/animation/">animation</Link></li>
        <li><Link to="/music/">music</Link></li>
        <li><Link to="/art-design/">art &amp; design</Link></li>
        <li><Link to="/comics/">comics</Link></li>
        <li><Link to="/contact/">contact</Link></li>
      </ul>
      <button className="nav-toggle" type="button" onClick={ handleClick }> Menu</button>
    </nav>
    </header>
  )
}

export default Header
