import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header id="page-header" role="banner">
        <a id="header-skip-link" href="#content" className="keyboard-link">
          Skip to main content
        </a>
        <div className="page-header">
          <div className="container">
            <div className="page-header__inner row">
              <div className="page-header__title">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.gov.uk"
                  className="page-header__title-content"
                >
                  GOV.UK
                </a>
              </div>
              <h1 className="page-header__content">
                Student Finance application
              </h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="feedback">
            <p>
              <span className="phase-tag">PROTOTYPE</span> This application is a
              protoype and is likely to change.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="base-1-3" style={{ float: "left" }}>
            <img
              src="/static/images/template/sfe-logo.svg"
              alt="Student Finance England"
              className="secondary-logo"
            />
          </div>
          <div className="base-2-3" style={{ float: "left" }}>
            <a className="nav-link">Logout</a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
