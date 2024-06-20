"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const myapi_1 = require("./lib/myapi");
const fruits_1 = require("./lib/fruits");
const todo_1 = require("./lib/todo");
const routes_1 = __importDefault(require("./routes"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const port = Number(process.env.PORT) || 80;
const app = (0, express_1.default)();
var cors = require('cors');
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
app.use(express_1.default.json());
app.use(cors());
app.use('/api/myapi', myapi_1.myapiRoute);
app.use('/api/fruits/', fruits_1.fruitRoute);
app.use('/api/todo/', todo_1.todoRoute);
// app.get('/hello', (req, res) => {
//   res.send(hello("Ham"))
// })
app.get('/', (req, res) => {
    res.send("Welcome to HAMU website.");
});
app.use(routes_1.default);
app.use("/swagger", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(undefined, {
    swaggerOptions: {
        url: "/swagger.json",
    },
}));
app.use(express_1.default.static('static'));
app.get('*', (req, res, next) => {
    res.sendFile(`${process.cwd()}/static/index.html`);
});
app.listen(port, () => console.log(`Application is running on port ${port}`));
