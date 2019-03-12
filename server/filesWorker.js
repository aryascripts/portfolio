const fs = require('fs');
const path = require('path');

module.exports = class FilesWorker {

  constructor(path) {
    this.path = path;
  }

  getFolderFilesList() {
    return new Promise((resolve, reject) => {
      fs.readdir(path.join(__dirname, this.path), (err, files) => {
        resolve(files);
      })
    });
  }
}
