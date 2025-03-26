import { FunctionalComponent } from "preact/src/index.d.ts";

const IndexMenu:FunctionalComponent = () => {
    return (
        <div class="index-menu">
            <div>
                <a href="/add"><button type="submit">Añadir restaurante</button></a>
                <a href="/list"><button type="submit">Mostrar restaurantes</button></a>
            </div>
        </div>
    )
}

export default IndexMenu