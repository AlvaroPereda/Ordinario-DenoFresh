import { MongoClient } from "mongodb"
import { RestaurantModel } from "./types.ts";



export const initMongoDB = async() => {
    const url = Deno.env.get("MONGO_URL")
    if(!url) throw new Error("Error con MONGO_URL")
    
    const client = new MongoClient(url)
    await client.connect()
    console.log("Conectado a mongodb")

    const db = client.db("restaurante")
    const RestaurantCollection = db.collection<RestaurantModel>("places")
    
    return RestaurantCollection
}

export const prueba = await initMongoDB()
