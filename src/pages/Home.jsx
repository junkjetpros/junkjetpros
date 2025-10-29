import React, { useEffect } from "react";
import Hero from "../components/junkjet/Hero";
import Services from "../components/junkjet/Services";
import HowItWorks from "../components/junkjet/HowItWorks";
import PricingGuide from "../components/junkjet/PricingGuide";
import ServiceAreas from "../components/junkjet/ServiceAreas";
import FAQ from "../components/junkjet/FAQ";
import LeadForm from "../components/junkjet/LeadForm";
import MobileCallButton from "../components/junkjet/MobileCallButton";

export default function Home() {
  useEffect(() => {
    // GA4 placeholder - will be configured with actual ID
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    // gtag('config', 'GA4_MEASUREMENT_ID'); // Insert actual GA4 ID here
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <HowItWorks />
      <PricingGuide />
      <ServiceAreas />
      <FAQ />
      <LeadForm />
      <MobileCallButton />
    </div>
  );
}