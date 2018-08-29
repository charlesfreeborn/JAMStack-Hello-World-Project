import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>My First Gatsby Page</h1>
    <p>Hello World.</p>
    <p>Welcome to my page! Let's do this!</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
