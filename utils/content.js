import site_json from './content.json'
import viewtube from '../static/posts/viewtube.md'
import minesweeper from '../static/posts/minesweeper.md'
import connect4 from '../static/posts/connect4.md'

const site_data = JSON.parse(JSON.stringify(site_json))
const axios = require('axios')

const parser = require('fast-xml-parser');


const posts = {
  'viewtube': viewtube,
  'minesweeper': minesweeper,
  'connect4': connect4
}

const getBooksFromShelf = async (user, shelf) => {

  var options = {
      attributeNamePrefix : "@_",
      attrNodeName: "attr", //default is 'false'
      textNodeName : "#text",
      ignoreAttributes : true,
      ignoreNameSpace : false,
      allowBooleanAttributes : false,
      parseNodeValue : true,
      parseAttributeValue : false,
      trimValues: true,
      cdataTagName: "__cdata", //default is 'false'
      cdataPositionChar: "\\c",
      localeRange: "", //To support non english character in tag/attribute values.
      parseTrueNumberOnly: false,
  };


  const xml = await axios.get('https://www.goodreads.com/review/list.xml?key=lGwTU80ScPR8qeQpEdjIQ&v=2&id=40064988&shelf=favorites&sort=date_added&order=d');
  const data = xml.data;

  if( parser.validate(data) === true) { //optional (it'll return an object in case it's not valid)
    var jsonObj = parser.parse(data);
    console.log(JSON.stringify(jsonObj));
}
}

export default {
  getPost: (name) => posts[name],
  getCollections: () => site_data.collections,
  getProjectsForCollection: (collection) => {
    return site_data.projects
            .filter(project => project.collection === collection)
  },
  getTimeline: () => site_data.timeline,
  getFeaturedProjects: () => site_data.projects.filter(project => project.featured),
  getAboutMessage: () => site_data.about.about_me,
  getBooks: (shelf) => getBooksFromShelf()
}
