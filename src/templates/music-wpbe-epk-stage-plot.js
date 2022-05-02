import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import Sidebar from '../components/Wpbe/Sidebar';
import PageHeader from '../components/Wpbe/PageHeader';
import Modal from '../components/Modal/Modal';

const WpbeEpkStagePlotPage = ({ data }) => {
  const { markdownRemark: music } = data;
  const { title } = music.frontmatter;

  const [open, setOpen] = useState(false);

  const handleClick = useCallback((e) => {
    e.preventDefault();
    setOpen(true);
  }, []);

  return (
    <Layout
      className="music wpbe has-sidebar no-columns"
      pageHeader={PageHeader}
      sidebar={Sidebar}
    >
      <Helmet>
        <title>The Worst Pop Band Ever :: Music :: PPF House</title>
        <meta
          name="description"
          content="PPF House: PPF House Music: The Worst Pop Band Ever"
        />
      </Helmet>

      <h2>{title.toLowerCase()}</h2>

      <p className="wpbe-cta">
        <a
          href="http://cdn.ppfhouse.com/wpbe/wpbe-epk.2018.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Electronic press kit (EPK)
        </a>
      </p>

      <h3 style={{ marginTop: '1.5em' }}>Stage plot</h3>

      <p>
        <a
          className="wpbe-zoom"
          title="WPBE stage plot"
          href="https://res.cloudinary.com/dunew51zn/image/upload/v1617059321/music/wpbe-stage-plot_cvxvjb.jpg"
          onClick={handleClick}
        >
          <img
            src="https://res.cloudinary.com/dunew51zn/image/upload/v1617059321/music/wpbe-stage-plot-t_o3f52l.jpg"
            alt="WPBE stage plot"
          />
        </a>
      </p>

      <Modal
        handleClose={() => setOpen(false)}
        isOpen={open}
        className="lightbox"
      >
        <img
          src="https://res.cloudinary.com/dunew51zn/image/upload/v1617059321/music/wpbe-stage-plot_cvxvjb.jpg"
          alt="WPBE stage plot"
        />
      </Modal>
    </Layout>
  );
};

WpbeEpkStagePlotPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default WpbeEpkStagePlotPage;

export const wpbeEpkStagePlotPageQuery = graphql`
  query WpbeEpkStagePlotPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;
