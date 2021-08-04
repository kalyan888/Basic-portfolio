import {Component} from 'react'

import './index.css'

const socialMediaAppsData = [
  {
    id: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-logo-img.png',
    name: 'linkedIn',
    siteUrl: 'linkedin.com/in/kalyan-guttula-8n3175n8',
  },
  {
    id: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/reddit-logo-img.png',
    name: 'reddit',
    siteUrl: 'https://www.reddit.com/',
  },
  {
    id: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-logo-img.png',
    name: 'instagram',
    siteUrl: 'https://www.instagram.com/',
  },
  {
    id: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-logo-img.png',
    name: 'facebook',
    siteUrl: 'https://www.facebook.com/',
  },
]

class SocialMediaSection extends Component {
  renderSocialMediaAppIcon = () =>
    socialMediaAppsData.map(app => (
      <a
        href={app.siteUrl}
        rel="noopener noreferrer"
        target="_blank"
        key={app.id}
      >
        <img className="app-logo" src={app.imageUrl} alt={app.name} />
      </a>
    ))

  render() {
    return (
      <div className="social-media-section">
        {this.renderSocialMediaAppIcon()}
      </div>
    )
  }
}

export default SocialMediaSection
