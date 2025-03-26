import { PageProps } from "$fresh/server.ts";

export default (props:PageProps) => {
    const Component = props.Component
    return (
        <div class="layout">
            <header>
                <h1>Restaurantes</h1>
                <a href="/">Home</a>
            </header>
            <Component/>
        </div>
    )
}