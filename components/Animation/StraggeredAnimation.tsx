"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

// Variants for the parent container (staggered animation)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren", // Ensure the parent animation starts before children
      staggerChildren: 0.3, // Stagger delay between each child
    },
  },
};

// Variants for each child item (slide in from right to left)
const itemVariants: Variants = {
  hidden: { opacity: 0, x: 50 }, // Start off-screen to the right
  visible: { opacity: 1, x: 0 }, // Animate to the center
};

export const StaggeredListComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the component is in view
      variants={containerVariants}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          transition={{ duration: 0.5 }} // Animation duration for each item
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};
