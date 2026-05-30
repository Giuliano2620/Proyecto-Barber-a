export default function Barbero({ nombre, especialidad }: { nombre: string, especialidad: string }) {
  return (
    <div>
      <h2>{nombre}</h2>
      <p>{especialidad}</p>
    </div>
  )
}