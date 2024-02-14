"use client";

import { motion } from "framer-motion";
import React from "react";

import { summaryMock } from "@/common/mocks/summary";

interface SummaryProps {}

export default function Summary({}: SummaryProps) {
  const paragraphs = Object.values(summaryMock);
  return (
    <section>
      <div className="space-y-4 leading-[1.4] text-neutral-800 dark:text-neutral-300 md:leading-[1.6] text-justify">
        {paragraphs.map((item: string, index: number) => (
          <motion.div
            key={index}
            initial={{ x: 12, opacity: 0, scale: 0.9 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <p>{item}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
