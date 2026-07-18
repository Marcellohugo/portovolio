"use client"
import { useTheme } from "next-themes"
import React, { useEffect, useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/Tabs"
import { MoonIcon, SunIcon } from "lucide-react"

function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Tabs value={resolvedTheme} onValueChange={setTheme}>
      <TabsList className="border border-border bg-muted">
        <TabsTrigger value="light" aria-label="Gunakan tema terang" title="Tema terang">
          <SunIcon className="h-4 w-4" />
        </TabsTrigger>
        <TabsTrigger value="dark" aria-label="Gunakan tema gelap" title="Tema gelap">
          <MoonIcon className="h-4 w-4 rotate-90 transition-all dark:rotate-0" />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

export default ThemeSwitcher
