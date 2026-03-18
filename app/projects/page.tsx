import Sidebar from "@/components/Sidebar";
import ProjectCard from "@/components/project-card";
import { projects as projectLibrary } from "@/lib/projects";

const projects = projectLibrary.map((project) => ({
  image: project.previewImage,
  title: project.title,
  href: project.href,
}));

export default function Projects() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <main className="min-h-0 flex-1 overflow-y-auto p-6 space-y-6">
        {(() => {
          const rows: Array<{ featured: (typeof projects)[number]; others: Array<(typeof projects)[number]> }> = [];

          for (let i = 0; i < projects.length; i += 3) {
            rows.push({
              featured: projects[i],
              others: projects.slice(i + 1, i + 3),
            });
          }

          return rows.map((row, rowIndex) => (
            <div key={rowIndex} className="space-y-6">
              <div className="h-[90vh] min-h-[420px]">
                <ProjectCard
                  image={row.featured.image}
                  title={row.featured.title}
                  href={row.featured.href}
                />
              </div>

              <div className="flex gap-6 h-[60vh] min-h-[260px]">
                {row.others.map((project, idx) => (
                  <div key={`${project.href}-${idx}`} className="flex-1">
                    <ProjectCard
                      image={project.image}
                      title={project.title}
                      href={project.href}
                    />
                  </div>
                ))}

                {row.others.length === 1 && (
                  <div className="flex-1 rounded-lg bg-slate-900/10" />
                )}
              </div>
            </div>
          ));
        })()}
      </main>
    </div>
  );
}
