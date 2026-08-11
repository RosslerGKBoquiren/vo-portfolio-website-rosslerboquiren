"use client"

import { useActionState, useEffect, useRef } from "react"
import { useFormStatus } from "react-dom"
import { CheckCircle2, Loader2, Send, AlertCircle } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { submitContact, type ContactState } from "@/app/actions/contact"

const initialState: ContactState = { status: "idle", message: "" }

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          Sending…
        </>
      ) : (
        <>
          <Send className="size-4" aria-hidden="true" />
          Send message
        </>
      )}
    </Button>
  )
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  // Show toast + reset the form on success.
  useEffect(() => {
    if (state.status === "success") {
      toast.success(state.message)
      formRef.current?.reset()
    } else if (state.status === "error" && !state.errors) {
      toast.error(state.message)
    }
  }, [state])

  return (
    <form ref={formRef} action={formAction} noValidate className="space-y-5">
      {/* Success banner (persistent, in addition to the toast) */}
      {state.status === "success" && (
        <div
          role="status"
          className="flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm text-foreground"
        >
          <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
          <p>{state.message}</p>
        </div>
      )}

      {/* Error banner for general (non-field) errors */}
      {state.status === "error" && !state.errors && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-foreground"
        >
          <AlertCircle className="mt-0.5 size-5 shrink-0 text-destructive" aria-hidden="true" />
          <p>{state.message}</p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Your name"
            required
            aria-invalid={Boolean(state.errors?.name)}
            aria-describedby={state.errors?.name ? "name-error" : undefined}
          />
          {state.errors?.name && (
            <p id="name-error" className="text-sm text-destructive">
              {state.errors.name}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            aria-invalid={Boolean(state.errors?.email)}
            aria-describedby={state.errors?.email ? "email-error" : undefined}
          />
          {state.errors?.email && (
            <p id="email-error" className="text-sm text-destructive">
              {state.errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          rows={6}
          placeholder="How can I help?"
          required
          aria-invalid={Boolean(state.errors?.message)}
          aria-describedby={state.errors?.message ? "message-error" : undefined}
        />
        {state.errors?.message && (
          <p id="message-error" className="text-sm text-destructive">
            {state.errors.message}
          </p>
        )}
      </div>

      {/* Honeypot field — hidden from users, ignored by them, filled by bots. */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <SubmitButton />
    </form>
  )
}
