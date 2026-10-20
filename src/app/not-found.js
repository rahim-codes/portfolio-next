import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center gap-6 px-4 py-24 text-center">
      <div className="bg-glow pointer-events-none absolute inset-0" />
      <p className="text-gradient-neon relative text-7xl font-semibold tracking-tight">
        404
      </p>
      <div className="relative flex flex-col items-center gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">
          This page took a wrong turn
        </h1>
        <p className="max-w-sm text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
      </div>
      <Button render={<Link href="/" />} className="glow-neon">
        Back to home
      </Button>
    </div>
  )
}
