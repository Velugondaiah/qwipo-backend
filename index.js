const express = require("express")
const cors = require("cors")
const app = express()
const {open} = require("sqlite")
const sqlite3 = require("sqlite3")
const path = require("path")
const dbPath = path.join(__dirname , "Customer.db")
app.use(express.json())
app.use(cors({
  origin : "http://localhost:3000"
}))

let db = null;
const initilizationDbAndServer = async () => {
    try{
        db =  await open({
            filename : dbPath,
            driver : sqlite3.Database
        })
        app.listen(3001 , () => {
            console.log("This running on http://localhost:3001")
        })
    }catch(e){
        console.log(`DB Error: ${e.message}`)
        process.exit(1)

    }
}

initilizationDbAndServer()

app.post("/customer" , async (request , response) => {
  const { firstName , lastName , phoneNumber , email , address } = request.body
  const query = `INSERT INTO user_infomation(first_name , last_name , phone_number , email , address)
  VALUES(
      '${firstName}',
      '${lastName}',
      '${phoneNumber}',
      '${email}',
      '${address}'
  )
  `
  const dbResponse = await db.run(query);

})

app.get("/users" , async (request , response) => {
    const query2 = `SELECT * FROM user_infomation`
    const response2 = await db.all(query2)
    response.status(200)
    response.send( response2)
})