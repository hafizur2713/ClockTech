import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const tags = ["Web Development", "UI Design", "Performance"];
const tagColors = ["bg-primary/10 text-primary", "bg-success/10 text-success", "bg-accent/10 text-accent"];

const stats = [
  { value: "50+", label: "Projects Completed", color: "text-primary" },
  { value: "100%", label: "Client Satisfaction", color: "text-success" },
  { value: "3+", label: "Years Experience", color: "text-accent" },
];

const HeroSection = () => (
  <section className="relative overflow-hidden pb-16 pt-20">
    {/* Subtle bg gradient */}
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

    <div className="container relative text-center">
      {/* Tag pills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 flex flex-wrap items-center justify-center gap-3"
      >
        {tags.map((tag, i) => (
          <span key={tag} className={`rounded-full px-4 py-1.5 text-xs font-medium ${tagColors[i]}`}>
            ✦ {tag}
          </span>
        ))}
      </motion.div>

      {/* Client CTA Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-success px-6 py-2.5 text-sm font-semibold text-white shadow-lg"
      >
        <span>🚀</span>
        <span>Build Your Project — Contact on WhatsApp or Email Us!</span>
        <a href="https://wa.me/919395236443" target="_blank" rel="noopener noreferrer" className="ml-2 rounded-full bg-white/20 px-3 py-1 text-xs hover:bg-white/30">
          WhatsApp
        </a>
        <a href="mailto:rahmanhafizur31928@gmail.com" className="rounded-full bg-white/20 px-3 py-1 text-xs hover:bg-white/30">
          Email
        </a>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mx-auto max-w-3xl font-heading text-4xl font-bold leading-tight text-foreground md:text-6xl"
      >
        We Build Websites That{" "}
        <span className="text-success">Convert</span> &{" "}
        <span className="text-accent">Perform</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-auto mt-5 max-w-xl text-base text-muted-foreground"
      >
        From stunning designs to blazing-fast performance, we create professional
        websites that help your business grow online.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 flex flex-wrap items-center justify-center gap-4"
      >
        <Button size="lg" className="rounded-full px-8 gap-2" asChild>
          <a href="#pricing">
            View Pricing <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
        <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
          <a href="#services">
            Our Services
          </a>
        </Button>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mx-auto mt-16 flex max-w-lg items-center justify-around"
      >
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className={`font-heading text-3xl font-bold ${s.color} md:text-4xl`}>{s.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
