import React, { Component } from "react";
import "../styles/homePage.css";

class HomePage extends Component {
  render() {
    return (
      <div>
        <section className="top-banner" id="top" data-section="section1">
          <div className="top-banner-text-container">
            <div className="header-caption">
              <h6>Online Math for 3rd and 4th Graders</h6>
              <h2>Student Growth Begins Here</h2>
              <div className="banner-button">
                <div className="scroll-to-section">
                  <a href="#section2">About Mathio</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="features">
            <div className="features-row">
              <div className="features-box">
                <div className="features-post">
                  <div className="features-content">
                    <div className="content-show">
                      <h4>{this.renderPencilIcon()}Teacher Capabilities</h4>
                    </div>
                    <div className="content-hide">
                      <p>
                        Teachers have the option to choose what kind of
                        visualization they want to pair with an assigned
                        question. When teachers select the kind of question that
                        they want, they are taken to the next screen which
                        allows the teacher to set the specifics of the problem
                        that they are assigning to a student.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="features-box">
                <div className="features-post">
                  <div className="features-content">
                    <div className="content-show">
                      <h4>{this.renderBookIcon()}Interaction</h4>
                    </div>
                    <div className="content-hide">
                      <p>
                        When a teacher has created math content for their
                        students, they can share a code with their class through
                        email. The email will contain a code for students to
                        enter into the Mathio Class Code page. The page is
                        visually simple and allows for students to just focus on
                        joining the classroom. Once the class code has been
                        entered, the student will be brought to the home page of
                        the math classroom. We can think about this feature as
                        the hallway where students enter the classroom from.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="features-box">
                <div className="features-post">
                  <div className="features-content">
                    <div className="content-show">
                      <h4>{this.renderAwardIcon()}Student Capabilities</h4>
                    </div>
                    <div className="content-hide">
                      <p>
                        Student users have access to visualizations that assist
                        them in answering specific math questions, giving them a
                        deeper understanding of vital fundamental math concepts
                        while reducing barriers to learning. These depictions
                        are designed to be simple, intuitive, and powerful.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  renderPencilIcon() {
    return (
      <svg
        className="home-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          d="M5 18v2h4v-2H5zM3 7l4-5 4 5v15H3V7zm18 1h-2v2h2v2h-3v2h3v2h-2v2h2v3a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3z"
          fill="rgba(255,255,255,1)"
        />
      </svg>
    );
  }

  renderBookIcon() {
    return (
      <svg
        className="home-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          d="M20 22H6.5A3.5 3.5 0 0 1 3 18.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2v-3H6.5a1.5 1.5 0 0 0 0 3H19z"
          fill="rgba(255,255,255,1)"
        />
      </svg>
    );
  }

  renderAwardIcon() {
    return (
      <svg
        className="home-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          d="M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0zM12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
          fill="rgba(255,255,255,1)"
        />
      </svg>
    );
  }
}

export default HomePage;
