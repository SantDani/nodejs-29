const fs = require('fs')

const file = './db/data.json';
const saveDB = (data)=> {

    fs.writeFileSync(file, JSON.stringify(data))
}

const readDB = ()=> {
    if(fs.existsSync(file)) null;

    const result = fs.readFileSync(file, {encoding: 'utf-8'});    
    return JSON.parse(result);
}

module.exports ={
    saveDB,
    readDB
}