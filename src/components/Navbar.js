import React from "react";
import { Link } from "gatsby";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <header class="header">
        {/* <Link to="/" title="Logo">
              <img className="cabcLogo" src={logo} alt="CABC Logo" />
            </Link> */}
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn">
          <span class="navicon"></span>
        </label>
        <ul class="menu">
          <li>
            <Link className="navbar-item" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/about-us">
              About Us
            </Link>
          </li>
          <li>
            {" "}
            <Link className="navbar-item" to="/what-we-do">
              What We Do
            </Link>
          </li>
          <li>
            {" "}
            <Link className="navbar-item" to="/how-we-work">
              How We Work
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/reports">
              Reports
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/blog">
              News / Media
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/donate">
              Donate
            </Link>
          </li>
          <li>
            {" "}
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </header>
    );
  }
};

export default Navbar;
