// const FilesWorker = require('./filesWorker.js')

import FilesWorker from './filesWorker.js'
const siteWorker = new FilesWorker('./../content/site')

const api = {
  getAll: async () => {
    return await siteWorker.getFiles();
  }
}

export default api
