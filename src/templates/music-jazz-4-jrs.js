import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SharedHead from '../components/shared/Head';
import Layout from '../components/Layout';
import { HTMLContent } from '../components/shared/Content';
import Sidebar from '../components/Jazz4Jrs/Sidebar';
import PageHeader from '../components/Jazz4Jrs/PageHeader';
import PressList from '../components/Press/PressList';
import Video from '../components/Video';

const MusicPageTemplate = ({ title, content, press, video }) => {
  return (
    <>
      <h2>{title.toLowerCase()}</h2>
      <HTMLContent content={content} />
      {press && <PressList items={press} />}
      {video && <Video video={video} />}
    </>
  );
};

MusicPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  press: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      pressClippings: PropTypes.arrayOf(
        PropTypes.shape({
          body: PropTypes.string.isRequired,
          source: PropTypes.string.isRequired,
        }),
      ),
    }),
  ),
  video: PropTypes.shape({
    poster: PropTypes.string,
    mp4: PropTypes.string,
    ogg: PropTypes.string,
    webm: PropTypes.string,
    text: PropTypes.string,
  }),
};

const MusicPage = ({ data }) => {
  const { markdownRemark } = data;
  const { title, pressSections, video } = markdownRemark?.frontmatter;
  const content = markdownRemark?.html;

  return (
    <Layout
      className="music jazz-4-jrs has-sidebar no-columns"
      pageHeader={PageHeader}
      sidebar={Sidebar}
    >
      <MusicPageTemplate
        title={title}
        content={content}
        press={pressSections}
        video={video}
      />
    </Layout>
  );
};

MusicPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MusicPage;

export const musicPageQuery = graphql`
  query Jazz4JrsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        pressSections {
          title
          pressClippings {
            body
            source
          }
        }
        video {
          poster
          mp4
          ogg
          webm
          text
        }
      }
      internal {
        content
      }
      html
    }
  }
`;

/* eslint-disable react/prop-types */
export const Head = ({ data }) => {
  const { markdownRemark } = data;
  const { title } = markdownRemark?.frontmatter;
  return (
    <SharedHead
      title={`${title} :: Jazz 4 Juniors :: Music`}
      description={`Music: Jazz 4 Juniors ${title}`}
    />
  );
};
/* eslint-enable react/prop-types */
