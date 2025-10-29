import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Clock, Truck } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: MessageCircle,
    title: "Text/Call with Items",
    description: "Quick description of what you need hauled—photos help but aren't required"
  },
  {
    number: "2",
    icon: Clock,
    title: "2-Hour Arrival Window & On-Site Quote",
    description: "We arrive on time, assess the job, and give you a firm price before we start"
  },
  {
    number: "3",
    icon: Truck,
    title: "We Haul & Sweep",
    description: "Our team does all the heavy lifting, loads the truck, and leaves your space clean"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#101820] mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple, transparent, and stress-free—from call to clean-up
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#00C2A8]/20 via-[#00C2A8] to-[#00C2A8]/20 transform -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-[#F5F7FA] rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* Step Number Badge */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-[#00C2A8] rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xl">{step.number}</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center pt-6 space-y-4">
                    <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-md">
                      <step.icon className="w-10 h-10 text-[#00C2A8]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#101820]">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}