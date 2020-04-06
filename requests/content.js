import site from '~/content/site.json'
import projects from '~/content/projects.json'
import goodreads from '~/content/goodreads.json'

class SiteData {

  constructor() {
    this.site = site
    this.projects = projects
    this.goodreads = goodreads
  }

  getName() { return this.site.name }
  getTitle() { return this.site.title }
  getAboutText() { return this.site.about }
  getAboutPagePara() { return this.site.aboutPage }
  getWorkPagePara() { return this.site.workPage }
  getResumeLink() { return this.site.resume_link }

  getCurrentlyReading() { return this.goodreads.current.GoodreadsResponse.reviews.review.slice(0, 5) }
  getFavoriteBooks() { return this.goodreads.favorites.GoodreadsResponse.reviews.review.slice(0, 5) }

  getFeaturedProjects() {
    return this.projects
            .filter(project => project.featured)
            .sort((p1, p2) => p1.order - p2.order)
  }
  getAllProjects() {
    return this.projects
            .sort((p1, p2) => p1.order - p2.order);
  }
}

const siteData = new SiteData();

export default siteData
