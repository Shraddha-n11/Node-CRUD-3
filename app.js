var cl=console.log;

const express=require(`express`);

const router=require("./router/router.js");


const app = express();

app.use(express.json());

app.use("/api/student",router);

module.exports=app;