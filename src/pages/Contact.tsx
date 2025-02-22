"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-club-black">
      <Navigation />
      <div className="pt-32 pb-16 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-display font-bold text-club-light mb-8">
            Contact Us
          </h1>
          <p className="text-club-muted text-lg mb-8">
            We'd love to hear from you!
          </p>
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-4">
              <Phone className="h-6 w-6 text-primary" />
              <a
                href="tel:+15551234567"
                className="text-club-light hover:text-primary transition-colors duration-300"
              >
                +1 (555) 123-4567
              </a>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Mail className="h-6 w-6 text-primary" />
              <a
                href="mailto:info@damove.com"
                className="text-club-light hover:text-primary transition-colors duration-300"
              >
                info@damove.com
              </a>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <MapPin className="h-6 w-6 text-primary" />
              <span className="text-club-light">
                123 Club Street, Cityville
              </span>
            </div>
          </div>
          <Button className="neon-button border-primary text-primary hover:bg-primary mt-8">
            Book Now
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
