import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const handleCallClick = () => {
    // Track GA4 event
    if (window.gtag) {
      window.gtag('event', 'jj_tel_click', {
        event_category: 'engagement',
        event_label: 'hero_call_button'
      });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-[#101820] via-[#1a2633] to-[#101820] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300C2A8' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8">

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Frisco Junk Removal —{" "}
                <span className="text-[#00C2A8]">Today or Tomorrow</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                We lift, load, and dispose. Upfront pricing. Clean finish.
              </p>
            </div>

            {/* Trust Bullets */}
            <div className="flex flex-wrap gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#00C2A8]" />
                <span>Locally operated</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#00C2A8]" />
                <span>Licensed & insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#00C2A8]" />
                <span>No-sweat heavy lifting</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:4695550149" 
              // onClick={handleCallClick}
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#00C2A8] hover:bg-[#00a890] text-white text-lg px-8 py-6 shadow-lg shadow-[#00C2A8]/30 transition-all hover:shadow-[#00C2A8]/50 hover:scale-105">

                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: (469) 555-0149
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline" className="bg-transparent text-white px-8 py-6 text-lg font-medium rounded-md inline-flex items-center justify-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-sm h-10 w-full sm:w-auto border-2 border-[#00C2A8] hover:bg-[#00C2A8] hover:text-white hover:scale-105 active:scale-100 active:bg-[#00a890] transition-all duration-200"

                onClick={() => {
                  document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                }}>

                <MessageSquare className="w-5 h-5 mr-2" />
                Get a Fast Quote
              </Button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block">

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                alt="JunkJet Pros team loading junk"
                className="w-full h-[500px] object-cover"
                loading="eager" />

              <div className="absolute inset-0 bg-gradient-to-t from-[#101820]/60 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#00C2A8] text-white px-6 py-4 rounded-xl shadow-xl">
              <div className="text-sm font-medium">Same-day available</div>
              <div className="text-2xl font-bold">Ready Today</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}