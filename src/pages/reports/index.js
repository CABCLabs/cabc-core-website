import React from 'react'

import Layout from '../../components/Layout'
import ReportRoll from '../../components/ReportRoll'

export default class ReportIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/reports.jpg')`,
          }}
        >
          <h1
            className="blogTitleBox has-text-weight-bold is-size-1"
          >
            Reports
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <ReportRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
