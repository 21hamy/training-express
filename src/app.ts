import "dotenv/config"
import express, { Express, Request, Response, NextFunction } from 'express'
import { hello } from "./lib/hello"
import { myapiRoute } from "./lib/myapi";
import { fruitRoute } from "./lib/fruits";
import { todoRoute } from "./lib/todo";
import Router from "./routes"
import swaggerUi from "swagger-ui-express"

const port = Number(process.env.PORT) || 80
const app: Express = express()
var cors = require('cors')

/*
let apikey="123456789"
app.use((req:Request,res:Response,next:NextFunction)=>{
  console.log("Middleware")
  if(req.headers.apikey!==apikey ){
    return res.status(401).json({error:"Unauthorized"})
  }
  next()
})
*/

app.use(express.json())
app.use(cors())

app.use('/api/myapi', myapiRoute)

app.use('/api/fruits/', fruitRoute)

app.use('/api/todo/', todoRoute)

// app.get('/hello', (req, res) => {
//   res.send(hello("Ham"))
// })

app.get('/', (req, res) => {
  res.send("Welcome to HAMU website.")
})

app.use(Router)

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);

app.use(express.static('static'))
app.get('*', (req, res, next) => {
  res.sendFile(`${process.cwd()}/static/index.html`)
})

app.listen(port, () => console.log(`Application is running on port ${port}`))
