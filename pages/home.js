import React from "react";
import "../styles/customer-portal.css";
import "../styles/index.css";
import Link from "next/link";
import Header from "../components/atoms/Header";
import Footer from "../components/atoms/Footer";

export default class extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
    return { userAgent };
  }

  render() {
    return (
      <div className="sfe site">
        <Header />
        <main id="content" role="main" className="site-content">
          <div className="container">
            <h2 className="heading--xxlarge--my-account heading--xxlarge">
              My Account
            </h2>
            <h3 className="heading--xsmall" style={{ marginBottom: "50px" }}>
              <div style={{ display: "inline-block" }}>
                <span>Your Customer Reference Number (CRN) : </span>
                <span>20124471022</span>
              </div>
            </h3>
            <div className="base2-2-3 mainbar">
              <section>
                <ol className="categories-list content">
                  <li>
                    <h3 className="home-nav">
                      <Link
                        href="/ApplicationTracker"
                        className="home-nav-link action--secondary"
                      >
                        Applications and Support
                      </Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </li>
                  <li>
                    <h3 className="home-nav">
                      <a>Letters and emails</a>
                    </h3>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                  </li>
                  <li>
                    <h3 className="home-nav">
                      <Link to="/page4">My Profile</Link>
                    </h3>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum.
                    </p>
                  </li>
                  <li>
                    <h3 className="home-nav">
                      <a>Payments</a>
                    </h3>
                    <p>Dolore eu fugiat nulla pariatur.</p>
                  </li>
                  <li>
                    <h3 className="home-nav">
                      <a>Finance</a>
                    </h3>
                    <p>Excepteur sint occaecat cupidatat non proident.</p>
                  </li>
                </ol>
              </section>
            </div>
            <div className="base2-1-3">
              <div className="sidebar">
                <section>
                  <div className="content">
                    <ol className="categories-list content">
                      <li>
                        <h3 className="home-nav">
                          <a>Start a new application</a>
                        </h3>
                        <p>Sed do eiusmod tempor incididunt ut labore.</p>
                      </li>
                      <li>
                        <h3 className="home-nav">
                          <a>Support an application</a>
                        </h3>
                        <p>
                          Dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation.
                        </p>
                      </li>
                    </ol>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
