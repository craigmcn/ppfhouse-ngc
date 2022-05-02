import { useStaticQuery, graphql } from 'gatsby';

const useSplash = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query SplashLarge {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "splash" } } }
        ) {
          edges {
            node {
              frontmatter {
                large
                small
              }
            }
          }
        }
      }
    `
  );

  const random = Math.floor(Math.random() * allMarkdownRemark.edges.length);
  const edge = allMarkdownRemark.edges[random];
  return {
    large: edge.node.frontmatter.large,
    small: edge.node.frontmatter.small,
  };
};

export default useSplash;
