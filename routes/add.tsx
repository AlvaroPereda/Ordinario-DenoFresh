import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Form from "../components/Form.tsx";
import { validatePhoen } from "../utils/API_Nijas.ts";
import { RestaurantCollection } from "../utils/database.ts";

export const handler:Handlers = {
    GET: async(req:Request, ctx:FreshContext<unknown,boolean>) => {
        const url = new URL(req.url)
        const name = url.searchParams.get("name")
        const direction = url.searchParams.get("direction")
        const city = url.searchParams.get("city")
        const phone = url.searchParams.get("phone")
        if (!name || !direction || !city || !phone) return ctx.render(undefined)
        if (!(await validatePhoen(phone)).is_valid) return ctx.render(false)
        await RestaurantCollection.insertOne({
            name,
            direction,
            city,
            phone
        })
        return ctx.render(true)
    }
}


export default (props:PageProps<boolean>) => {
    return (
        <div class = "add-restaurant">
            <Form/>
            {props.data === true ? 
                <h3>Datos añadidos correctamente</h3> : 
            props.data === false ? 
                <h3>El telefono no existe</h3> : null
            }
        </div>
    )
}