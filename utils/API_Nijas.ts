import { PhoneAPI } from "./types.ts";

export const validatePhoen = async(phone: string):Promise<PhoneAPI> => {
    const API_KEY = Deno.env.get("API_KEY")
    if (!API_KEY) throw new Error("Error con API_KEY")
    const url = `https://api.api-ninjas.com/v1/validatephone?number=${phone}`
    const data = await fetch(url, {
        headers: {
            'X-Api-Key': API_KEY
          }
    })
    return await data.json()
}