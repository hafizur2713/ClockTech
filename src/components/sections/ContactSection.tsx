import { motion } from "framer-motion";
import { Mail, Send, Clock, MessageCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  { icon: Clock, value: "24/7h", label: "Response Time", color: "text-primary" },
  { icon: MessageCircle, value: "Free", label: "Consultation", color: "text-success" },
  { icon: FileText, value: "Custom", label: "Quote Available", color: "text-accent" },
];

const ContactSection = () => (
  <section id="contact" className="py-20">
    <div className="container max-w-2xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground">
          <Mail className="h-3.5 w-3.5" /> Let&apos;s Work Together
        </span>
        <h2 className="mt-6 font-heading text-3xl font-bold text-foreground md:text-4xl">
          Ready to Start Your Project?
        </h2>
        <p className="mt-3 text-muted-foreground">
          Get in touch with us today. We&apos;ll respond within 24 hours with a free consultation and quote for your project.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="mt-10 rounded-2xl border border-border bg-card p-8 shadow-sm"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <Mail className="h-6 w-6 text-primary" />
        </div>
        <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">Email Us</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Send us your project details and we'll get back to you with a personalized quote.
        </p>
        <p className="mt-3 text-sm font-medium text-foreground">contact@clocktech.dev</p>
        <Button className="mt-5 rounded-full gap-2 px-8">
          <Send className="h-4 w-4" /> Send Inquiry
        </Button>
      </motion.div>

      <div className="mt-12 flex items-center justify-around">
        {highlights.map((h) => (
          <div key={h.label} className="text-center">
            <p className={`font-heading text-2xl font-bold ${h.color}`}>{h.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{h.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;
