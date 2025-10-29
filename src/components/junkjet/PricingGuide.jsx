import React from "react";
import { motion } from "framer-motion";
import { DollarSign, Package, Truck } from "lucide-react";

export default function PricingGuide() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#101820] to-[#1a2633] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            No surprises—you'll know the cost before we start
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-[#00C2A8]/30"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#00C2A8] rounded-full flex items-center justify-center flex-shrink-0">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#00C2A8] mb-2">
                  $109–$339
                </h3>
                <p className="text-white font-semibold mb-2">Small Loads</p>
                <p className="text-gray-300">
                  Single items, partial clean-outs, curbside pickups
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-[#00C2A8]/30"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#00C2A8] rounded-full flex items-center justify-center flex-shrink-0">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#00C2A8] mb-2">
                  $340–$700
                </h3>
                <p className="text-white font-semibold mb-2">Larger Clean-Outs</p>
                <p className="text-gray-300">
                  Full garage, multiple rooms, estate clean-outs
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#00C2A8]/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-[#00C2A8]/30"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-[#00C2A8] rounded-full flex items-center justify-center flex-shrink-0">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-2">
                Final Quote On Arrival—No Obligation
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Pricing is based on volume and access. We provide an exact quote before we start. 
                If you're not happy with the price, we'll leave—no charge, no pressure.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}