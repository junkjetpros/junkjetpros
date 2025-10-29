import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, CheckCircle2, Loader2 } from "lucide-react";
import { base44 } from "@/api/base44Client";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    zip: "",
    items: ""
  });
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhoto(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let photoUrl = null;
      
      // Upload photo if provided
      if (photo) {
        const uploadResult = await base44.integrations.Core.UploadFile({ file: photo });
        photoUrl = uploadResult.file_url;
      }

      // Prepare webhook payload
      const payload = {
        name: formData.name,
        phone: formData.phone,
        zip: formData.zip,
        items: formData.items,
        photo_url: photoUrl,
        timestamp: new Date().toISOString(),
        source: "frisco.junkjetpros.com"
      };

      // Send to webhook (replace with actual webhook URL)
      await fetch("YOUR_WEBHOOK_URL_HERE", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // Track GA4 event
      if (window.gtag) {
        window.gtag('event', 'jj_form_submit', {
          event_category: 'lead',
          event_label: 'quote_form'
        });
      }

      setIsSuccess(true);
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please call us at (469) 555-0149");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="quote-form" className="py-20 bg-gradient-to-br from-[#00C2A8] to-[#00a890]">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-2xl p-12 text-center"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-[#101820] mb-4">
              Got it! We're on it.
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              Our dispatcher will text or call you in 2–3 minutes
            </p>
            <p className="text-gray-500">
              Need immediate help? Call <a href="tel:4695550149" className="text-[#00C2A8] font-semibold">(469) 555-0149</a>
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="quote-form" className="py-20 bg-gradient-to-br from-[#101820] via-[#1a2633] to-[#101820]">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Your Fast Quote
          </h2>
          <p className="text-lg text-gray-300">
            Tell us what you need hauled—we'll respond in minutes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="border-none shadow-2xl bg-white">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#101820] font-semibold">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12 border-gray-300 focus:border-[#00C2A8]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#101820] font-semibold">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      placeholder="(469) 555-0123"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12 border-gray-300 focus:border-[#00C2A8]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="zip" className="text-[#101820] font-semibold">
                    ZIP Code
                  </Label>
                  <Input
                    id="zip"
                    type="text"
                    required
                    placeholder="75034"
                    value={formData.zip}
                    onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                    className="h-12 border-gray-300 focus:border-[#00C2A8]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="items" className="text-[#101820] font-semibold">
                    What needs to be removed?
                  </Label>
                  <Textarea
                    id="items"
                    required
                    placeholder="Old couch, refrigerator, boxes in garage..."
                    value={formData.items}
                    onChange={(e) => setFormData({ ...formData, items: e.target.value })}
                    className="min-h-32 border-gray-300 focus:border-[#00C2A8]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="photo" className="text-[#101820] font-semibold">
                    Photo (optional but helpful)
                  </Label>
                  <div className="relative">
                    <input
                      id="photo"
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="photo"
                      className="flex items-center justify-center gap-2 w-full h-32 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#00C2A8] transition-colors cursor-pointer"
                    >
                      {photoPreview ? (
                        <img src={photoPreview} alt="Preview" className="h-full object-contain rounded-lg" />
                      ) : (
                        <div className="text-center">
                          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-500">Click to upload a photo</p>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-[#00C2A8] hover:bg-[#00a890] text-white text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Get My Quote"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}