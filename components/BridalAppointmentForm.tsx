"use client";

import { FormEvent, useState } from "react";

interface FormState {
  name: string;
  phone: string;
  email: string;
  weddingDate: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  weddingDate?: string;
}

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  weddingDate: "",
  message: "",
};

export const BridalAppointmentForm = () => {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!values.phone.trim()) {
      nextErrors.phone = "Please enter a phone number.";
    }

    if (!values.email.trim()) {
      nextErrors.email = "Please enter an email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!values.weddingDate) {
      nextErrors.weddingDate = "Please select your wedding date.";
    }

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const validation = validate();
    setErrors(validation);

    if (Object.keys(validation).length === 0) {
      setSubmitted(true);
      // TODO: Connect this form to your backend, email service, or form provider.
    }
  };

  const handleChange = (
    field: keyof FormState,
    value: string,
  ) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <form
      className="card-silk space-y-4 p-5 text-sm text-maroon/90"
      noValidate
      onSubmit={handleSubmit}
      aria-label="Bridal appointment request form"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-semibold uppercase tracking-[0.18em] text-maroon/80"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            className="mt-1 w-full rounded-lg border border-maroon/20 bg-white/80 px-3 py-2 text-sm outline-none focus:border-maroon focus:ring-1 focus:ring-maroon/50"
            placeholder="Your full name"
            value={values.name}
            onChange={(e) => handleChange("name", e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p
              id="name-error"
              className="mt-1 text-xs text-[#b91c1c]"
            >
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-semibold uppercase tracking-[0.18em] text-maroon/80"
          >
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            required
            className="mt-1 w-full rounded-lg border border-maroon/20 bg-white/80 px-3 py-2 text-sm outline-none focus:border-maroon focus:ring-1 focus:ring-maroon/50"
            placeholder="(408) 000-0000"
            value={values.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p
              id="phone-error"
              className="mt-1 text-xs text-[#b91c1c]"
            >
              {errors.phone}
            </p>
          )}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold uppercase tracking-[0.18em] text-maroon/80"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            className="mt-1 w-full rounded-lg border border-maroon/20 bg-white/80 px-3 py-2 text-sm outline-none focus:border-maroon focus:ring-1 focus:ring-maroon/50"
            placeholder="you@example.com"
            value={values.email}
            onChange={(e) => handleChange("email", e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p
              id="email-error"
              className="mt-1 text-xs text-[#b91c1c]"
            >
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="weddingDate"
            className="block text-xs font-semibold uppercase tracking-[0.18em] text-maroon/80"
          >
            Wedding Date
          </label>
          <input
            id="weddingDate"
            type="date"
            required
            className="mt-1 w-full rounded-lg border border-maroon/20 bg-white/80 px-3 py-2 text-sm outline-none focus:border-maroon focus:ring-1 focus:ring-maroon/50"
            value={values.weddingDate}
            onChange={(e) => handleChange("weddingDate", e.target.value)}
            aria-invalid={!!errors.weddingDate}
            aria-describedby={
              errors.weddingDate ? "weddingDate-error" : undefined
            }
          />
          {errors.weddingDate && (
            <p
              id="weddingDate-error"
              className="mt-1 text-xs text-[#b91c1c]"
            >
              {errors.weddingDate}
            </p>
          )}
        </div>
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-xs font-semibold uppercase tracking-[0.18em] text-maroon/80"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="mt-1 w-full rounded-lg border border-maroon/20 bg-white/80 px-3 py-2 text-sm outline-none focus:border-maroon focus:ring-1 focus:ring-maroon/50"
          placeholder="Tell us about your ceremonies, colors and inspirations."
          value={values.message}
          onChange={(e) => handleChange("message", e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-maroon px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cream shadow-md hover:bg-[#5c1515] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/80 focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
      >
        Submit Request (Demo)
      </button>
      <p className="text-xs text-maroon/70">
        This is a demo form. Connect it to your preferred form handler or email
        service before going live.
      </p>
      {submitted && (
        <p className="text-xs text-emerald-700">
          Thank you! Your request has been captured for this demo.
        </p>
      )}
    </form>
  );
};
