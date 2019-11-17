import React from "react"

const DrupalMarkdownPost = ({ title, body }) => (
  <div>
    <h4>
      {title}
    </h4>
    <hr />
    <div dangerouslySetInnerHTML={{ __html: body.processed }}></div>
  </div>
)

export default DrupalMarkdownPost