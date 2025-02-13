'use client'

import { motion } from "framer-motion"

export const RotateScaleUpEntraceComponent = ({ children }: Readonly<{ children: React.ReactNode; }>) => (
    <motion.div
        initial={{ opacity: 0.5, scale: 1.9, rotate:-20 }}
        animate={{ opacity: 1, scale: 1, rotate:0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
    >
        {children}
    </motion.div>
)