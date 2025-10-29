import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly can you come out?",
    answer: "Most Frisco jobs can be scheduled for same-day or next-day service. Call or text us, and we'll find the earliest available 2-hour window that works for you."
  },
  {
    question: "Do I need to help with the lifting?",
    answer: "Not at all! Our crew handles all the heavy lifting, loading, and hauling. You just point out what needs to go, and we take care of the rest."
  },
  {
    question: "What items can't you take?",
    answer: "We can't haul hazardous materials like chemicals, paint, asbestos, or medical waste. If you're unsure about an item, just ask—we'll let you know right away if we can handle it."
  },
  {
    question: "How do you determine the price?",
    answer: "Pricing is based on the volume of junk (how much truck space it takes) and accessibility (stairs, distance from truck, etc.). We provide a firm quote on-site before we start work—no hidden fees."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes! JunkJet Pros is fully licensed and insured. We carry liability insurance to protect your property, and we're committed to safe, professional service on every job."
  }
];

export default function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#101820] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about our service
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[#F5F7FA] rounded-xl border-none px-6 data-[state=open]:bg-white data-[state=open]:shadow-lg transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-[#101820] hover:text-[#00C2A8] transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}