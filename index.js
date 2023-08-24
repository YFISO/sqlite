import * as sqlite from 'sqlite'
import  sqlite3  from 'sqlite3'
import {deleteGreeting, getGreeting} from '.db.js'

console.log('start')

const db = await sqlite.open({
    filename: './101.db',
    driver: sqlite3.Database
})

await db.migrate() // for migrations folder
//create an API that gets all the greetings from the sql on the same file.

//install express and import
import express from 'express'

//add 
const app = express()
const PORT = process.env.PORT|| 3008

//get all the greetings
app.get('/api/greeting', async (req, res) => {
    //call the function that gets the greetings:
const greetings =  await getGreeting()
console.log(greetings) // print in the terminal
res.json({
    greetings
})
})

// middleware
app.use(express.json())
//
app.post('/api/greeting', async (req, res) => {
    const greeting = req.body.greeting
    const language =  req.body.language

    //post greetings with addGreeting
    await addGreeting(language)

    res.json({
        status : 'sucess',
        language : `Added a greeting for ${language}`
    })
})
//view at https:localhost:3008/api/greetings                               
app.listen (PORT, () => console.log(`started on port : ${PORT}`))
//end here
