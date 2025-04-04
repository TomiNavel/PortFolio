"use client";

import { useState, useCallback, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import type { FormState } from "@/types/types";
import {
  Typography,
  Card,
  CardBody,
  Textarea,
  Button,
} from "@material-tailwind/react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import FormInput from "@/components/FormInput";
import { useSearchParams } from "next/navigation";

export function ContactForm() {
  return (
    <Suspense fallback={<div>Cargando formulario...</div>}>
      <ContactFormContent />
    </Suspense>
  );
}

function ContactFormContent() {
  const searchParams = useSearchParams();
  const defaultMessage = searchParams.get("mensaje") || "";
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    message: defaultMessage,
  });

  useEffect(() => {
    if (defaultMessage) {
      setForm((prev) => ({ ...prev, message: defaultMessage }));
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  }, [defaultMessage]);

  const validateField = (name: keyof FormState, value: string): string => {
    if (!value.trim()) return "Este campo es obligatorio";
    if (name === "email" && !value.includes("@")) return "Correo inválido";
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

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      setErrors((prev) => ({
        ...prev,
        [e.target.name]: validateField(
          e.target.name as keyof FormState,
          e.target.value
        ),
      }));
    },
    []
  );

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
        <Typography
          variant="h2"
          color="blue-gray"
          className="mb-4"
          {...({} as any)}
        >
          Contacto
        </Typography>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Card
          shadow={true}
          className="max-w-4xl w-full mx-auto border border-border"
          {...({} as any)}
        >
          <CardBody
            className="grid grid-cols-1 lg:grid-cols-7 gap-10 px-6 lg:px-12"
            {...({} as any)}
          >
            <div className="w-full col-span-3 rounded-lg h-full py-8 px-8 bg-foreground text-background text-center lg:text-left space-y-6">
              <Typography
                variant="h4"
                className="text-muted text-2xl font-semibold"
                {...({} as any)}
              >
                Información de contacto
              </Typography>
              <div className="flex items-center gap-4 justify-center lg:justify-start border-b border-white/20 pb-4">
                <EnvelopeIcon className="h-7 w-7 min-w-[28px] text-muted transition-transform hover:scale-105 flex-shrink-0" />
                <Typography
                  variant="h6"
                  className="text-muted text-lg font-medium break-words max-w-[80%] lg:max-w-full"
                  {...({} as any)}
                >
                  hola@tominavel.com
                </Typography>
              </div>
            </div>
            <motion.form
              onSubmit={handleSubmit}
              className="col-span-4 space-y-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <FormInput
                label="Nombre"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                error={errors.firstName}
                placeholder="Introduce tu nombre"
              />
              <FormInput
                label="Apellido"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                error={errors.lastName}
                placeholder="Introduce tu apellido"
              />
              <FormInput
                label="Correo electrónico"
                name="email"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
                placeholder="Introduce tu email"
              />
              <Textarea
                label="Tu mensaje"
                name="message"
                value={form.message}
                onChange={handleChange}
                className="mb-4"
                {...({} as any)}
              />
              {submitted && (
                <motion.p className="bg-[var(--accent)] text-[var(--accent-foreground)] px-4 py-2 rounded-md text-center">
                  ¡Mensaje enviado con éxito!
                </motion.p>
              )}
              <Button
                type="submit"
                className="w-full md:w-fit hover:bg-gray-800 transition-colors"
                {...({} as any)}
              >
                Enviar
              </Button>
            </motion.form>
          </CardBody>
        </Card>
      </motion.div>
    </section>
  );
}

export default ContactForm;
