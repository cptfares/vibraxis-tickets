import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Music,
  Calendar,
  User,
  MenuIcon,
  ArrowDown,
  ChevronRight,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
          poster="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
        >
          <source src="/club-atmosphere.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-club-black via-club-black/80 to-transparent" />
      </div>

      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 container mx-auto px-4 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold text-club-light animate-neon-glow">
            EXPERIENCE THE NIGHT
          </h1>
          <p className="text-xl md:text-2xl text-club-muted max-w-2xl mx-auto">
            Where music meets luxury. Join us for an unforgettable night.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="neon-button border-primary text-primary hover:bg-primary w-full md:w-auto text-lg">
                Book VIP Table
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" className="w-full md:w-auto text-lg">
                View Events
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-8 h-8 text-club-light opacity-50" />
        </motion.div>
      </motion.div>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: Music,
      title: "World-Class music",
      description: "Experience sets from international artists",
      gradient: "from-[#FF1CF7] to-[#b249f8]",
    },
    {
      icon: Calendar,
      title: "booming Events",
      description: "Weekly themed nights and special performances",
      gradient: "from-[#5EA2EF] to-[#0072F5]",
    },
    {
      icon: User,
      title: "VIP Experience",
      description: "Exclusive tables and premium bottle service",
      gradient: "from-[#FF4D4D] to-[#F9CB28]",
    },
  ];

  return (
    <div className="py-24 bg-club-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="glass-morphism p-6 rounded-xl text-center relative group"
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${feature.gradient} rounded-xl transition-opacity duration-300`}
              />
              <feature.icon className="w-12 h-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-display font-bold mb-2 text-club-light">
                {feature.title}
              </h3>
              <p className="text-club-muted">{feature.description}</p>
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ zIndex: -1 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HighlightSection = () => {
  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "100k+", label: "Happy Customers" },
    { value: "500+", label: "Events Hosted" },
    { value: "50+", label: "International DJs" },
  ];

  return (
    <div className="py-24 bg-club-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.h4
                className="text-4xl md:text-5xl font-bold text-primary mb-2"
                whileHover={{ scale: 1.1 }}
              >
                {stat.value}
              </motion.h4>
              <p className="text-club-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const EventsPreview = () => {
  const events = [
    {
      id: 1,
      title: "halloween party",
      date: "2024-07-15",
      image: "/event.jpg",
      description: "Join us for a night of house music with international DJs.",
    },
    {
      id: 2,
      title: "Jersey Party",
      date: "2024-07-20",
      image: "/event2.jpg",
      description: "Experience the best techno beats with our resident DJs.",
    },
  ];

  return (
    <div className="py-24 bg-club-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-display font-bold text-club-light">
            Upcoming Events
          </h2>
          <Link
            to="/events"
            className="text-primary hover:text-primary/80 flex items-center"
          >
            View All <ChevronRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="glass-morphism p-6 rounded-xl relative group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-display font-bold text-club-light mb-2 group-hover:text-primary transition-colors">
                {event.title}
              </h3>
              <p className="text-club-muted mb-4">{event.description}</p>
              <p className="text-primary">
                {new Date(event.date).toLocaleDateString()}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ClubAtmosphere = () => {
  return (
    <div className="relative h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="\club-night.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-club-black/80 via-transparent to-club-black/80" />
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-club-light mb-6">
            Experience The Night
          </h2>
          <p className="text-xl text-club-muted max-w-2xl mx-auto">
            Immerse yourself in the ultimate nightlife experience with
            world-class sound and lighting.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

const VIPTablesPreview = () => {
  const tables = [
    {
      id: 1,
      name: "Silver Table",
      image: "/viptable.png",
      price: "$500",
    },
    {
      id: 2,
      name: "Gold Table",
      image: "/viptable3.jpg",
      price: "$1000",
    },
    {
      id: 3,
      name: "Platinum Table",
      image: "/viptable4.jpg",
      price: "$1500",
    },
  ];

  return (
    <div className="py-24 bg-club-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="container mx-auto px-4 relative">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-display font-bold text-club-light">
            VIP Tables
          </h2>
          <Link
            to="/vip-tables"
            className="text-primary hover:text-primary/80 flex items-center"
          >
            View All <ChevronRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tables.map((table, index) => (
            <motion.div
              key={table.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-morphism p-6 rounded-xl relative group cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={table.image}
                alt={table.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-display font-bold text-club-light mb-2">
                {table.name}
              </h3>
              <p className="text-primary font-semibold">{table.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const GalleryPreview = () => {
  const images = [
    { id: 1, src: "/gallery1.jpg" },
    { id: 2, src: "/gallery2.jpg" },
    { id: 3, src: "/gallery3.jpg" },
    { id: 4, src: "/gallery4.jpg" },
    { id: 5, src: "/gallery5.jpg" },
    { id: 6, src: "/gallery6.jpg" },
  ];

  return (
    <div className="py-24 bg-club-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-display font-bold text-club-light">
            Gallery
          </h2>
          <Link
            to="/gallery"
            className="text-primary hover:text-primary/80 flex items-center"
          >
            View All <ChevronRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square overflow-hidden rounded-xl"
            >
              <img
                src={image.src}
                alt={`Gallery Image ${image.id}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const contactInfo = [
    { icon: Phone, text: "+1 (555) 123-4567" },
    { icon: Mail, text: "info@damove.com" },
    { icon: MapPin, text: "123 Club Street, Cityville" },
  ];

  return (
    <footer className="bg-club-black border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold text-club-light">
              DA MOVE
            </h3>
            <p className="text-club-muted">
              Where music meets luxury. Experience unforgettable nights in the
              heart of the city.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-bold text-club-light">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/events"
                  className="text-club-muted hover:text-primary transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/vip-tables"
                  className="text-club-muted hover:text-primary transition-colors"
                >
                  VIP Tables
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-club-muted hover:text-primary transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-club-muted hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-bold text-club-light">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-club-muted"
                >
                  <item.icon className="w-4 h-4 text-primary" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-bold text-club-light">
              Follow Us
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-club-muted hover:text-primary hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-club-muted text-sm">
              Open Thursday to Sunday
              <br />
              10:00 PM - 4:00 AM
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-club-muted text-sm">
            © {new Date().getFullYear()} DAMOVE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const Index = () => {
  return (
    <div className="bg-club-black min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <EventsPreview />
      <ClubAtmosphere />
      <VIPTablesPreview />
      <GalleryPreview />
      <HighlightSection />
      <Footer />
    </div>
  );
};

export default Index;
