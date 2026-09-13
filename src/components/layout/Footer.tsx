import { useState } from "react";
import { MessageCircle, X, MapPin, Mail, Phone, Clock, ChevronUp } from "lucide-react";

import logoImage from "../../assets/images/ChatGPT Image Apr 18, 2026, 07_20_16 AM.png";
import emailIcon from "../../assets/images/4202011emailgmaillogomailsocialsocialmedia-115677_115624.png";
import linkedinIcon from "../../assets/images/social_media_logo_linkedin_icon-icons.com_69094.png";
import githubIcon from "../../assets/images/github-logo_icon-icons.com_73546.png";
import instagramIcon from "../../assets/images/4202090instagramlogosocialsocialmedia-115598_115703.png";
import whatsappIcon from "../../assets/images/Whatsapp_37229.png";

const Footer = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const whatsappNumber = "919395236443";
  const whatsappMessage = "Hi! I'm interested in your web development services.";

  return (
    <footer className="bg-[#0f172a] text-slate-300 pt-16 pb-8 font-sans relative">
      <div className="container grid gap-12 md:grid-cols-4 lg:gap-8 pb-12 border-b border-slate-800">
        
        {/* Column 1 */}
        <div className="flex flex-col gap-6">
          <a href="#" className="flex items-center gap-2">
            <img src={logoImage} alt="clockTEch" className="h-10 w-auto object-contain" />
            <span className="text-xl font-bold text-white tracking-wide">
              clock<span className="text-[#8CC63F]">TEch</span>
            </span>
          </a>
          <p className="text-sm leading-relaxed text-slate-400">
            Transforming ideas into powerful digital solutions. We build modern, scalable, and user-friendly web & mobile applications for businesses of all sizes.
          </p>
          <div className="flex items-center gap-3">
            <a href="mailto:rahmanhafizur31928@gmail.com" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/80 transition hover:bg-slate-700">
              <img src={emailIcon} alt="Email" className="h-5 w-5 object-contain" />
            </a>
            <a href="https://www.linkedin.com/in/hafizur-rahman-767655292" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/80 transition hover:bg-slate-700">
              <img src={linkedinIcon} alt="LinkedIn" className="h-5 w-5 object-contain" />
            </a>
            <a href="https://github.com/hafizurrahman3096-design" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/80 transition hover:bg-slate-700">
              <img src={githubIcon} alt="GitHub" className="h-5 w-5 object-contain" />
            </a>
            <a href="https://www.instagram.com/hafizur805" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/80 transition hover:bg-slate-700">
              <img src={instagramIcon} alt="Instagram" className="h-5 w-5 object-contain" />
            </a>
          </div>
          <p className="font-serif italic text-slate-300 mt-2">
            Let's build something great together!
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="mb-6 text-lg font-semibold text-white relative inline-block">
            Quick Links
            <span className="absolute -bottom-2 left-0 h-0.5 w-8 bg-blue-500"></span>
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-slate-400">
            <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="#services" className="hover:text-blue-400 transition">Services</a></li>
            <li><a href="#pricing" className="hover:text-blue-400 transition">Pricing</a></li>
            <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="mb-6 text-lg font-semibold text-white relative inline-block">
            Our Services
            <span className="absolute -bottom-2 left-0 h-0.5 w-8 bg-blue-500"></span>
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-slate-400">
            <li><a href="#" className="hover:text-blue-400 transition">Web Development</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Mobile App Development</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">UI/UX Design</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">API Development</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Maintenance & Support</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="mb-6 text-lg font-semibold text-white relative inline-block">
            Contact Us
            <span className="absolute -bottom-2 left-0 h-0.5 w-8 bg-blue-500"></span>
          </h3>
          <ul className="flex flex-col gap-4 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-blue-500" />
              <span>Guwahati, Assam, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-blue-500" />
              <a href="mailto:hello@clockTEch.com" className="hover:text-blue-400 transition">hello@clockTEch.com</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-blue-500" />
              <a href="tel:+919876543210" className="hover:text-blue-400 transition">+91 98765 43210</a>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="h-5 w-5 shrink-0 text-blue-500" />
              <span>Mon - Sat, 9:00 AM - 6:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mt-6 flex flex-col items-center justify-between gap-4 text-xs text-slate-500 md:flex-row">
        <p>© 2026 clockTEch. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-slate-300">Privacy Policy</a>
          <span className="text-slate-700">|</span>
          <a href="#" className="hover:text-slate-300">Terms of Service</a>
          <span className="text-slate-700">|</span>
          <a href="#" className="hover:text-slate-300">Sitemap</a>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute bottom-20 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition hover:bg-slate-700 hover:text-white sm:bottom-28 md:right-8 lg:right-12"
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-5 w-5" />
      </button>

      {/* WhatsApp Chat Popup */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 rounded-lg bg-white shadow-2xl animate-in fade-in slide-in-from-bottom-2">
          {/* Chat Header */}
          <div className="flex items-center justify-between rounded-t-lg bg-[#25D366] px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-white">clockTEch</p>
                <p className="text-xs text-white/80">Typically replies within minutes</p>
              </div>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="rounded-full p-1 text-white hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="bg-[#f0f2f5] p-4">
            <div className="mb-4 rounded-lg rounded-tl-none bg-white p-3 shadow-sm">
              <p className="text-sm text-gray-700">Hello! 👋 How can we help you today?</p>
              <p className="mt-1 text-xs text-gray-400">clockTEch Team</p>
            </div>
          </div>

          {/* Chat Footer */}
          <div className="rounded-b-lg bg-white p-3">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] py-3 font-medium text-white transition hover:bg-[#1ebe5d]"
            >
              <MessageCircle className="h-5 w-5" />
              Start Chat
            </a>
          </div>
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition hover:scale-110 hover:shadow-xl overflow-hidden"
      >
        {isChatOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <img src={whatsappIcon} alt="WhatsApp" className="h-10 w-10 object-contain" />
        )}
      </button>
    </footer>
  );
};

export default Footer;
