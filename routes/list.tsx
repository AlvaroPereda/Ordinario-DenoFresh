// deno-lint-ignore-file jsx-key
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import ListRestaurant from "../components/ListRestaurant.tsx";
import { RestaurantCollection } from "../utils/database.ts";
import { Restaurant, RestaurantModel } from "../utils/types.ts";

export const handler:Handlers = {
    GET: async(_req:Request, ctx:FreshContext<unknown,Restaurant[]>) => {
        const result:RestaurantModel[] = await RestaurantCollection.find().toArray()
        return ctx.render(result.map(e => ({
            id: e._id!.toString(),
            ...e
        })))
    }
}

export default (props:PageProps<Restaurant[]>) => {
    return (
        <div class="list-restaurant">
            <div>
                {props.data.map(e => <ListRestaurant {...e}/>)}
            </div>
        </div>
    )
}