import express from "express";
import authRouter from "./routes/authRoute.js"
import cors from 'cors'
import dotenv from 'dotenv'


dotenv.config();

const port = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth",authRouter)

app.get("/", (req,res) =>{
    res.send("Welcome to the API")
})

app.listen(port,() => {
    console.log(`Server running on port  ${port}` )
})