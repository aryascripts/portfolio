const FilesWorker = require('./filesWorker.js')
import {SiteData} from './content'

// Store all content to JSON
storeContent().catch(e => console.error(e))


async function storeContent() {
  // site information
  const site = await storeSiteInfo()

  // store projects
  const projects = await storeProjects()

  const data = {
    site: site,
    projects: projects
  }
  const cached = SiteData.cache(data);

  if (cached === Object.keys(data).length) console.log(`Successfully cached ${cached} objects.`)

}

async function storeSiteInfo() {
  const siteWorker = new FilesWorker('./../content/site')
  return await siteWorker.getFiles()
  // FilesWorker.WriteJSONToFile('./../content/site.json', siteInfo[0], print.bind(this, 'site information.'))
}

async function storeProjects() {
  const projectWorker = new FilesWorker('./../content/projects')
  return await projectWorker.getFiles()
  // FilesWorker.WriteJSONToFile('./../content/projects.json', projectInfo, print.bind(this, 'project information.'))
}

function print(message) {
  console.log('Successfully generated:: ' + message)
}
