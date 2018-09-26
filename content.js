import site_json from './content.json'

import viewtube from './static/posts/viewtube.md'
import minesweeper from './static/posts/minesweeper.md'
import connect4 from './static/posts/connect4.md'

const site_data = JSON.parse(JSON.stringify(site_json))

const posts = {
  'viewtube': viewtube,
  'minesweeper': minesweeper,
  'connect4': connect4 
}

export default {
  getPost: (name) => posts[name],
  getCollections: () => site_data.collections,
  getProjectsForCollection: (collection) => {
    return site_data.projects
            .filter(project => project.collection === collection)
  },
  getTimeline: () => site_data.timeline,
  getFeaturedProjects: () => site_data.projects.filter(project => project.featured)
}
