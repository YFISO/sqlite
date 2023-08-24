
//create an js file to store modules
 export async function deleteByLanguage(language){
    //sql statement type-delete by language
    
    const sql = `delete from greetings where language = ?`
    await db.run(sql, [language]);
    }

    export async function deleteGreeting(id){
        // sql statement type - delete
        const sql = `delete from greetings where id = ?`
        await db.run(sql, [id]);
    }

    export async function updateGreeting(language, greeting, id){
        const sql = `update greeting set language=?, greeting=? where id=?`;
        await db.run(sql, [language, greeting, id])
    }

/*
})
//to practice
//you need a getGreeting() function
//create in another file and import

// create a function that deletes by language
//FUNCTION CREATED IN ANOTHER FILE AND IMPORTED

const result1 = await getGreeting()
console.log(result1)
console.log('===========')

await deleteByLanguage('Sepedi')// input the language inside the brackets

//create a function that deletes a specific greeting
//FUNCTION CREATED IN ANOTHER FILE AND IMPORTED

//const result1 = await getGreeting()
console.log(result1)
console.log('==============')

await deleteGreeting(6); //it should delete a result for id=6
await deleteGreeting(8); //it should delete a result for id=8

// create a function that adds a new greeting
 async function addGreeting(language, greeting){
    // sql statement type- insert

    const sql = `insert into greetings(language, greeting) values(?, ?)`
    await db.run(sql, [language, greeting]);
 }

 //only write this section once at the end to print the result in the terminal
 //const result1 = await getGreeting()
 console.log(result1) // print result1 in terminal
 console.log('===============')


 await addGreeting('Sepedi', 'Dumela'); //('sepedi and Dumela' are stored in an external file.)
 
 console.log('==============')
//only write this section once at the end to print the result in the terminal
const result2 = await getGreeting()
console.log(result2)

//create a function that updates a greeting


//only write this section once at the end to print the result in the terminal
 //const result1 = await getGreeting()
 console.log(result1)
 console.log('===============')

 await updateGreeting('Sepedi', 'Thobela', 5)

 console.log('==============')
 //only write this section once at the end to print the result in the terminal

// to practice


//call the query using an await
const result = await db.all(`select * from greetings`);
console.log(result)

//call the query using a promise
db
    .all(`select * from greeting`)
    .then(result => {
        console.log(result)
    })
const countResult = await db.get((`select count(*) as count from greetings`))
console.log(result)
console.log('end')*/

