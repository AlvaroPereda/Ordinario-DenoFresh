import { FunctionalComponent } from "preact/src/index.d.ts";
import { Restaurant } from "../utils/types.ts";

const DetailRestaurant:FunctionalComponent<Restaurant> = (props) => {
    const { name, direction, city, phone} = props
    return (
        <div>
            <h1>{name}</h1>
            <h3><strong>Dirección: </strong> {direction}</h3>
            <h3><strong>Ciudad: </strong> {city}</h3>
            <h3><strong>Teléfono: </strong> {phone}</h3>
        </div>
    )
}

export default DetailRestaurant