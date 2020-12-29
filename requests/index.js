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

  await getMediaFeed();
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

async function getMediaFeed() {
  const media = await Promise.all([getMediumFeed()]);
  const medium = media[0];

  // get youtube media

  // combine two lists of media

  // sort list based on date

  // slice to only top 15 items
}

async function getMediumFeed() {
  const items = (await Feed.load("https://medium.com/feed/@AmanScripts")).items;
  return items.map(item => {
    const split = item.description.split('<img src="');
    item.image = split[1].split('"')[0];
    return {
      title: item.title,
      link: item.link,
      date: item.published,
      type: "Article",
      img: split[1].split('"')[0]
    };
  });
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
