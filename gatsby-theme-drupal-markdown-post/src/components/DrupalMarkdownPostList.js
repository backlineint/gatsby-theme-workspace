import React from "react"
import { Link } from "gatsby"
import { Styled } from "theme-ui"

const DrupalMarkdownPostList = ({ posts }) => (
  <>
    <Styled.h1>Drupal Markdown Posts</Styled.h1>
    <Styled.ul>
      {posts.map(post => (
        <Styled.li key={post.drupal_internal__nid}>
          <strong>
            <Link to={post.fields.slug}>{post.title}</Link>
          </strong>
        </Styled.li>
      ))}
    </Styled.ul>
  </>
)

export default DrupalMarkdownPostList