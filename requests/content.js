import site from '~/content/site.json'
import projects from '~/content/projects.json'

class SiteData {

  constructor() {
    this.site = site
    this.projects = projects
  }

  getName() { return this.site.name }
  getTitle() { return this.site.title }
  getAboutText() { return this.site.about }
  getAboutPagePara() { return this.site.aboutPage }

  getFeaturedProjects() {
    return this.projects.filter(project => project.featured)
  }
}

const siteData = new SiteData();

export default siteData
