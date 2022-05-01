const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const remark = require("remark");
const remarkHTML = require("remark-html");
const format = require("date-fns/format")

const pagePathFromSlug = ({ fields, frontmatter }) => {
  if (frontmatter.templateKey !== "event") return fields.slug;

  const pagePathArray = fields.slug.substring(0, fields.slug.length-1).split('/');
  const pageSlug = pagePathArray.pop();
  pagePathArray.push(frontmatter.date.substring(0,10) + pageSlug.substring(10));

  return pagePathArray.join('/') + '/';
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              date
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((edge) => {
      const id = edge.node.id

      if (edge.node.frontmatter.templateKey) {
        createPage({
          path: pagePathFromSlug(edge.node),
          component: path.resolve(
            `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
          ),
          // additional data can be passed via context
          context: {
            id,
          },
        })
      }

    })
  })
}

exports.onCreateNode = ({ node, actions, getNode, getNodes }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }

  const fm = node.frontmatter;
  if (fm && fm.content) {
    const contentList = fm.content;
  
    if (contentList) {
      const value = contentList.map(content =>
         remark()
        .use(remarkHTML)
        .processSync(content.body)
        .toString()
      )
  
      createNodeField({
        name: `contentList`,
        node,
        value
      });
    }
  }

  if (fm && fm.templateKey === "event") {
    if (!fm.title) {
      createNodeField({
        name: `title`,
        node,
        value: `${fm.artist}, ${fm.venue}`
      });
    }

    if (!fm.eventTime) {
      const value = format(new Date(fm.date.substring(0, fm.date.length - 1)), 'h:mm bbb')

      createNodeField({
        name: `time`,
        node,
        value
      });
    }
  }

  if (fm && ["animation-order", "art-design-order", "comics-order"].includes(fm.utility)) {
    const items = fm.items;

    items.forEach((item, index) => {
      const orderedNode = getNodes().find(
        node =>
          node.internal.type === `MarkdownRemark` &&
          node.frontmatter.id === item.item
      )

      if (orderedNode) {
        createNodeField({
          node: orderedNode,
          name: `order`,
          value: index,
        })
      }
    });
  }
}

// https://github.com/gatsbyjs/gatsby/issues/17159
exports.createSchemaCustomization = ({ actions, schema, getNode }) => {
  actions.createTypes([
    schema.buildObjectType({
      name: 'MarkdownRemark',
      interfaces: ['Node'],
      fields: {
        // https://stackoverflow.com/a/31665235/7960120
        last30Days: {
          type: 'Boolean!',
          resolve: (s) =>
            new Date(s.frontmatter.date) >=
            new Date(new Date().setDate(new Date().getDate() - 30)),
        },
        last45Days: {
          type: 'Boolean!',
          resolve: (s) =>
            new Date(s.frontmatter.date) >=
            new Date(new Date().setDate(new Date().getDate() - 45)),
        },
        last60Days: {
          type: 'Boolean!',
          resolve: (s) =>
            new Date(s.frontmatter.date) >=
            new Date(new Date().setDate(new Date().getDate() - 60)),
        },
      },
    }),
    schema.buildObjectType({
      name: 'MarkdownRemarkFrontmatter',
      interfaces: ['Node'],
      fields: {
        image: "String",
      },
    }),
    schema.buildObjectType({
      name: 'MarkdownRemarkFields',
      interfaces: ['Node'],
      fields: {
        time: "String",
      },
    }),
    schema.buildObjectType({
      name: 'MarkdownRemarkFrontmatterItems',
      interfaces: ['Node'],
      fields: {
        image: "String",
        url: "String",
      },
    }),
  ])
}