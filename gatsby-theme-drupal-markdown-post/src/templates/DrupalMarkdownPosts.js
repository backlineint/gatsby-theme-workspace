import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import DrupalMarkdownPostList from "../components/DrupalMarkdownPostList"

const DrupalMarkdownPostsTemplate = () => {
  const data = useStaticQuery(graphql`
    query {
      allNodeGatsbyMdPostMarkdownPost(sort: { fields: created, order: ASC }) {
        nodes {
          drupal_internal__nid
          title
          body {
            processed
          }
          fields {
            slug
          }
        }
      }
    }
  `)
  const posts = data.allNodeGatsbyMdPostMarkdownPost.nodes
  return (
    <Layout>
      <DrupalMarkdownPostList posts={posts} />
    </Layout>
  )
}

export default DrupalMarkdownPostsTemplate