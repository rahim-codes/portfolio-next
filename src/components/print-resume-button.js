"use client"

import { DownloadIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export function PrintResumeButton({ className }) {
  return (
    <Button variant="outline" className={className} onClick={() => window.print()}>
      <DownloadIcon /> Print / Save PDF
    </Button>
  )
}
