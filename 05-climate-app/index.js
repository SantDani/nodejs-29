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
            case 1:
                // Show message
                const siteToSearch = await readInput('City:')
                const sites = await searches.city(siteToSearch);

                const placeID = await listPlaces(sites);
                const placeSelected = sites.find(site => site.id === placeID)


                console. log('\nInformation city\n'.green);
                console. log ('City:', placeSelected.name);
                console. log('Lat:', placeSelected.latitude);
                console. log('Lng: ', placeSelected.longitude);
                // console. log('Temperature:', );
                // console. log('Minimum :', );
                // console. log('Maximum :', );
                 
                break;
            case 2:
                
                break;
            case 0:
                
                break;
        
            default:
                break;
        }

        if (option != 0) await pause();

    } while (option != 0);
}

main();