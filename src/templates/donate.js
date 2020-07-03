import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const DonateTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <span>
    <div
     className="full-width-image-container margin-top-0"
     style={{
       backgroundImage: `url('/img/cover.jpg')`,
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
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
    </span>
  )
}

DonateTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const DonatePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <DonateTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

DonatePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default DonatePage

export const DonatePageQuery = graphql`
  query DonatePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
