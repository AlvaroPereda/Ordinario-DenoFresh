import { MongoClient } from "mongodb"
import { RestaurantModel } from "./types.ts";

const url = Deno.env.get("MONGO_URL")
if (!url) throw new Error("Error con MONGO_URL")

const client = new MongoClient(url)
await client.connect()
console.log("Conectado a mongodb")

const db = client.db("restaurante")
export const RestaurantCollection = db.collection<RestaurantModel>("places")