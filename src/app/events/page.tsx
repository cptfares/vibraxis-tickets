
"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    id: 1,
    title: "Summer Heat",
    date: "2024-07-15",
    time: "22:00 - 04:00",
    location: "Main Hall",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    description: "Join us for a night of house music with international DJs.",
    price: "$30",
  },
  {
    id: 2,
    title: "Techno Night",
    date: "2024-07-20",
    time: "23:00 - 05:00",
    location: "Underground Room",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    description: "Experience the best techno beats with our resident DJs.",
    price: "$25",
  },
];

export default function Events() {
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
            Upcoming Events
          </h1>
          <p className="text-club-muted max-w-2xl mx-auto">
            Don't miss out on our exclusive events. Book your tickets now.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-morphism rounded-xl overflow-hidden"
            >
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${event.image})` }}
              />
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-club-light mb-4">
                  {event.title}
                </h3>
                <p className="text-club-muted mb-4">{event.description}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-club-light">
                    <CalendarDays className="w-4 h-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-club-light">
                    <Clock className="w-4 h-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-club-light">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">
                    {event.price}
                  </span>
                  <Button className="neon-button border-primary text-primary hover:bg-primary">
                    Book Now
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
