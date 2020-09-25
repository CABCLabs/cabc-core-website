import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import logo from '../img/cabc-logo.png'
import introText from '../img/sowingtheseeds.png'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Motivations from '../components/Motivations'

import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  purpose,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
             <Link to="/" title="Logo">
              <img className="cabcLogo" src={logo} alt="CABC Logo" />
            </Link>
            <Link to="/" title="Logo">
              <img className="cabcLogoText" src={introText} alt="CABC Logo" />
            </Link>
            
           </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                <h3>Our Mission Statement</h3>
                </div>
                <div className="columns">
                  <div className="column is-12">
                     <h4 className="missionStatement">
                      {mainpitch.title}
                    </h4> 
                      <div className="tile">
                  <h3>Our Purpose</h3>
                    {/* <h3 className="subtitle">{mainpitch.description}</h3> */}
                  
                  </div>
                  <Motivations gridItems={purpose.motivations} />
                  <h3>Values statement</h3>
                  <p>
                      {mainpitch.description}
                    </p> 
                    <Link to="/tags/daily-reports" title="Daily Reports">
             <h3 className="cta_big">Daily Reports   &rarr;</h3>
            </Link>
            <h3>Current Projects</h3>
            <img
            src='https://hecareza.co.za/wp-content/uploads/2020/08/cropped-HeCareZa-2048x415.png'
            alt="CareZA Logo"
            style={{ width: '13em', padding: '5px' }}
          />
            <p>Men’s anger and violence threatens you, your loved ones and your community.  Let us join you in your stand against misogyny and gender-based violence. At heCareZA we believe men who hurt women have probably have been hurt and neglected themselves by older men. The very good news is that we, the mostly non-violent ones are many and the violent ones are few. At heCareZA we encourage the many to support each other using proven techniques of cooperation and support with methods of dialoguing with the few that will help them to find a non-violent way of being in the world. Lets make #GBVFALL. Do you know how?</p>
            <Link to="http://hecareza.co.za/" title="Daily Reports" target="_blank">
             <h3 className="cta_big">Visit Website   &rarr;</h3>
            </Link>
                  </div>
                  
                  </div>
                {/* <Features gridItems={intro.blurbs} /> */}
                {/* <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div> 
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  purpose: PropTypes.shape({
    movations: PropTypes.array,
  }),
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        purpose={frontmatter.purpose}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        purpose {
          motivations {
            reason
            }
            }
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
