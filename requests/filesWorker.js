const fs = require('fs')
const path = require('path')
const md = require('markdown-it')()
const YAML = require('yamljs')

module.exports = class FilesWorker {

  constructor(path) {
    this.path = path;
  }

  static WriteJSONToFile(location, content, callback) {
    fs.writeFile(path.join(__dirname, location), JSON.stringify(content), callback);
  }

  getFolderFilesList() {
    return new Promise((resolve, reject) => {
      fs.readdir(path.join(__dirname, this.path), (err, files) => {
        resolve(files)
      })
    })
  }

  async getFiles() {
    this.files = [];
    const files = await this.getFolderFilesList()
    for(let i = 0; i < files.length; i++) {
      const p = path.join(__dirname, this.path, files[i])
      const content = fs.readFileSync(p, 'utf8')
      this.files.push(this.getJSONFromFile(content))
    }
    return this.files;
  }

  getJSONFromFile(fileContent) {
    return YAML.parse(fileContent.split('---')[1]);
  }
}
