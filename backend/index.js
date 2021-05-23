
import mongodb from "mongodb"
import dotenv from "dotenv"
import app from "./server.js"
import RestaurantsDAO from "./dao/restaurantsDAO.js"
import ReviewsDAO from "./dao/reviewsDAO.js"

dotenv.config()

const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000;

MongoClient.connect(
    process.env.RESTVIEWS_DB_URI,
    {
        poolSize:50,  // how many people can connect
        wtimeout:2500, // after 2500 miliseconds the request will timeout 
        useNewUrlParser: true, // mongojs db driver purposes
        useUnifiedTopology: true,
    }
).catch(err => {
    console.log(err);
    process.exit(1);
})
 .then( async client => {
    await RestaurantsDAO.injectDB(client);
    await ReviewsDAO.injectDB(client)
    app.listen(port, () => {
        console.log(`listening on the port ${port}`);
    });
 });

































