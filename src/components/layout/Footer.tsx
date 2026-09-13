import { useState } from "react";
import {
  MessageCircle,
  X,
  MapPin,
  Mail,
  Phone,
  Clock,
  ChevronUp,
  ArrowUpRight,
} from "lucide-react";

// Logo
import logoImage from "../../assets/images/ChatGPT Image Apr 18, 2026, 07_20_16 AM.png";

// Social Icons
import emailIcon from "../../assets/images/4202011emailgmaillogomailsocialsocialmedia-115677_115624.png";
import linkedinIcon from "../../assets/images/social_media_logo_linkedin_icon-icons.com_69094.png";
import githubIcon from "../../assets/images/github-logo_icon-icons.com_73546.png";
import instagramIcon from "../../assets/images/4202090instagramlogosocialsocialmedia-115598_115703.png";
import whatsappIcon from "../../assets/images/Whatsapp_37229.png";

const Footer = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  // WhatsApp
  const whatsappNumber = "919395236443";
  const whatsappMessage =
    "Hi! I'm interested in your web development services.";

  // Current year
  const currentYear = new Date().getFullYear();

  // Footer links
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Web Development", href: "#services" },
    { name: "Mobile App Development", href: "#services" },
    { name: "UI/UX Design", href: "#services" },
    { name: "API Development", href: "#services" },
    { name: "Maintenance & Support", href: "#services" },
  ];

  const socialLinks = [
    {
      name: "Email",
      href: "mailto:rahmanhafizur31928@gmail.com",
      icon: emailIcon,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/hafizur-rahman-767655292",
      icon: linkedinIcon,
    },
    {
      name: "GitHub",
      href: "https://github.com/hafizurrahman3096-design",
      icon: githubIcon,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/hafizur805",
      icon: instagramIcon,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#0b1220] font-sans text-slate-300">

      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}

      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-20 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/[0.02] blur-3xl" />

      {/* =========================================================
          MAIN FOOTER
      ========================================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-12 pt-16 sm:px-8 lg:px-10">

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">

          {/* =====================================================
              COLUMN 1 - BRAND
          ===================================================== */}

          <div className="lg:pr-6">

            {/* Logo */}

            <a
              href="#home"
              className="mb-6 inline-flex items-center transition-opacity duration-300 hover:opacity-90"
            >
              <img
                src={logoImage}
                alt="clockTEch"
                className="h-12 w-auto object-contain"
              />
            </a>

            {/* Description */}

            <p className="max-w-sm text-sm leading-7 text-slate-400">
              Transforming ideas into powerful digital solutions. We build
              modern, scalable, and user-friendly web & mobile applications
              for businesses of all sizes.
            </p>

            {/* Social Icons */}

            <div className="mt-7 flex items-center gap-3">

              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={
                    social.name === "Email" ? undefined : "_blank"
                  }
                  rel={
                    social.name === "Email"
                      ? undefined
                      : "noopener noreferrer"
                  }
                  aria-label={social.name}
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-700/70 bg-slate-800/70 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-slate-700"
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="h-5 w-5 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </a>
              ))}

            </div>

            {/* Tagline */}

            <p className="mt-7 font-serif text-base italic text-slate-300">
              Let's build something great together!
            </p>

            {/* Small Decorative Line */}

            <div className="mt-4 flex items-center gap-1">
              <span className="h-[2px] w-12 bg-blue-500" />
              <span className="h-[2px] w-6 bg-cyan-400/60" />
              <span className="h-[2px] w-2 bg-slate-600" />
            </div>

          </div>

          {/* =====================================================
              COLUMN 2 - QUICK LINKS
          ===================================================== */}

          <div>

            <div className="mb-7">

              <h3 className="text-lg font-semibold text-white">
                Quick Links
              </h3>

              <div className="mt-3 h-[2px] w-10 bg-blue-500" />

            </div>

            <ul className="space-y-4">

              {quickLinks.map((link) => (
                <li key={link.name}>

                  <a
                    href={link.href}
                    className="group flex w-fit items-center gap-1 text-sm text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-blue-400"
                  >
                    <span>{link.name}</span>

                    <ArrowUpRight
                      className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />

                  </a>

                </li>
              ))}

            </ul>

          </div>

          {/* =====================================================
              COLUMN 3 - SERVICES
          ===================================================== */}

          <div>

            <div className="mb-7">

              <h3 className="text-lg font-semibold text-white">
                Our Services
              </h3>

              <div className="mt-3 h-[2px] w-10 bg-blue-500" />

            </div>

            <ul className="space-y-4">

              {services.map((service) => (
                <li key={service.name}>

                  <a
                    href={service.href}
                    className="group flex w-fit items-center gap-1 text-sm text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-blue-400"
                  >
                    <span>{service.name}</span>

                    <ArrowUpRight
                      className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />

                  </a>

                </li>
              ))}

            </ul>

          </div>

          {/* =====================================================
              COLUMN 4 - CONTACT
          ===================================================== */}

          <div>

            <div className="mb-7">

              <h3 className="text-lg font-semibold text-white">
                Contact Us
              </h3>

              <div className="mt-3 h-[2px] w-10 bg-blue-500" />

            </div>

            <ul className="space-y-5">

              {/* Location */}

              <li className="flex items-start gap-4">

                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10">
                  <MapPin className="h-5 w-5 text-blue-400" />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Location
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Guwahati, Assam, India
                  </p>
                </div>

              </li>

              {/* Email */}

              <li className="flex items-start gap-4">

                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10">
                  <Mail className="h-5 w-5 text-blue-400" />
                </div>

                <div>

                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Email
                  </p>

                  <a
                    href="mailto:rahmanhafizur31928@gmail.com"
                    className="mt-1 block text-sm text-slate-400 transition-colors duration-300 hover:text-blue-400"
                  >
                    rahmanhafizur31928@gmail.com
                  </a>

                </div>

              </li>

              {/* Phone */}

              <li className="flex items-start gap-4">

                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10">
                  <Phone className="h-5 w-5 text-blue-400" />
                </div>

                <div>

                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Phone
                  </p>

                  <a
                    href="tel:+919395236443"
                    className="mt-1 block text-sm text-slate-400 transition-colors duration-300 hover:text-blue-400"
                  >
                    +91 93952 36443 <br /> +91 6900 757449
                  </a>

                </div>

              </li>

              {/* Working Hours */}

              

            </ul>

          </div>

        </div>

      </div>

      {/* =========================================================
          DIVIDER
      ========================================================= */}

      <div className="relative z-10 border-t border-slate-800/80" />

      {/* =========================================================
          BOTTOM BAR
      ========================================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-6 sm:px-8 lg:px-10">

        <div className="flex flex-col items-center justify-between gap-4 text-xs sm:flex-row">

          {/* Copyright */}

          <p className="text-center text-slate-500 sm:text-left">
            © {currentYear} clockTEch. All rights reserved.
          </p>

          {/* Bottom Links */}

          <div className="flex flex-wrap items-center justify-center gap-3 text-slate-500">

            <a
              href="#"
              className="transition-colors duration-300 hover:text-slate-300"
            >
              Privacy Policy
            </a>

            <span className="text-slate-700">|</span>

            <a
              href="#"
              className="transition-colors duration-300 hover:text-slate-300"
            >
              Terms of Service
            </a>

            <span className="text-slate-700">|</span>

            <a
              href="#"
              className="transition-colors duration-300 hover:text-slate-300"
            >
              Sitemap
            </a>

          </div>

        </div>

      </div>

      {/* =========================================================
          SCROLL TO TOP
      ========================================================= */}

      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="absolute bottom-20 right-6 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-800/90 text-slate-400 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-slate-700 hover:text-white md:right-8 lg:right-12"
      >
        <ChevronUp className="h-5 w-5" />
      </button>

      {/* =========================================================
          WHATSAPP CHAT POPUP
      ========================================================= */}

      {isChatOpen && (
        <div className="fixed bottom-24 right-5 z-[100] w-[calc(100%-2.5rem)] max-w-[360px] overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 sm:right-6">

          {/* Chat Header */}

          <div className="flex items-center justify-between bg-[#25D366] px-4 py-4">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">

                <MessageCircle className="h-5 w-5 text-white" />

              </div>

              <div>

                <p className="font-semibold text-white">
                  clockTEch
                </p>

                <p className="text-xs text-white/80">
                  Typically replies within minutes
                </p>

              </div>

            </div>

            <button
              onClick={() => setIsChatOpen(false)}
              aria-label="Close WhatsApp chat"
              className="rounded-full p-1.5 text-white transition-colors hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>

          </div>

          {/* Chat Body */}

          <div className="bg-[#f0f2f5] p-4">

            <div className="relative mb-1 rounded-xl rounded-tl-none bg-white p-4 shadow-sm">

              <p className="text-sm leading-6 text-gray-700">
                Hello! 👋
                <br />
                How can we help you today?
              </p>

              <p className="mt-2 text-[11px] text-gray-400">
                clockTEch Team
              </p>

            </div>

          </div>

          {/* Chat Footer */}

          <div className="bg-white p-4">

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#1ebe5d] hover:shadow-md"
            >

              <MessageCircle className="h-5 w-5" />

              Start Chat

            </a>

          </div>

        </div>
      )}

      {/* =========================================================
          WHATSAPP FLOATING BUTTON
      ========================================================= */}

      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        aria-label={
          isChatOpen
            ? "Close WhatsApp chat"
            : "Open WhatsApp chat"
        }
        className="fixed bottom-5 right-5 z-[110] flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-[#25D366] shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl sm:bottom-6 sm:right-6"
      >

        {isChatOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <img
            src={whatsappIcon}
            alt="WhatsApp"
            className="h-10 w-10 object-contain"
          />
        )}

      </button>

    </footer>
  );
};

export default Footer;