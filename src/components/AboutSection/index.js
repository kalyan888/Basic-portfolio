import {Component} from 'react'

import './index.css'

const skillsData = [
  {
    id: 0,
    name: 'HTML',
  },
  {
    id: 1,
    name: 'CSS',
  },
  {
    id: 2,
    name: 'Java Script',
  },
  {
    id: 3,
    name: 'Bootstrap',
  },
  {
    id: 4,
    name: 'ReactJS',
  },
  {
    id: 5,
    name: 'ExpressJS',
  },
  {
    id: 6,
    name: 'Node',
  },

  {
    id: 7,
    name: 'Python',
  },
  {
    id: 8,
    name: 'SQLite',
  },
]

const educationData = [
  {
    id: 0,
    qualification: 'Graduation',
    qualificationSource: 'Aditya College Of Engineering',
  },
  {
    id: 1,
    qualification: 'Diploma',
    qualificationSource: 'Aditya Polytechnic College',
  },
  {
    id: 2,
    qualification: 'High School',
    qualificationSource: 'Pragati Little Public School',
  },
]

class AboutSection extends Component {
  renderSkillsList = () => (
    <ul className="skills-list">
      {skillsData.map(skill => (
        <li className="skill-item" key={skill.id}>
          <p className="skill">{skill.name}</p>
        </li>
      ))}
    </ul>
  )

  renderEducationDetailsList = () =>
    educationData.map(education => (
      <li key={education.id}>
        <div className="education">
          <p className="qualification">{education.qualification}</p>
          <p className="education-place">{education.qualificationSource}</p>
        </div>
      </li>
    ))

  render() {
    return (
      <div className="about-page">
        <h1 className="about-section-heading">About</h1>
        <p className="about-section-description">
          I started my journey in the world of computers from a young age, now
          I’m 24 years old, currently learning courses from ccbp. Web
          development is my center of interest.
        </p>
        <div className="education-and-skills-container">
          <div className="education-details-container">
            <h1 className="education-and-skills-heading">Education</h1>
            <ul className="education-details-list">
              {this.renderEducationDetailsList()}
            </ul>
          </div>
          <div className="skills-container">
            <h1 className="education-and-skills-heading">Skills</h1>
            {this.renderSkillsList()}
          </div>
        </div>
      </div>
    )
  }
}

export default AboutSection
