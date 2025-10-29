import React from "react";
import { motion } from "framer-motion";
import { Home, Sofa, Refrigerator, TreeDeciduous, Briefcase, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Home,
    title: "Garage & Attic Clean-outs",
    description: "Clear decades of accumulated items with our efficient team"
  },
  {
    icon: Sofa,
    title: "Furniture & Mattress Removal",
    description: "Haul away old couches, beds, and heavy furniture pieces"
  },
  {
    icon: Refrigerator,
    title: "Appliance Recycling",
    description: "Eco-friendly disposal of washers, dryers, refrigerators, and more"
  },
  {
    icon: TreeDeciduous,
    title: "Yard Waste & Debris",
    description: "Remove branches, leaves, and landscaping materials"
  },
  {
    icon: Briefcase,
    title: "Office & Storage Clean-outs",
    description: "Commercial junk removal for businesses and storage units"
  },
  {
    icon: Truck,
    title: "Curbside Pickup Discount",
    description: "Save money when items are already at the curb—quick and easy"
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#101820] mb-4">
            What We Haul
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From single items to full property clean-outs, we handle it all
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white group">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#00C2A8]/10 flex items-center justify-center group-hover:bg-[#00C2A8] transition-colors duration-300">
                      <service.icon className="w-8 h-8 text-[#00C2A8] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-[#101820]">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}