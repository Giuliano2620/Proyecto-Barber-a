"use client"

import { useState } from "react"

export default function Barberos() {
  const [barberos, setBarberos] = useState([
    { nombre: "Juan", disponible: true },
    { nombre: "Giuliano", disponible: false },
    { nombre: "Juancho", disponible: true },
  ])

  const cambiarDisponibilidad = (nombre: string) => {
  setBarberos(barberos.map((barbero) => {
    if (barbero.nombre === nombre) {
      return { ...barbero, disponible: !barbero.disponible }
    }
    return barbero
  }))
}

  return (
    <div>
      <h1>Barberos</h1>
      {barberos.map((barbero) => (
        <div key={barbero.nombre}>
          <p>{barbero.nombre} - {barbero.disponible ? "Disponible" : "Ocupado"}</p>
          <button onClick={() => cambiarDisponibilidad(barbero.nombre)}>
            {barbero.disponible ? "Marcar ocupado" : "Marcar disponible"}
          </button>
        </div>
      ))}
    </div>
  )
}
