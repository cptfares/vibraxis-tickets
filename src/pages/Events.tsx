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
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-display font-bold text-club-light">
            Upcoming Events
          </h1>
          <p className="text-club-muted mt-4">
            Explore our exciting lineup of events.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-morphism p-6 rounded-xl"
            >
              <img
                src={event.image}
                alt={event.title}
                className="rounded-xl mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-display font-bold text-club-light mb-2">
                {event.title}
              </h3>
              <div className="flex items-center gap-2 text-club-muted mb-2">
                <CalendarDays className="w-4 h-4" />
                {new Date(event.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center gap-2 text-club-muted mb-2">
                <Clock className="w-4 h-4" />
                {event.time}
              </div>
              <div className="flex items-center gap-2 text-club-muted mb-2">
                <MapPin className="w-4 h-4" />
                {event.location}
              </div>
              <p className="text-club-muted mb-4">{event.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-primary font-semibold">{event.price}</span>
                <Button className="neon-button border-primary text-primary hover:bg-primary">
                  Book Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
