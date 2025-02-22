
"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@damove.com",
      link: "mailto:info@damove.com",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "123 Party Street, Nightlife City, NC 12345",
      link: "https://maps.google.com",
    },
  ];

  return (
    <div className="min-h-screen bg-club-black">
      <Navigation />
      <div className="pt-32 pb-16 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-display font-bold text-club-light mb-4">
            Contact Us
          </h1>
          <p className="text-club-muted max-w-2xl mx-auto">
            Get in touch with us for bookings, inquiries, or any questions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((item) => (
                <a
                  key={item.title}
                  href={item.link}
                  className="glass-morphism p-6 rounded-xl flex items-center space-x-4 hover:border-primary/50 transition-colors"
                >
                  <item.icon className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-lg font-bold text-club-light">
                      {item.title}
                    </h3>
                    <p className="text-club-muted">{item.details}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-morphism p-8 rounded-xl"
          >
            <form className="space-y-6">
              <div>
                <label className="text-club-light block mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/10 text-club-light focus:outline-none focus:border-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-club-light block mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/10 text-club-light focus:outline-none focus:border-primary"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="text-club-light block mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/10 text-club-light focus:outline-none focus:border-primary h-32"
                  placeholder="Your message"
                ></textarea>
              </div>
              <Button className="neon-button border-primary text-primary hover:bg-primary w-full">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
