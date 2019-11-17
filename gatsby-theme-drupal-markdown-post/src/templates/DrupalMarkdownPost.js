import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import DrupalMarkdownPost from "../components/DrupalMarkdownPost"

export const query = graphql`
  query($postID: Int!) {
    nodeGatsbyMdPostMarkdownPost(drupal_internal__nid: { eq: $postID }) {
      drupal_internal__nid
      title
      body {
        processed
      }
      fields {
        markdownBody {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`

const DrupalMarkdownPostTemplate = ({ data: { nodeGatsbyMdPostMarkdownPost } }) => (
  <Layout>
    <DrupalMarkdownPost {...nodeGatsbyMdPostMarkdownPost} />
  </Layout>
)

export default DrupalMarkdownPostTemplate