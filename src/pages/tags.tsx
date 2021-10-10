import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { TagsPageQuery } from "../graphqlTypes"

const TagsPage: React.FC<{ data: TagsPageQuery }> = ({ data }) => {
  return (
    <Layout>
      <SEO title="ludusrusso" />
      <div className="max-w-6xl m-auto">
        <ul className="mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.allMdx.tags.map(tag => {
            return <li key={tag}> {tag}</li>
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default TagsPage

export const query = graphql`
  query TagsPage {
    allMdx {
      tags: distinct(field: frontmatter___tag)
    }
  }
`
