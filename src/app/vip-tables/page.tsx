
"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Users, Wine, Star } from "lucide-react";

const VIPTables = () => {
  const packages = [
    {
      id: 1,
      name: "Silver Package",
      price: "$500",
      guests: "Up to 6 guests",
      includes: [
        "Premium location",
        "1 premium bottle",
        "Mixers included",
        "VIP host service",
      ],
      icon: Users,
    },
    {
      id: 2,
      name: "Gold Package",
      price: "$1000",
      guests: "Up to 8 guests",
      includes: [
        "Prime location",
        "2 premium bottles",
        "Mixers included",
        "VIP host service",
        "Priority entry",
      ],
      icon: Wine,
    },
    {
      id: 3,
      name: "Platinum Package",
      price: "$2000",
      guests: "Up to 12 guests",
      includes: [
        "Best location",
        "3 premium bottles",
        "Mixers included",
        "Dedicated VIP host",
        "Priority entry",
        "Complimentary photos",
      ],
      icon: Star,
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
            VIP Table Packages
          </h1>
          <p className="text-club-muted max-w-2xl mx-auto">
            Experience luxury and exclusivity with our VIP table service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-morphism p-8 rounded-xl text-center"
            >
              <pkg.icon className="w-12 h-12 mx-auto text-primary mb-6" />
              <h3 className="text-xl font-display font-bold text-club-light mb-2">
                {pkg.name}
              </h3>
              <div className="text-3xl font-bold text-primary mb-4">{pkg.price}</div>
              <p className="text-club-muted mb-6">{pkg.guests}</p>
              <ul className="space-y-3 mb-8 text-left">
                {pkg.includes.map((item, index) => (
                  <li key={index} className="flex items-center text-club-light">
                    <Star className="w-4 h-4 text-primary mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button className="neon-button border-primary text-primary hover:bg-primary w-full">
                Book Now
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VIPTables;
