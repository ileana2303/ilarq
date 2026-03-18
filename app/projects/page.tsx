import Sidebar from "@/components/Sidebar";
import ProjectCard from "@/components/project-card";

const projects = [
  {
    image: "/images/projects/AZ/IMG-8516.png",
    title: "Featured Project",
    href: "/project/1",
  },
  {
    image: "/images/projects/olvos/1.jpg",
    title: "Project One",
    href: "/project/1",
  },
  {
    image: "/images/projects/olvos/2.jpg",
    title: "Project Two",
    href: "/project/2",
  },
  {
    image: "/images/projects/olvos/3.jpg",
    title: "Project Three",
    href: "/project/3",
  },
  {
    image: "/images/projects/olvos/3.jpg",
    title: "Project Three",
    href: "/project/3",
  },
  {
    image: "/images/projects/olvos/3.jpg",
    title: "Project Three",
    href: "/project/3",
  },
  {
    image: "/images/projects/olvos/1.jpg",
    title: "Project Three",
    href: "/project/3",
  },
  {
    image: "/images/projects/olvos/4.jpg",
    title: "Project Four",
    href: "/project/4",
  },
];

export default function Projects() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-6 space-y-6">
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