"use client";

import { motion } from "framer-motion";

export const SlideFromTopComponent = ({ children }: Readonly<{ children: React.ReactNode }>) => (
    <motion.div
        initial={{ opacity: 0, scale: 1, x: "0", y: "50%" }}
        whileInView={{ opacity: 1, scale: 1, x: "0", y: "0" }}
        exit={{ opacity: 1, scale: 1, x: "0", y: "0" }}
        viewport={{ amount: 0.5, once: true }} transition={{ duration: 1 }}>
      {children}
    </motion.div>
);
