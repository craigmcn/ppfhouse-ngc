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

  if (typeof window !== 'undefined') {
    const mql = window.matchMedia('(min-width: 768px)');
    return mql.matches
      ? edge.node.frontmatter.large
      : edge.node.frontmatter.small;
  }

  return edge.node.frontmatter.small;
};

export default useSplash;
