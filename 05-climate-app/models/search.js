const axios = require('axios');
const fileSystem = require('fs') // or
require('dotenv').config() // need a .env with token ignored in git // console.log(process.env.MAPBOX_KEY);

class Search {
    history = []
    dbPath = './db/database.json'

    constructor() {
        // TODO.. read DB
        
        this.history = this.readDB()
        
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
            sites = response.data.features.map(place => {
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

    async climateSite(latitude, longitude) {

        try {
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: {
                    'lat': latitude,
                    'lon':  longitude,
                    'units': 'metric',
                    'lang': 'es',
                    'appid': process.env.OPENWEATHER_TEMP
                }
            });
            
            const response = await instance.get();
            // console.log("🚀 ~ file: search.js ~ line 75 ~ Search ~ climateSite ~ response", response.data)

            return {
                description: response.data.weather[0].description,
                min: response.data.main.temp_min,
                max: response.data.main.temp_max,
                feels_like: response.data.main.feels_like,
                temperature: response.data.main.temp
            }
        } catch (error) {
            console.log(error);
        }
    }

    addToHistory(place){
        this.history.unshift({name: place, time:  new Date()});
        this.saveDB();
    }

    saveDB(){
        const payload = {
            history: this.history
        }

        fileSystem.writeFile(this.dbPath, JSON.stringify(payload), (err) => {
            if (err)  throw err;
        } )
    }

    readDB(){
        if(fileSystem.existsSync(this.dbPath)) null;

        const result = fileSystem.readFileSync(this.dbPath, {encoding: 'utf-8'})
        return JSON.parse(result);
    }

}

module.exports = Search;