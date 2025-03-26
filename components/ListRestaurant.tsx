import { FunctionalComponent } from "preact/src/index.d.ts";
import { Restaurant } from "../utils/types.ts";

const ListRestaurant:FunctionalComponent<Restaurant> = (props) => {
    const { id, name } = props
    return <h3><a href={`/restaurant/${id}`}>{name}</a></h3>
}
export default ListRestaurant