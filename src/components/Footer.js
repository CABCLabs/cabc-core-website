import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/cabc-logo.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'
import linkedin from '../img/social/linkedin.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer  has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="CABC Logo"
            style={{ width: '11em' }}
          /><br/>
           <img
            src='https://www.careza.co.za/static/white-careZA-4aef5353ac43a6c96a82f56379823c1e.png'
            alt="CareZA Logo"
            style={{ width: '13em', background: '#4dad33', padding: '5px' }}
          />
        </div>
        <div style={{paddingTop: '40px'}} className="has-background-black">
        <div className="content has-text-centered has-text-white-ter">
        <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-12 social">
                {/* <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a> */}
                  <a title="linkedIn" href="https://www.linkedin.com/company/centre-for-analytics-behavioural-change">
                  <img
                    src={linkedin}
                    alt="linkedin"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
        <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-12 social">
                <h4 className="footerContact"><a className="footerTextLink" target="blank" href="mailto:info@cabc.org.za">info@cabc.org.za</a><a className="footerTextLink" target="blank" href="https://sacoronavirus.co.za/">sacoronavirus.co.za</a></h4>
              </div>
            </div>
          </div>
        </div>
        </div>
      </footer>
    )
  }
}

export default Footer
