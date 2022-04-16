const { readInput } = require("../04-to-do/helpers/inquirer");
const { menuInquirer, pause } = require("./helpers/inquirer");
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
                const site = await readInput('City:')
                const result = await searches.city(site);
                // search  and show sites
                // select site
                // show climate
                // show results
                // console. log('\nInformation city\n'.green);
                // console. log ('City:', );
                // console. log('Lat:', );
                // console. log('Lng: ', );
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
        console.log(`selected option: ${option}`);


        if (option != 0) await pause();

    } while (option != 0);
}

main();