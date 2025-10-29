import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const areas = [
  "Stonebriar",
  "Panther Creek",
  "Newman Village",
  "Little Elm",
  "The Colony",
  "Plano",
  "McKinney",
  "Prosper"
];

export default function ServiceAreas() {
  return (
    <section className="py-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#101820] mb-4">
            Proudly Serving Frisco & Surrounding Areas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fast, reliable junk removal across North Dallas
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {areas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-2 bg-gradient-to-r from-[#00C2A8]/10 to-[#00C2A8]/5 px-6 py-3 rounded-full border border-[#00C2A8]/20 hover:border-[#00C2A8] transition-colors duration-300"
              >
                <MapPin className="w-4 h-4 text-[#00C2A8]" />
                <span className="font-medium text-[#101820]">{area}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-gray-600 mt-8"
          >
            Don't see your area? <span className="font-semibold text-[#00C2A8]">Call us at (469) 555-0149</span> — we may still be able to help!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}