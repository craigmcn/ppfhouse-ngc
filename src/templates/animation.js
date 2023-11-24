import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { getLightboxType, md2Html, removeHashFromUrl } from '../utilities';
import SharedHead from '../components/shared/Head';
import Layout from '../components/Layout';
import { HowieSidebar as Sidebar } from '../components/shared/Sidebars';
import AnimationPageHeader from '../components/Animation/PageHeader';
import Lightbox from '../components/Lightbox/Lightbox';
import AnimationItem from '../components/Animation/AnimationItem';

const AnimationPageTemplate = ({ items }) => {
  const validAnimations = items.filter(
    (item) => item.title && item.thumbnail && item.url,
  );

  const demo = validAnimations.filter((item) => item.type === 'demo');
  const independent = validAnimations.filter(
    (item) => item.type === 'independent',
  );
  const commercial = validAnimations.filter(
    (item) => item.type === 'commercial',
  );

  const gallery = validAnimations.map((item) => ({
    id: item.id,
    title: item.title,
    src: item.url,
    content: item.body,
    description: md2Html(item.body),
    thumbnail: item.thumbnail,
    type: getLightboxType(item.url),
  }));

  const [current, setCurrent] = useState({});
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(
    (id) => {
      setCurrent(gallery.find((item) => item.id === id));
      setOpen(true);
    },
    [gallery],
  );

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    const el = document.querySelector('a[data-title=BAM]');
    if (window.location.hash === '#bam' && !!el && !open) {
      removeHashFromUrl();
      setCurrent(gallery.find((item) => item.id === el.dataset.id));
      setOpen(true);
    }
  }, [open, gallery]);

  return (
    <>
      <div className="columns-3">
        <div className="column">
          <div className="wrapper">
            <h2 className="centered">demo reel</h2>
            {demo.map((item) => {
              return (
                <AnimationItem
                  key={item.id}
                  id={item.id}
                  url={item.url}
                  content={item.body}
                  thumbnail={item.thumbnail}
                  title={item.title}
                  onClick={handleClick}
                />
              );
            })}
          </div>
        </div>

        <div className="column">
          <div className="wrapper">
            <h2 className="centered">shorts &amp; videos</h2>
            {independent.map((item) => {
              return (
                <AnimationItem
                  key={item.id}
                  id={item.id}
                  url={item.url}
                  content={item.body}
                  thumbnail={item.thumbnail}
                  title={item.title}
                  onClick={handleClick}
                />
              );
            })}
          </div>
        </div>

        <div className="column">
          <div className="wrapper">
            <h2 className="centered">TV &amp; advertising</h2>
            {commercial.map((item) => {
              return (
                <AnimationItem
                  key={item.id}
                  id={item.id}
                  url={item.url}
                  content={item.body}
                  thumbnail={item.thumbnail}
                  title={item.title}
                  onClick={handleClick}
                />
              );
            })}
          </div>
        </div>
      </div>

      <Lightbox
        gallery={gallery}
        current={current}
        open={open}
        onClose={handleClose}
      />
    </>
  );
};

AnimationPageTemplate.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string,
      thumbnail: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ),
};

const Animation = ({ data }) => {
  const { items } = data?.markdownRemark?.frontmatter;

  return (
    <Layout
      className="has-sidebar has-columns"
      pageHeader={AnimationPageHeader}
      sidebar={Sidebar}
    >
      <AnimationPageTemplate items={items} />
    </Layout>
  );
};

Animation.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Animation;

export const animationQuery = graphql`
  query Animation($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        items {
          id
          title
          body
          thumbnail
          type
          url
        }
      }
    }
  }
`;

export const Head = () => (
  <SharedHead title="Animation" description="Animation portfolio" />
);
