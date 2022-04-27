import React from "react";
import styles from "../../styles/songkick.module.scss";

const Songkick = (props) => {
    const { loading } = props;

    return (
      <p className={ styles.songkick }>
        { loading && (
          <>
            <img className={ styles.songkickBadge } src="/img/sk-badge-pink.svg" alt="" />
            <span>Loading from Songkick…</span>
          </>
        ) }

        { !loading && (
          <a href="https://www.songkick.com/artists/1158046-worst-pop-band-ever" target="_blank" rel="noreferrer">
            <img className={ styles.songkickPowered } src="/img/powered-by-songkick-pink.svg" alt="powered by Songkick" />
          </a>
        ) }
      </p>
    )
}

export default Songkick