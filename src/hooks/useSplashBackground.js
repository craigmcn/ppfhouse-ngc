import { useStaticQuery, graphql } from 'gatsby';

const useSplashBackground = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query SplashBackground {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "splash" } } }
        ) {
          edges {
            node {
              frontmatter {
                background
              }
            }
          }
        }
      }
    `
  );

  const edges = allMarkdownRemark.edges;
  const random = Math.floor(Math.random() * edges.length);
  return edges[random].node.frontmatter.background;
};

export default useSplashBackground;
