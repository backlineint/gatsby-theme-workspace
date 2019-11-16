import React from "react"

const DrupalMarkdownPost = ({ title, body }) => (
  <div>
    <h1>
      {title}
    </h1>
    <div dangerouslySetInnerHTML={{ __html: body.processed }}></div>
  </div>
)

export default DrupalMarkdownPost