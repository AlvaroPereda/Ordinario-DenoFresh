import IndexMenu from "../components/IndexMenu.tsx";

export default function Home() {
  const aux = Deno.env.get("PRUEBA")
  console.log("Prueba: " + aux)
  return <IndexMenu/>
}
