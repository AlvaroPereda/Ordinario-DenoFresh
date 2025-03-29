import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { ObjectId } from "mongodb";
import { Restaurant } from "../../utils/types.ts";
import DetailRestaurant from "../../components/DetailRestaurant.tsx";
import initMongoDB from "../../utils/database.ts";

export const handler:Handlers = {
    GET: async(req:Request, ctx:FreshContext<unknown, Restaurant>) => {
        const { id } = ctx.params
        const url = new URL(req.url)
        const borrar = url.searchParams.get("delete")
        const RestauranteCollection = await initMongoDB()
        if(borrar) {
            await RestauranteCollection.deleteOne({_id: new ObjectId(id)})
            return ctx.render()
        }
        const result = await RestauranteCollection.findOne({_id: new ObjectId(id)})
        if(!result) throw new Error("No existe el restaurante")
        return ctx.render(({
            id,
            ...result
        }))
    }
}


export default (props:PageProps<Restaurant>) => {
    if (!props.data) return <h1 class="id-restaurant">Se ha borrado correctamente el restaurante</h1> 
    return (
        <div class="id-restaurant">
            <DetailRestaurant {...props.data}/> 
            <form action={`/restaurant/${props.data.id}`} method="GET">
                <input type="hidden" name="delete" value="true" />
                <button type="submit">Eliminar</button>
            </form>
        </div>
    )
}