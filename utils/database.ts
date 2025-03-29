import { MongoClient, Collection } from "mongodb"
import { RestaurantModel } from "./types.ts";

let RestaurantCollection: Collection<RestaurantModel>

export const initMongoDB = async() => {

    if(RestaurantCollection) return RestaurantCollection

    const url = Deno.env.get("MONGO_URL")
    if(!url) throw new Error("Error con MONGO_URL")
    
    const client = new MongoClient(url)
    await client.connect()
    console.log("Conectado a mongodb")

    const db = client.db("restaurante")
    RestaurantCollection = db.collection<RestaurantModel>("places")
    
    return RestaurantCollection
}

export default initMongoDB
