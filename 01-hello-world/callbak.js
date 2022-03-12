function getElementByID(id, callback){
	
	const user = {
        id,
        name: 'Fernando'
	}

    setTimeout(()=> {
        callback(user)
    }, 1000)
}

getElementByID(10, (newUser) =>{
    console.log(newUser);
})
