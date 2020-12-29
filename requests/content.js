import site from "~/content/site.json";
import projects from "~/content/projects.json";
import goodreads from "~/content/goodreads.json";
import media from "~/content/media.json";

class SiteData {
  constructor() {
    this.site = site;
    this.projects = projects;
    this.goodreads = goodreads;
    this.media = media;
  }

  getName = () => this.site.name;
  getTitle = () => this.site.title;
  getAboutText = () => this.site.about;
  getAboutPagePara = () => this.site.aboutPage;

  getWorkPagePara = () => this.site.workPage;
  getResumeLink = () => this.site.resume_link;

  getCurrentlyReading = () =>
    this.goodreads.current.GoodreadsResponse.reviews.review.slice(0, 5);

  getFavoriteBooks = () =>
    this.goodreads.favorites.GoodreadsResponse.reviews.review.slice(0, 5);

  getFeaturedProjects = () =>
    this.projects
      .filter(project => project.featured)
      .sort((p1, p2) => p1.order - p2.order);

  getAllProjects = () => this.projects.sort((p1, p2) => p1.order - p2.order);

  getMedia = () => this.media.slice(0, 9);

  getRandomQuote() {
    const max = this.site.quotes.length;
    if (max) {
      const ran = Math.floor(Math.random() * max);
      const quote = this.site.quotes[ran];
      return `${quote.quote} -${quote.author}`;
    } else {
      return "If you cannot do great things, do small things in a great way. - Napoleon Hill";
    }
  }
}

const siteData = new SiteData();

export default siteData;
