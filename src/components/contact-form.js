"use client"

import * as React from "react"
import { CheckIcon, CopyIcon, SendIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { site } from "@/lib/data/site"

const initialForm = { name: "", email: "", subject: "", message: "" }

export function ContactForm() {
  const [form, setForm] = React.useState(initialForm)
  const [error, setError] = React.useState("")
  const [sent, setSent] = React.useState(false)
  const [copied, setCopied] = React.useState(false)

  const update = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
    setError("")
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!form.name.trim() || !form.message.trim()) {
      setError("Please fill in your name and a short message.")
      return
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("That email address doesn't look right.")
      return
    }

    const subject = form.subject.trim() || `Portfolio inquiry from ${form.name.trim()}`
    const body = [
      `Name: ${form.name.trim()}`,
      form.email.trim() ? `Email: ${form.email.trim()}` : null,
      "",
      form.message.trim(),
    ]
      .filter((line) => line !== null)
      .join("\n")

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`

    setSent(true)
    setForm(initialForm)
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${site.email}`
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Your name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Jane Doe"
              value={form.name}
              onChange={update("name")}
              autoComplete="name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Your email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="jane@example.com"
              value={form.email}
              onChange={update("email")}
              autoComplete="email"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="subject">Subject</Label>
          <Input
            id="subject"
            name="subject"
            placeholder="Front-end role / project inquiry"
            value={form.subject}
            onChange={update("subject")}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell me a bit about what you have in mind..."
            value={form.message}
            onChange={update("message")}
          />
        </div>

        {error ? (
          <p role="alert" className="text-sm text-destructive">
            {error}
          </p>
        ) : null}

        <div className="flex flex-wrap items-center gap-3">
          <Button type="submit" className="glow-neon">
            <SendIcon /> Send message
          </Button>
          <Button type="button" variant="outline" onClick={copyEmail}>
            {copied ? <CheckIcon /> : <CopyIcon />}
            {copied ? "Email copied" : site.email}
          </Button>
        </div>

        <p className="text-xs text-muted-foreground">
          {sent
            ? "Your email app should open with the message pre-filled. If it doesn't, email me directly at "
            : "This form opens your email app with everything pre-filled — no data is sent anywhere. You can also reach me at "}
          <a
            href={`mailto:${site.email}`}
            className="text-[var(--neon)] underline-offset-4 hover:underline"
          >
            {site.email}
          </a>
          .
        </p>
      </form>
    </div>
  )
}
