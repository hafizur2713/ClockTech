import { motion } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const projects = [
  { name: "Kopou Artist Collective", desc: "Artist portfolio and hosting platform", color: "#E53935", initials: "K", image: "/placeholder.svg" },
  { name: "Nitish RoadKingg", desc: "Blog, review and hosting website", color: "#43A047", initials: "NR", image: "/placeholder.svg" },
  { name: "TechVault Solutions", desc: "SaaS dashboard and landing page", color: "#1E88E5", initials: "TV", image: "/placeholder.svg" },
  { name: "Bloom Studio", desc: "Creative agency portfolio site", color: "#F4511E", initials: "BS", image: "/placeholder.svg" },
];

const ProjectsSection = () => {
  const [page, setPage] = useState(0);
  const perPage = 2;
  const maxPage = Math.ceil(projects.length / perPage) - 1;
  const visible = projects.slice(page * perPage, page * perPage + perPage);

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Our Recent Projects</h2>
          <p className="mt-3 text-muted-foreground">Some of the websites we have designed and developed</p>
        </div>

        <div className="relative">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setPage(Math.max(0, page - 1))}
              disabled={page === 0}
              className="shrink-0 rounded-full border border-border p-2 text-muted-foreground transition hover:bg-secondary disabled:opacity-30"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="grid flex-1 gap-6 sm:grid-cols-2">
              {visible.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="rounded-xl border border-border bg-card overflow-hidden shadow-sm"
                >
                  {/* Project Image */}
                  <div className="relative h-40 w-full bg-muted overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-heading text-lg font-semibold text-foreground">{p.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                    <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                      Visit Website <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => setPage(Math.min(maxPage, page + 1))}
              disabled={page === maxPage}
              className="shrink-0 rounded-full border border-border p-2 text-muted-foreground transition hover:bg-secondary disabled:opacity-30"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
