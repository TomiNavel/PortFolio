"use client";

import { useState, useCallback, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import type { FormState } from "@/types/types";
import { useTranslation } from "@/hooks/useTranslation";
import {
  Typography,
  Card,
  CardBody,
  Textarea,
  Button,
} from "@material-tailwind/react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import FormInput from "@/components/FormInput";

export function ContactForm() {
  return (
    <Suspense fallback={<div>Cargando formulario...</div>}>
      <ContactFormContent />
    </Suspense>
  );
}

function ContactFormContent() {
  const t = useTranslation("contact");
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const validateField = (name: keyof FormState, value: string): string => {
    if (!value.trim()) return t("errors.required");
    if (name === "email" && !value.includes("@"))
      return t("errors.invalidEmail");
    return "";
  };

  const validateForm = () => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};
    (Object.keys(form) as (keyof FormState)[]).forEach((field) => {
      const error = validateField(field, form[field]);
      if (error) newErrors[field] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: validateField(
        e.target.name as keyof FormState,
        e.target.value
      ),
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      console.log("Correo enviado correctamente");
      setForm({ firstName: "", lastName: "", email: "", message: "" });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } else {
      console.error("Error enviando el correo");
    }
  };

  return (
    <section id="contact" className="px-8 py-8">
      <div className="container mx-auto mb-6 text-center">
        <Typography variant="h2" className="mb-4" {...({} as any)}>
          {t("title")}
        </Typography>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Card
          shadow={true}
          className="max-w-4xl w-full mx-auto border border-border bg-card text-card-foreground"
          {...({} as any)}
        >
          <CardBody
            className="grid grid-cols-1 lg:grid-cols-7 gap-10 px-6 lg:px-12"
            {...({} as any)}
          >
            <div className="w-full col-span-5 max-w-sm lg:max-w-full py-8 px-8 bg-panel text-panel-foreground text-center lg:text-left space-y-6">
              <div className="flex items-center gap-4 justify-center lg:justify-start border-b border-white/20">
                <EnvelopeIcon className="h-7 w-7 min-w-[28px] text-muted-foreground transition-transform hover:scale-105 flex-shrink-0" />
                <Typography
                  variant="h6"
                  className="text-muted-foreground text-lg font-medium break-words max-w-[80%] lg:max-w-full"
                  {...({} as any)}
                >
                  hola@tominavel.com
                </Typography>
              </div>
            </div>
            <motion.form
              onSubmit={handleSubmit}
              className="col-span-5 space-y-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <FormInput
                label={t("firstName.label")}
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                error={errors.firstName}
                placeholder={t("firstName.placeholder")}
              />
              <FormInput
                label={t("lastName.label")}
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                error={errors.lastName}
                placeholder={t("lastName.placeholder")}
              />
              <FormInput
                label={t("email.label")}
                name="email"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
                placeholder={t("email.placeholder")}
              />
              <Textarea
                label={t("message.label")}
                name="message"
                value={form.message}
                onChange={handleChange}
                className="mb-4"
                {...({} as any)}
              />
              {submitted && (
                <motion.p className="bg-[var(--accent)] text-[var(--accent-foreground)] px-4 py-2 rounded-md text-center">
                  {t("sent")}
                </motion.p>
              )}
              <Button
                type="submit"
                className="w-full md:w-fit bg-accent text-accent-foreground hover:bg-accent/80 transition-colors"
                {...({} as any)}
              >
                {t("send")}
              </Button>
            </motion.form>
          </CardBody>
        </Card>
      </motion.div>
    </section>
  );
}

export default ContactForm;
