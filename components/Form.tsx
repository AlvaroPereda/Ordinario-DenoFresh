import { FunctionalComponent } from "preact/src/index.d.ts";

const Form:FunctionalComponent = () => {
    return (
        <form action="/add" method="GET">
            <input type="text" name="name" placeholder="Nombre" required/>
            <input type="text" name="direction" placeholder="Dirección" required/>
            <input type="text" name="city" placeholder="Ciudad" required/>
            <input type="text" name="phone" placeholder="Teléfono" required/>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Form