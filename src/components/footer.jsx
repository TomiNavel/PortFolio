"use client";

import { Button } from "@material-tailwind/react";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white text-center p-4">
      <p>&copy; {new Date().getFullYear()} TomiNavel</p>
      <Button className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">
        Suscribirse
      </Button>
      <p>
        Read my{" "}
        <a href="#" className="font-medium underline transition-colors hover:text-gray-400">
          Terms and Conditions
        </a>
      </p>
    </footer>
  );
};

export default Footer;
