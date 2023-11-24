import React, { Fragment, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { getLightboxType } from '../utilities';
import SharedHead from '../components/shared/Head';
import Layout from '../components/Layout';
import { HowieSidebar as Sidebar } from '../components/shared/Sidebars';
import ComicsPageHeader from '../components/ComicsPageHeader';
import Lightbox from '../components/Lightbox/Lightbox';

const ComicsPageTemplate = ({ comics }) => {
  const validComics = comics.filter(
    (comic) => comic.title && comic.cover && comic.pages,
  );
  const galleries = validComics.reduce((r, c, i) => {
    r[c.id] = c.pages.map((page) => ({
      id: `${page.name}-${i}`,
      src: page.image,
      type: getLightboxType(page.image),
    }));
    return r;
  }, {});

  const [gallery, setGallery] = useState([]);
  const [current, setCurrent] = useState({});
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(
    (e) => {
      e.preventDefault();
      const galleryId = e.currentTarget.dataset.id;
      setGallery(galleries[galleryId]);
      setCurrent(galleries[galleryId][0]);
      setOpen(true);
    },
    [galleries],
  );

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      {validComics.map((comic) => {
        return (
          <Fragment key={comic.id}>
            <h2>{comic.title.toLowerCase()}</h2>
            <p>
              <a
                data-id={comic.id}
                href={comic.title.toLowerCase().replaceAll(/[^a-z0-9]/g, '-')}
                title={comic.title}
                onClick={handleClick}
              >
                <img src={comic.cover} alt={comic.title} />
              </a>
            </p>
          </Fragment>
        );
      })}

      <Lightbox
        gallery={gallery}
        current={current}
        open={open}
        onClose={handleClose}
      />
    </>
  );
};

ComicsPageTemplate.propTypes = {
  comics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      cover: PropTypes.string,
      pages: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          image: PropTypes.string,
        }),
      ),
    }),
  ),
};

const ComicsPage = ({ data }) => {
  const { comics } = data?.markdownRemark?.frontmatter;

  return (
    <Layout
      className="has-sidebar"
      pageHeader={ComicsPageHeader}
      sidebar={Sidebar}
    >
      <ComicsPageTemplate comics={comics} />
    </Layout>
  );
};

ComicsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ComicsPage;

export const comicsQuery = graphql`
  query Comics($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        comics {
          id
          cover
          title
          pages {
            name
            image
          }
        }
      }
    }
  }
`;

export const Head = () => (
  <SharedHead title="Comics" description="Comics by Howie Shia" />
);
