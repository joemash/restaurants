import express from "express"
import cors from "cors"
import restautants from "./api/restaurants.route.js"


const app = express();

app.use(cors())
app.use(express.json()); // server can accept json 

app.use("/api/v1/restaurants", restautants);

app.use("*", (req, res) => res.status(404).json({error: "Not found"}))

export default app;