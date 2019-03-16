const fs = require('fs')
const path = require('path')
const md = require('markdown-it')()
const YAML = require('yamljs')

module.exports = class FilesWorker {

  constructor(path) {
    this.path = path;
    this.storeInCache();
  }

  getFolderFilesList() {
    return new Promise((resolve, reject) => {
      fs.readdir(path.join(__dirname, this.path), (err, files) => {
        resolve(files)
      })
    })
  }

  async storeInCache() {
    this.files = [];
    const files = await this.getFolderFilesList()
    for(let i = 0; i < files.length; i++) {
      const p = path.join(__dirname, this.path, files[i])
      const content = fs.readFileSync(p, 'utf8')
      this.files.push(this.getJSONFromFile(content))
    }
    return this.files;
  }

  getFiles() {
    if(this.files.length) return Promise.resolve(this.files);

    return this.storeInCache();
  }

  getJSONFromFile(fileContent) {
    return YAML.parse(fileContent.split('---')[1]);
  }
}
