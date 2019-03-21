import site from '~/content/site.json'
import projects from '~/content/projects.json'

class SiteData {

  constructor() {
    console.log(siteInfo)
  }

  getName() { return this.site.name }
  getTitle() { return this.site.title }
  getAboutText() { return this.site.about }


}

const siteData = new SiteData();

export default siteData
