import './index.css'
import {Component} from 'react'

class HomeSection extends Component {
  render() {
    return (
      <div className="home-section">
        <h1 className="username">Kalyan Guttula</h1>
        <p className="designation">Full Stack Developer</p>
        <p className="experience-description">
          Experienced in HTML, CSS, JavaScript, Bootstrap, ExpressJS, NodeJS,
          ReactJS, SQL and Python.
        </p>
        <a
          href="https://docs.google.com/document/d/1-2GztRX4WSKVvK8pxWM9WewNgS-KecSo8V1z1UQyWOo/edit"
          rel="noopener noreferrer"
          target="_blank"
        >
          <button type="button" className="view-resume-btn">
            View Resume
          </button>
        </a>
      </div>
    )
  }
}

export default HomeSection
