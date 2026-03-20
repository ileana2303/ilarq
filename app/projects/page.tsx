import Sidebar from "@/components/Sidebar";
import MediaCard from "@/components/media-card";
import { projects as projectLibrary } from "@/lib/projects";

const projects = projectLibrary.map((project) => ({
  src: project.previewImage,
  type: "image" as const,
  title: project.title,
  href: project.href,
}));

export default function Projects() {
  return (
    <div className="flex min-h-screen flex-col bg-background lg:h-screen lg:flex-row lg:overflow-hidden">
      <Sidebar />

      <main className="flex-1 space-y-4 p-4 sm:space-y-6 sm:p-6 lg:min-h-0 lg:overflow-y-auto lg:space-y-8 lg:p-8">
        {(() => {
          const rows: Array<{ featured: (typeof projects)[number]; others: Array<(typeof projects)[number]> }> = [];

          for (let i = 0; i < projects.length; i += 3) {
            rows.push({
              featured: projects[i],
              others: projects.slice(i + 1, i + 3),
            });
          }

          return rows.map((row, rowIndex) => (
            <div key={rowIndex} className="space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="h-[58svh] min-h-[320px] sm:h-[68svh] md:h-[72svh] lg:h-[90vh] lg:min-h-[420px]">
                <MediaCard
                  src={row.featured.src}
                  type={row.featured.type}
                  title={row.featured.title}
                  href={row.featured.href}
                />
              </div>

              <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                {row.others.map((project, idx) => (
                  <div
                    key={`${project.href}-${idx}`}
                    className="h-[34svh] min-h-[240px] sm:h-[40svh] md:h-[44svh] lg:h-[60vh] lg:min-h-[260px]"
                  >
                    <MediaCard
                      src={project.src}
                      type={project.type}
                      title={project.title}
                      href={project.href}
                    />
                  </div>
                ))}

                {row.others.length === 1 && (
                  <div className="hidden rounded-lg bg-slate-900/10 md:block" />
                )}
              </div>
            </div>
          ));
        })()}
      </main>
    </div>
  );
}
