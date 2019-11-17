import React from "react"

const DrupalMarkdownPost = ({ title, fields }) => (
  <div>
    <h1>
      {title}
    </h1>
    <div dangerouslySetInnerHTML={{ __html: fields.markdownBody.childMarkdownRemark.html }}></div>
  </div>
)

export default DrupalMarkdownPost