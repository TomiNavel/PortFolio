"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const ProjectLinks = ({ enlaces, titulo }) => {
    const router = useRouter();

    if (!enlaces) return null;

    const handleRequestCode = () => {
        const predefinedMessage = `Hola, estoy interesado en el código fuente del proyecto: ${titulo}`;
        router.push(`/?mensaje=${encodeURIComponent(predefinedMessage)}#contact`);
    };

    return (
        <section className="w-full py-10 px-6">
            <h2 className="text-2xl font-bold text-center mb-6">
                Enlaces Relacionados
            </h2>
            <div className="flex justify-center gap-4">
                {enlaces.demo && (
                    <motion.a
                        href={enlaces.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-blue-500 px-6 py-3 rounded-lg text-white text-lg font-medium hover:bg-green-600 transition"
                    >
                        Ver Demo
                    </motion.a>
                )}
                {enlaces.repositorio && (
                    <motion.button
                        onClick={handleRequestCode}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-blue-700 px-6 py-3 rounded-lg text-white text-lg font-medium hover:bg-gray-600 transition"
                    >
                        Código Fuente
                    </motion.button>
                )}
            </div>
        </section>
    );
};

export default ProjectLinks;
