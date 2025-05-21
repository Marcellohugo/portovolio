'use client'

import { useState } from 'react'
import Preload from './Preload'

export default function PreloadWrapper({ children }: { children: React.ReactNode }) {
  const [started, setStarted] = useState(false)
  const handleStart = () => setStarted(true)

  // Until user clicks "Get Started", show Preload;
  // afterward, render children (Nav + page content)
  return !started ? <Preload onStart={handleStart} /> : <>{children}</>
}