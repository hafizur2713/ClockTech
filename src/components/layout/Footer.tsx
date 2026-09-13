import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const Footer = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const whatsappNumber = "919395236443";
  const whatsappMessage = "Hi! I'm interested in your web development services.";

  return (
    <footer className="border-t border-border bg-background py-6">
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <a href="#" className="flex items-center gap-2">
          <img src="/src/assets/images/ChatGPT Image Apr 18, 2026, 07_20_16 AM.png" alt="clockTEch" className="h-8 w-auto object-contain" />
        </a>
        <div className="flex gap-6">
          {["Services", "Pricing", "Projects", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-xs text-muted-foreground hover:text-primary">
              {l}
            </a>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center gap-4">
          <a href="mailto:rahmanhafizur31928@gmail.com" className="h-6 w-6 transition hover:scale-110">
            <img src="/src/assets/images/4202011emailgmaillogomailsocialsocialmedia-115677_115624.png" alt="Email" className="h-full w-full object-contain" />
          </a>
          <a href="https://www.linkedin.com/in/hafizur-rahman-767655292" target="_blank" rel="noopener noreferrer" className="h-6 w-6 transition hover:scale-110">
            <img src="/src/assets/images/social_media_logo_linkedin_icon-icons.com_69094.png" alt="LinkedIn" className="h-full w-full object-contain" />
          </a>
          <a href="https://github.com/hafizurrahman3096-design" target="_blank" rel="noopener noreferrer" className="h-6 w-6 transition hover:scale-110">
            <img src="/src/assets/images/github-logo_icon-icons.com_73546.png" alt="GitHub" className="h-full w-full object-contain" />
          </a>
          <a href="https://www.instagram.com/hafizur805" target="_blank" rel="noopener noreferrer" className="h-6 w-6 transition hover:scale-110">
            <img src="/src/assets/images/4202090instagramlogosocialsocialmedia-115598_115703.png" alt="Instagram" className="h-full w-full object-contain" />
          </a>
        </div>

        <p className="text-xs text-muted-foreground">© 2026 clockTEch. All rights reserved.</p>
      </div>

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
          <img src="/src/assets/images/Whatsapp_37229.png" alt="WhatsApp" className="h-10 w-10 object-contain" />
        )}
      </button>
    </footer>
  );
};

export default Footer;
