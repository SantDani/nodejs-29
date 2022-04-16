
const { readInput } = require("../04-to-do/helpers/inquirer");
const { menuInquirer, pause, listPlaces } = require("./helpers/inquirer");
const Search = require("./models/search.js");


const main = async () => {

    const searches = new Search();
    console.log("🚀 ~ file: index.js ~ line 8 ~ main ~ searches", searches)

    let option = 0;
    do {
        option = await menuInquirer();

        switch (option) {
            case 1:// Show Climate Info
                const siteToSearch = await readInput('City:')
                const sites = await searches.city(siteToSearch);

                const placeID = await listPlaces(sites);

                if( placeID === '0') continue;

                const placeSelected = sites.find(site => site.id === placeID)
                // save to DB
                searches.addToHistory(placeSelected.name)

                const climate = await searches.climateSite(placeSelected.latitude, placeSelected.longitude)
                console.clear();
                console. log('\nInformation city\n'.green);
                console. log ('City:', placeSelected?.name);
                console. log('Lat:', placeSelected?.latitude);
                console. log('Lng: ', placeSelected?.longitude);
                console. log('Temperature:', climate?.temperature);
                console. log('Minimum :', climate?.min);
                console. log('Maximum :', climate?.min );
                console. log('Description :', climate?.description );
                console. log('Feels like :', climate?.feels_like );
                break;
                case 2:// Show History
                const history = searches.history.history
                if(history.length > 0){
                    history.forEach((place, i)=> {
                        const num = `${i + 1}`.green;
                        console.log(`${num} - ${place.name}. ${place.time}`);
                    })
                }
                
                break;
            case 0:// Exit
                
                break;
        
            default:
                break;
        }

        if (option != 0) await pause();

    } while (option != 0);
}



main();