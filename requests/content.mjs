const fs = require('fs');
class SiteData {

  constructor() {

  }

  cache(data) {
    Object.keys(data).forEach(key => {
      this[key] = data[key]
      console.log(`Successfully cached:: ${key}`)
    })
    return data.length
  }

  getName() { return this.site.name }
  getTitle() { return this.site.title }
  getAboutText() { return this.site.about }


}

export default new SiteData()
