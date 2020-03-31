import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <span>
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
           Contact
          </h1>
        </div>
        </span>
        <section className="section">
          <div className="container">
            <div className="content">
            <h2>Let’s make change happen together</h2>
            <h3>Get in touch</h3>
            <h4><a href="mailto:info@cabc.org.za" target='blank'>info@cabc.org.za</a></h4>
            </div>
          </div>
        </section>
        </span>
      </Layout>
    )
  }
}
