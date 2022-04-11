import React, { useEffect } from 'react'
import useSplash from "../hooks/useSplash"
import usePrevious from "../hooks/usePrevious"

export const IndexPageTemplate = () => {
    const splash = useSplash()
    const prevSplash = usePrevious(splash)
    const mql = window.matchMedia('screen and (max-width: 767px)')

    useEffect(() => {
        if (!prevSplash) {
        if (mql.matches) {
            document.querySelector('#container.splash').style.backgroundImage = `url(${splash.small})`
        } else {
            document.querySelector('#container.splash').style.backgroundImage = `url(${splash.large})`
        }
        }
    }, [ prevSplash, splash, mql.matches ]);  

    return (
        <div></div>
    )
}