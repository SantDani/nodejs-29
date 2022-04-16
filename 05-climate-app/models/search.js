const axios = require('axios');

class Search {
    history = ['Madrid', 'Tegucigalpa', 'San Jose']

    constructor(){
        // TODO.. read DB
        console.log("Hello Search");
    }

    async city( site = ''){
        
        // call HTTP
        console.log(site, 'Search.city');
        const response = await axios.get('https://reqres.in/api/users?page=2')
        console.log("🚀 ~ file: search.js ~ line 16 ~ Search ~ city ~ response", response.data)

        return []; // return sites
    }

}

module.exports = Search;