"use client";

import { motion } from "framer-motion";

const columns = [
  {
    title: "Top Notes",
    notes: ["Siberian Pine", "Black Spruce", "Bergamot"]
  },
  {
    title: "Heart Notes",
    notes: ["Vetiver", "Cedarwood", "Forest Moss"]
  },
  {
    title: "Base Notes",
    notes: ["Oud", "Dark Amber", "Black Musk"]
  }
];

export default function FragranceNotes() {
  return (
    <section className="bg-void px-4 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 border-y border-gold/15 md:grid-cols-3">
        {columns.map((column, index) => (
          <motion.div
            key={column.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ delay: index * 0.15, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="border-gold/20 py-10 md:border-l md:px-10 first:md:border-l-0"
          >
            <h2 className="font-display text-3xl italic tracking-[0.08em] text-gold">{column.title}</h2>
            <div className="my-8 h-px w-full bg-gold/20" />
            <ul className="space-y-5">
              {column.notes.map((note) => (
                <li key={note} className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
                  {note}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
