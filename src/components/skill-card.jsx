"use client";

import PropTypes from "prop-types";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion"; // Importamos Framer Motion

export function SkillCard({ icon: Icon, title, children, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Estado inicial: invisible y desplazado abajo
      animate={{ opacity: 1, y: 0 }} // Estado final: visible y en su lugar
      transition={{ duration: 0.5, ease: "easeOut" }} // Duración de la animación
    >
      <Card
        color="transparent"
        shadow={false}
        className={`transition-all duration-300 ease-in-out hover:scale-105 ${className}`}
      >
        <CardBody className="grid justify-center text-center">
          <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
            <Icon className="h-6 w-6" strokeWidth={2} />
          </div>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography className="px-8 font-normal !text-gray-500">
            {children}
          </Typography>
        </CardBody>
      </Card>
    </motion.div>
  );
}

SkillCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default SkillCard;
