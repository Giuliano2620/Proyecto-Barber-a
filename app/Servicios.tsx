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
    <div className="bg-gray-900 rounded-xl p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4">Servicios</h2>
      <p className="text-2xl font-bold text-green-400 mb-6">Total: ${total}</p>
      {servicios.map((servicio) => (
        <div key={servicio.nombre} className="flex justify-between items-center mb-3">
          <p className="text-lg">{servicio.nombre} - ${servicio.precio}</p>
          <button
            onClick={() => setTotal(total + servicio.precio)}
            className="bg-white text-black px-4 py-2 rounded-lg font-bold hover:bg-gray-200"
          >
            Agregar
          </button>
        </div>
      ))}
    </div>
  )
}