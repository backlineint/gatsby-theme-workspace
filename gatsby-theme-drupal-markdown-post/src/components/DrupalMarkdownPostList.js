import React from "react"
import { Link } from "gatsby"
const DrupalMarkdownPostList = ({ posts }) => (
  <>
    <h1>Drupal Markdown Posts</h1>
    <ul>
      {posts.map(post => (
        <li key={post.drupal_internal__nid}>
          <strong>
            <Link to={post.fields.slug}>{post.title}</Link>
          </strong>
        </li>
      ))}
    </ul>
  </>
)

export default DrupalMarkdownPostList