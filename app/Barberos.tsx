"use client"

import { useState, useEffect } from "react"

export default function Barberos() {
  const [barberos, setBarberos] = useState<any[]>([])

  useEffect(() => {
    fetch("http://localhost:3001/barberos")
      .then(res => res.json())
      .then(data => setBarberos(data))
  }, [])

  const cambiarDisponibilidad = (nombre: string) => {
    setBarberos(barberos.map((barbero) => {
      if (barbero.nombre === nombre) {
        return { ...barbero, disponible: !barbero.disponible }
      }
      return barbero
    }))
  }

  return (
    <div className="bg-gray-900 rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-4">Barberos</h2>
      {barberos.map((barbero) => (
        <div key={barbero.nombre} className="flex justify-between items-center mb-3">
          <p className="text-lg">
            {barbero.nombre} —{" "}
            <span className={barbero.disponible ? "text-green-400" : "text-red-400"}>
              {barbero.disponible ? "Disponible" : "Ocupado"}
            </span>
          </p>
          <button
            onClick={() => cambiarDisponibilidad(barbero.nombre)}
            className="bg-white text-black px-4 py-2 rounded-lg font-bold hover:bg-gray-200"
          >
            {barbero.disponible ? "Marcar ocupado" : "Marcar disponible"}
          </button>
        </div>
      ))}
    </div>
  )
}