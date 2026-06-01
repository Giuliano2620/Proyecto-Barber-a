"use client"

import { useState, useEffect } from "react"
import Servicios from "./Servicio"
import Barberos from "./Barberos"

export default function Home() {
  const [barberos, setBarberos] = useState<string[]>([])

  useEffect(() => {
    setBarberos(["Juan", "Giuliano", "Juancho"])
  }, [])

  return (
    <div>
      <h1>Baez Zone</h1>
      {barberos.map((barbero) => (
        <p key={barbero}>{barbero}</p>
      ))}
      <Servicios />
      <Barberos />
    </div>
  )
}