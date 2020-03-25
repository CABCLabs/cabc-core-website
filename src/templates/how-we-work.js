import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const HowWeWorkTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <span>
    <div
     className="full-width-image-container margin-top-0"
     style={{
       backgroundImage: `url('/img/blog-index.jpg')`,
     }}
   >
     <h1
       className="blogTitleBox has-text-weight-bold is-size-1"
     >
       {title}
     </h1>
   </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
    </span>
  )
}

HowWeWorkTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const HowWeWorkPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <HowWeWorkTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

HowWeWorkPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default HowWeWorkPage

export const HowWeWorkPageQuery = graphql`
  query HowWeWorkPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
