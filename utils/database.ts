import { MongoClient } from "mongodb"
import { RestaurantModel } from "./types.ts";


const initMongoDB = async() => {
    const url = Deno.env.get("MONGO_URL")
    if(!url) throw new Error("Error con MONGO_URL")
    
    const client = new MongoClient(url)
    await client.connect()

    const db = client.db("restaurante")
    const RestaurantCollection = db.collection<RestaurantModel>("places")
    
    return RestaurantCollection
}

export default initMongoDB