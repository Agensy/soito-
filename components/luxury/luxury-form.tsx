"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import type { ReactNode } from "react"

interface FormField {
  name: string
  label: string
  type: "text" | "email" | "tel" | "textarea"
  placeholder: string
  required: boolean
}

interface LuxuryFormProps {
  title: string
  subtitle: string
  fields: FormField[]
  submitLabel: string
  submitIcon?: ReactNode
  onSubmit: (formData: FormData) => void
}

export function LuxuryForm({ title, subtitle, fields, submitLabel, submitIcon, onSubmit }: LuxuryFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    onSubmit(formData)
  }

  return (
    <div className="luxury-glass rounded-2xl p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-light text-white mb-2 tracking-wide">{title}</h3>
        <p className="text-gray-300 font-light">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {fields.map((field) => (
          <div key={field.name} className="space-y-2">
            <Label htmlFor={field.name} className="text-gray-300 font-light">
              {field.label}
            </Label>
            {field.type === "textarea" ? (
              <Textarea
                id={field.name}
                name={field.name}
                placeholder={field.placeholder}
                required={field.required}
                className="luxury-input bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                rows={4}
              />
            ) : (
              <Input
                id={field.name}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                required={field.required}
                className="luxury-input bg-white/5 border-white/10 text-white placeholder:text-gray-400"
              />
            )}
          </div>
        ))}

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-[#BFA86B] to-[#D4C08A] text-black hover:from-[#D4C08A] hover:to-[#BFA86B] font-medium py-3"
        >
          {submitIcon}
          {submitLabel}
        </Button>
      </form>
    </div>
  )
}
