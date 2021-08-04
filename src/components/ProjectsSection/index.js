import {Component} from 'react'

import './index.css'

const projectsData = [
  {
    id: 0,
    imageUrl:
      'https://res.cloudinary.com/covid-dashboard/image/upload/v1626857302/My%20Projects/portfolio.png',
    name: 'Portfolio',
    projectUrl: 'https://kalyanprtfolio.ccbp.tech/',
  },
  {
    id: 1,
    imageUrl:
      'https://res.cloudinary.com/covid-dashboard/image/upload/v1626887395/My%20Projects/typing-test.png',
    name: 'Speed Typing Test',
    projectUrl: 'https://kalyantypetest.ccbp.tech/',
  },
  {
    id: 2,
    imageUrl:
      'https://res.cloudinary.com/covid-dashboard/image/upload/v1626887626/My%20Projects/vr-site.png',
    name: 'VR website',
    projectUrl: 'https://kalyanvrsite.ccbp.tech/',
  },
]

class ProjectsSection extends Component {
  renderProjectsList = () =>
    projectsData.map(project => (
      <li className="project-item" key={project.id}>
        <a
          className="project-links"
          href={project.projectUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          <img className="project-image" src={project.imageUrl} alt="work" />
          <p className="project-name">{project.name}</p>
        </a>
      </li>
    ))

  render() {
    return (
      <div className="projects-section">
        <h1 className="projects-heading">My Work</h1>
        <ul className="projects-list">{this.renderProjectsList()}</ul>
      </div>
    )
  }
}

export default ProjectsSection
