"use client"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { LuMoon as MoonIcon, LuSun as SunIcon } from "react-icons/lu"

const triggerClass = "inline-flex items-center justify-center rounded-sm px-3 py-1.5 text-sm font-medium text-muted-foreground ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"

function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div role="group" aria-label="Pilih tema" className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-muted p-1">
        <button
          type="button"
          onClick={() => setTheme("light")}
          aria-pressed={resolvedTheme === "light"}
          aria-label="Gunakan tema terang"
          title="Tema terang"
          className={`${triggerClass} ${resolvedTheme === "light" ? "bg-background text-foreground shadow-sm" : ""}`}
        >
          <SunIcon className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => setTheme("dark")}
          aria-pressed={resolvedTheme === "dark"}
          aria-label="Gunakan tema gelap"
          title="Tema gelap"
          className={`${triggerClass} ${resolvedTheme === "dark" ? "bg-background text-foreground shadow-sm" : ""}`}
        >
          <MoonIcon className="h-4 w-4 rotate-90 transition-all dark:rotate-0" />
        </button>
    </div>
  )
}

export default ThemeSwitcher
