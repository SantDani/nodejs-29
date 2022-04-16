const axios = require('axios');
require('dotenv').config() // need a .env with token ignored in git // console.log(process.env.MAPBOX_KEY);

class Search {
    history = ['Madrid', 'Tegucigalpa', 'San Jose']

    constructor() {
        // TODO.. read DB
        console.log("Hello Search");
    }


    get paramsMapbox() {

        return {
            'access_token': process.env.MAPBOX_KEY,
            'language': 'es',
            'limit': 5,
            'proximity': 'ip',
            'types': 'place%2Cpostcode%2Caddress'
        }
    }
    async city(site = '') {

        // call HTTP
        console.log(site, 'Search.city');
        // create a Request Config not WORK F

        // const instance = axios.create({
        //     baseURL: `api.mapbox.com/geocoding/v5/mapbox.places/${site}.json`,
        //     params: {
        //         'access_token': 'process.env.MAPBOX_KEY',
        //         'limit':'5',
        //         'language': 'es'
        //     }
        // });
        // const response = await instance.get();

        
        let sites = [];
        try {
            const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${site}.json?access_token=${process.env.MAPBOX_KEY}&limit=5&proximity=ip&types=place%2Cpostcode%2Caddress&language=es`
            const response = await axios.get(url);            
            sites =  response.data.features.map(place => {
                return {
                    id: place.id,
                    name: place.place_name,
                    latitude: place.center[0],
                    longitude: place.center[1],
                }
            })

        } catch (error) {
            console.error(error);
        }
        
        return sites;
    }

}

module.exports = Search;