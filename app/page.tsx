"use client"

import { useState, useEffect } from "react"
import Servicios from "./Servicios"
import Barberos from "./Barberos"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Barbería Don Juan
      </h1>
      <Servicios />
      <Barberos />
    </main>
  )
}