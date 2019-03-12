import * as axios from 'axios'

let options = {}
// The server-side needs a full url to works
if (process.server) {
  options.baseURL = process.env.BASE_URL ? process.env.BASE_URL
                                         : 'http://localhost:3002';
}

export default axios.create(options)
