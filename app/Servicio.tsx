"use client"

import { useState } from "react"

export default function Servicios() {
  const [total, setTotal] = useState(0)

    const servicios = [
    { nombre: "Corte", precio: 2000 },
    { nombre: "Barba", precio: 1500 },
    { nombre: "Degradé", precio: 2500 },
    { nombre: "Cejas", precio: 1000 },
  ]

  return (
    <div>
      <h1>Total: ${total}</h1>  
      { servicios.map((servicio) => (
        <div key={servicio.nombre}>
          <p>{servicio.nombre} - ${servicio.precio}</p>
          <button onClick={() => setTotal(total + servicio.precio)}>
            Agregar
          </button>
          </div>
      ))}
    </div>
  )
}