const path = require(`path`)

// Create a slug for each recipe and set it as a field on the node.
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `node__gatsby_md_post_markdown_post`) {
    // TODO - Slugify - date plus slug
    // TODO - Support path aliases
    const slug = `/posts/${node.drupal_internal__nid}/`
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
// query for events and create pages
exports.createPages = async ({ actions, graphql, reporter }) => {
  const basePath = "/"
  actions.createPage({
    path: basePath,
    component: require.resolve("./src/templates/DrupalMarkdownPosts.js"),
  })

  // TODO - Do we need the ID below?
  const result = await graphql(`
    query {
      allNodeGatsbyMdPostMarkdownPost(sort: { fields: created, order: ASC }) {
        nodes {
          drupal_internal__nid
          fields {
            slug
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panic("error loading Drupal markdown posts", result.errors)
    return
  }
  const posts = result.data.allNodeGatsbyMdPostMarkdownPost.nodes
  posts.forEach(post => {
    const slug = post.fields.slug
    actions.createPage({
      path: slug,
      component: require.resolve("./src/templates/DrupalMarkdownPost.js"),
      context: {
        postID: post.drupal_internal__nid,
      },
    })
  })
}