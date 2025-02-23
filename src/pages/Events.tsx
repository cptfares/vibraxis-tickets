"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { CalendarDays, Clock, MapPin, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  description: string;
  price: string;
}

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  numberOfTickets: string;
}

const events = [
  {
    id: 1,
    title: "halloween  party",
    date: "2024-07-15",
    time: "22:00 - 04:00",
    location: "Main Hall",
    image: "/src/assets/event.jpg",
    description: "Join us for a night of house music with international DJs.",
    price: "$30",
  },
  {
    id: 2,
    title: "white tee party",
    date: "2024-07-20",
    time: "23:00 - 05:00",
    location: "Underground Room",
    image: "/src/assets/event2.jpg",
    description: "Experience the best techno beats with our resident DJs.",
    price: "$25",
  },
];

const BookingModal = ({
  event,
  onClose,
}: {
  event: Event;
  onClose: () => void;
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    phone: "",
    numberOfTickets: "1",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the booking data to your backend
    toast.success("Booking submitted successfully! We'll contact you soon.");
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-club-black glass-morphism p-6 rounded-xl max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>

        <h2 className="text-2xl font-display font-bold text-club-light mb-6">
          Book for {event.title}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="bg-club-dark/50 border-club-muted"
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="bg-club-dark/50 border-club-muted"
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              required
              className="bg-club-dark/50 border-club-muted"
            />
          </div>

          <div>
            <Label htmlFor="tickets">Number of Tickets</Label>
            <Input
              id="tickets"
              type="number"
              min="1"
              max="10"
              value={formData.numberOfTickets}
              onChange={(e) =>
                setFormData({ ...formData, numberOfTickets: e.target.value })
              }
              required
              className="bg-club-dark/50 border-club-muted"
            />
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              className="w-full neon-button border-primary text-primary hover:bg-primary"
            >
              Confirm Booking
            </Button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

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
                <span className="text-primary font-semibold">
                  {event.price}
                </span>
                <Button
                  className="neon-button border-primary text-primary hover:bg-primary"
                  onClick={() => setSelectedEvent(event)}
                >
                  Book Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedEvent && (
        <BookingModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
}
