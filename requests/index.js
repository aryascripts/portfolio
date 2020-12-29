const FilesWorker = require("./filesWorker.js");
const GoodReads = require("./goodreads.js");
const Feed = require("rss-to-json");

// Store all content to JSON
storeContent().catch(e => console.error(e));

async function storeContent() {
  // site information
  await storeSiteInfo();

  // store projects
  await storeProjects();

  // get goodreads and store JSON
  await storeGoodreadsInfo();

  await getMediumFeed();
}

async function storeSiteInfo() {
  const siteWorker = new FilesWorker("./../content/site");
  const siteInfo = await siteWorker.getFiles();
  FilesWorker.WriteJSONToFile(
    "./../content/site.json",
    siteInfo[0],
    print.bind(this, "site information.")
  );
}

async function getMediumFeed() {
  const json = await Feed.load("https://medium.com/feed/@AmanScripts");
  console.log(json);
}

async function storeProjects() {
  const projectWorker = new FilesWorker("./../content/projects");
  const projectInfo = await projectWorker.getFiles();
  FilesWorker.WriteJSONToFile(
    "./../content/projects.json",
    projectInfo,
    print.bind(this, "project information.")
  );
}

async function storeGoodreadsInfo() {
  const goodreadsWorker = new FilesWorker("./../content/goodreads");
  const current = await GoodReads.getCurrentlyReading();
  const favs = await GoodReads.getFavoriteBooks();

  FilesWorker.WriteJSONToFile(
    "./../content/goodreads.json",
    { current: current, favorites: favs },
    print.bind(this, "goodreads info")
  );
}

function print(message) {
  console.log("Successfully generated:: " + message);
}
