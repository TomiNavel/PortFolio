"use client";

import { motion } from "framer-motion";

const ProjectTech = ({ tecnologias }) => {
    if (!tecnologias || Object.keys(tecnologias).length === 0) return null;

    // Filtrar categorías vacías
    const categoriasFiltradas = Object.entries(tecnologias).filter(
        ([, techList]) => techList.length > 0
    );

    if (categoriasFiltradas.length === 0) return null;

    return (
        <section className="w-full py-10 px-6">
            <h2 className="text-2xl font-bold text-center mb-6">
                Tecnologías Utilizadas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoriasFiltradas.map(([categoria, techList], index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-gray-100 p-4 rounded-lg shadow-md"
                    >
                        <h3 className="text-lg font-semibold mb-3 capitalize">
                            {categoria.replace(/([A-Z])/g, " $1")}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {techList.map((tech, i) => (
                                <motion.span
                                    key={i}
                                    className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm font-medium"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ProjectTech;
