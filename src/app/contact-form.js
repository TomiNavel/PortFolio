"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Typography,
  Card,
  CardBody,
  Textarea,
  Button,
} from "@material-tailwind/react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import FormInput from "../components/FormInput";
import { useSearchParams } from "next/navigation";

export function ContactForm() {
  const searchParams = useSearchParams();
  const defaultMessage = searchParams.get("mensaje") || "";
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: defaultMessage,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateField = (name, value) => {
    if (!value.trim()) return "Este campo es obligatorio";
    if (name === "email" && !value.includes("@")) return "Correo inválido";
    return "";
  };

  const validateForm = () => {
    let newErrors = {};
    Object.keys(form).forEach((field) => {
      const error = validateField(field, form[field]);
      if (error) newErrors[field] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = useCallback((e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: validateField(e.target.name, e.target.value) }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

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
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Contacto
        </Typography>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Card shadow={true} className="max-w-4xl w-full mx-auto border border-gray-200">
          <CardBody className="grid grid-cols-1 lg:grid-cols-7 gap-10 px-6 lg:px-12">
            {/* Información de contacto */}
            <div className="w-full col-span-3 rounded-lg h-full py-8 px-8 bg-gray-900 text-white text-center lg:text-left space-y-6">
              <Typography variant="h4" className="text-white text-2xl font-semibold">
                Información de contacto
              </Typography>
              <div className="flex items-center gap-4 justify-center lg:justify-start border-b border-white/20 pb-4">
                <EnvelopeIcon className="h-7 w-7 min-w-[28px] text-gray-300 transition-transform hover:scale-105 flex-shrink-0" />
                <Typography
                  variant="h6"
                  className="text-gray-300 text-lg font-medium break-words max-w-[80%] lg:max-w-full"
                >
                  hola@tominavel.com
                </Typography>
              </div>
            </div>
            {/* Formulario */}
            <motion.form
              onSubmit={handleSubmit}
              className="col-span-4 space-y-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <FormInput label="Nombre" name="firstName" value={form.firstName} onChange={handleChange} error={errors.firstName} />
              <FormInput label="Apellido" name="lastName" value={form.lastName} onChange={handleChange} error={errors.lastName} />
              <FormInput label="Correo electrónico" name="email" value={form.email} onChange={handleChange} error={errors.email} />
              <Textarea label="Tu mensaje" name="message" value={form.message} onChange={handleChange} className="mb-4" />
              {submitted && <motion.p className="text-green-500 text-center">✅ ¡Mensaje enviado con éxito!</motion.p>}
              <Button type="submit" className="w-full md:w-fit hover:bg-gray-800 transition-colors">
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
