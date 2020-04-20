import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FilesPage = ({ data }) => (
  <Layout>
    <SEO title="files" />
    <h1>Hi files</h1>
    <ul>
      {data.allFile.edges.map(({node}) => (
      <li>{node.name} - {node.size} - {node.size} - {node.sourceInstanceName}</li>
  
      ))}
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export const query = graphql`
query MyQueryA {
  allFile {
    edges {
      node {
        name
        sourceInstanceName
        size
        birthTime(fromNow: true)
      }
    }
  }
}`

export default FilesPage
