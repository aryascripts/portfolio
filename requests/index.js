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
  // get both medial
  const responses = await Promise.all([getMediumFeed(), getYoutubeFeed()]);

  // combine two lists of media
  const media = [...responses[0], ...responses[1]];

  // sort list based on date
  media.sort((a, b) => b.date - a.date);

  FilesWorker.WriteJSONToFile(
    "./../content/media.json",
    media.slice(0, 15),
    print.bind(this, "published media.")
  );
}

async function getMediumFeed() {
  const items = (await Feed.load("https://medium.com/feed/@AmanScripts")).items;
  return items.map(item => {
    const description = item.description || item.content;
    const descriptionSplit = description.split("<img ")[1];
    const src = descriptionSplit.split('src="')[1];
    item.image = src.split('"')[0];
    return {
      title: item.title,
      link: item.link,
      date: item.published,
      type: "Article",
      img: item.image
    };
  });
}

async function getYoutubeFeed() {
  const items = (
    await Feed.load(
      "https://www.youtube.com/feeds/videos.xml?channel_id=UC1DIqOKaLSRAMngq9yoayzQ"
    )
  ).items;

  return items.map(item => {
    const img = item.enclosures[0];
    const last = img.lastIndexOf("/");
    return {
      img: `${img.slice(0, last)}/maxresdefault.jpg`,
      title: item.title,
      date: item.created,
      type: "Video",
      link: item.link
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
