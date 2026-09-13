import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    price: "₹1,710",
    period: "/project",
    desc: "Perfect for personal portfolios and small projects",
    popular: false,
    features: ["Single-page website", "Mobile responsive design", "Contact form integration", "Basic SEO setup", "2 rounds of revisions", "1 week delivery"],
  },
  {
    name: "Professional",
    price: "₹3,421",
    period: "/project",
    desc: "Ideal for businesses and professional portfolios",
    popular: true,
    features: ["Up to 5 pages", "Custom UI/UX design", "Mobile responsive design", "Advanced SEO optimization", "Contact form & integrations", "Social media links", "4 months of revisions", "2 weeks delivery"],
  },
  {
    name: "Premium",
    price: "₹6,354",
    period: "/project",
    desc: "Complete solution for growing businesses",
    popular: false,
    features: ["Up to 10 pages", "Premium custom design", "Performance optimization", "Full SEO package", "Blog/CMS integration", "Analytics setup", "Email newsletter setup", "Unlimited revisions", "3 weeks delivery", "30 days support"],
  },
  {
    name: "Business",
    price: "Custom",
    period: "",
    desc: "Full-stack solutions with backend, server & scalability",
    popular: false,
    features: ["Intranet & Backend Development", "Node.js / API development", "Database (MongoDB / PostgreSQL)", "Authentication & user roles", "Admin dashboard", "Server & hosting setup", "Performance & security optimization", "Third-party integrations", "Scalable architecture", "Priority support"],
  },
];

const PricingSection = () => (
  <section id="pricing" className="bg-secondary/30 py-20">
    <div className="container">
      <div className="mb-12 text-center">
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Simple, Transparent Pricing</h2>
        <p className="mt-3 text-muted-foreground">Choose the perfect plan for your needs. All plans include our quality guarantee.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className={`relative rounded-xl border bg-card p-6 shadow-sm ${
              plan.popular ? "border-primary shadow-lg scale-[1.02]" : "border-border"
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-success px-4 py-1 text-xs font-semibold text-success-foreground">
                ✦ Most Popular
              </span>
            )}
            <h3 className="font-heading text-lg font-semibold text-foreground">{plan.name}</h3>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="font-heading text-3xl font-bold text-foreground">{plan.price}</span>
              {plan.period && <span className="text-sm text-muted-foreground">{plan.period}</span>}
            </div>
            <p className="mt-2 text-xs text-muted-foreground">{plan.desc}</p>
            <ul className="mt-5 space-y-2.5">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/919395236443?text=Hi! I'm interested in the ${encodeURIComponent(plan.name)} plan. Can you provide more details?"
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition ${
                plan.popular
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              Contact Us
            </a>
          </motion.div>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Not sure which plan fits your needs?{" "}
        <a href="#contact" className="font-medium text-primary hover:underline">Talk to us</a>
      </p>
    </div>
  </section>
);

export default PricingSection;
