"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Users, Wine, Star } from "lucide-react";

const VIPTables = () => {
  const vipTables = [
    {
      id: 1,
      name: "Silver Table",
      capacity: "Up to 6 guests",
      price: "$500",
      benefits: ["Priority entry", "Bottle service", "Dedicated server"],
      image: "/src/assets/viptable.png",
    },
    {
      id: 2,
      name: "Gold Table",
      capacity: "Up to 10 guests",
      price: "$1000",
      benefits: [
        "Priority entry",
        "Premium bottle service",
        "Dedicated server",
        "Mixer package",
      ],
      image: "/src/assets/viptable3.jpg",
    },
    {
      id: 3,
      name: "Platinum Table",
      capacity: "Up to 15 guests",
      price: "$1500",
      benefits: [
        "Priority entry",
        "Exclusive bottle selection",
        "Personalized service",
        "Mixer package",
        "Security escort",
      ],
      image: "/src/assets/viptable4.jpg",
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
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-display font-bold text-club-light mb-4">
            VIP Tables
          </h1>
          <p className="text-club-muted text-lg">
            Experience the ultimate nightlife luxury with our exclusive VIP
            tables.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vipTables.map((table) => (
            <motion.div
              key={table.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-morphism p-6 rounded-xl"
            >
              <img
                src={table.image}
                alt={table.name}
                className="rounded-xl mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-display font-bold text-club-light mb-2">
                {table.name}
              </h3>
              <p className="text-club-muted mb-2">{table.capacity}</p>
              <p className="text-primary font-semibold mb-2">
                Price: {table.price}
              </p>
              <ul className="text-club-muted list-disc pl-5 mb-4">
                {table.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
              <Button className="neon-button border-primary text-primary hover:bg-primary w-full">
                Book Now <Star className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VIPTables;
