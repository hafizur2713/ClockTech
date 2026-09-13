import { motion } from "framer-motion";
import { Code2, Building2, Smartphone, Rocket, RefreshCw, Globe } from "lucide-react";

const services = [
  { icon: Code2, title: "Website Design & Development", desc: "Custom-built websites tailored to your brand. We use modern technologies to create fast, secure, and reliable web solutions.", color: "text-primary bg-primary/10" },
  { icon: Building2, title: "Business/Portfolio Websites", desc: "Professional websites for businesses and creatives. Showcase your work, services, and brand story effectively.", color: "text-accent bg-accent/10" },
  { icon: Smartphone, title: "Mobile-Responsive UI", desc: "Pixel-perfect designs that look stunning on all devices. From desktop to mobile, your website will adapt seamlessly.", color: "text-primary bg-primary/10" },
  { icon: Rocket, title: "Speed & SEO Optimization", desc: "Lightning-fast websites optimized for search engines. Better performance means better rankings and user experience.", color: "text-success bg-success/10" },
  { icon: RefreshCw, title: "Website Redesign", desc: "Transform your outdated website into a modern masterpiece. We breathe new life into existing sites with fresh designs.", color: "text-accent bg-accent/10" },
  { icon: Globe, title: "Domain Registration", desc: "Secure the perfect domain name for your brand. We help you register, manage, and configure domains with ease.", color: "text-primary bg-primary/10" },
];

const ServicesSection = () => (
  <section id="services" className="bg-secondary/30 py-20">
    <div className="container">
      <div className="mb-12 text-center">
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Our Services</h2>
        <p className="mt-3 text-muted-foreground">Everything you need to establish a powerful online presence</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className={`mb-4 inline-flex rounded-lg p-3 ${s.color}`}>
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
