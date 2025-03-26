import { OptionalId } from "mongodb";

export type RestaurantModel = OptionalId<{
    name: string
    direction: string
    city: string
    phone: string
}>

export type Restaurant = {
    id: string
    name: string
    direction: string
    city: string
    phone: string
}

//https://api-ninjas.com/api/validatephone
export type PhoneAPI = {
    is_valid: boolean
} 