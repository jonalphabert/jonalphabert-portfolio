'use client'

import { motion } from "framer-motion"

export const SlideFromLeftComponet = ({ children }: Readonly<{ children: React.ReactNode; }>) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.5, x: "-50%", y: 0 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
    >
        {children}
    </motion.div>
)