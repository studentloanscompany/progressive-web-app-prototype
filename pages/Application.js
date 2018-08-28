import React, { Component } from "react";
import Link from "next/link";

import data from "../static/data.json";
import Header from "../components/atoms/Header";
import Footer from "../components/atoms/Footer";

class Application extends Component {
  static async getInitialProps({ query }) {
    return {application: query["application"]};
  }

  constructor(props) {
    super(props);

    this.state = {
      application: data.student[0].applications[this.props.application]
    };

    this.getToDoItems = this.getToDoItems.bind(this);
    this.getToDoItemStatus = this.getToDoItemStatus.bind(this);
    this.getExtraOptions = this.getExtraOptions.bind(this);
  }

  getToDoItems() {
    return this.state.application.toDoItems.map((toDoItem, index) => {
      return (
        <li key={index} className="section__row">
          <h3 className="section__label">
            <Link
              to="/application"
              className="section__label action--secondary"
              style={{ textDecoration: "none" }}
            >
              {toDoItem.description}
            </Link>
          </h3>
          {this.getToDoItemStatus(toDoItem)}
        </li>
      );
    });
  }

  getExtraOptions(showHeaders) {
    return this.state.application.extraOptions.map((option, index) => {
      return (
        <li className="action--secondary">
          <a className="action--secondary">{option.description}</a>
        </li>
      );
    });
  }

  getToDoItemStatus(toDoItem) {
    let toDoItemStatus = toDoItem.status;
    let statusClass =
      toDoItemStatus === "complete"
        ? "section__status_completed"
        : "section__status_incomplete";
    return <span className={statusClass}>{toDoItemStatus.toUpperCase()}</span>;
  }

  render() {
    return (
      <div className="site sfe">
        <Header />
        <main id="content" role="main" className="site-content">
          <div className="container">
            <ol className="breadcrumbs" style={{ marginBottom: "30px" }}>
              <li>
                <Link href="home">{data.pages["home"]}</Link>
              </li>
              <li>
                <Link href="ApplicationTracker">{data.pages["applicationTracker"]}</Link>
              </li>
              <li>{data.pages["application"]}</li>
            </ol>
            <div className="content">
              <h2 className="heading--xxlarge">
                {this.state.application.modeOfStudy}{" "}
                {this.state.application.type} {this.state.application.name}
              </h2>
            </div>
            <div className="base2-2-3 mainbar">
              <section>
                <ul className="section__list">{this.getToDoItems()}</ul>
              </section>
            </div>
            <div className="base2-1-3">
              <div className="sidebar">
                <section className="section" style={{ marginBottom: "15px" }}>
                  <div className="content">
                    <ul
                      style={{
                        listStyle: "none",
                        paddingLeft: 0,
                        marginTop: "15px"
                      }}
                    >
                      {this.getExtraOptions(true)}
                    </ul>
                  </div>
                </section>
                <section>
                  <div className="content">
                    <h3>Help us improve our online service</h3>
                    <a href="feedback">
                      Tell us what you think of this service
                    </a>
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

export default Application;
