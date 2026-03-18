import Sidebar from "@/components/Sidebar";
import ProjectSlider from "@/components/project-slider";
import { getProjectById, projects } from "@/lib/projects";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return projects.map(({ id }) => ({ id }));
}

export default async function Project({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const project = getProjectById(id);

    if (!project) {
        notFound();
    }

    return (
        <div className="flex h-screen flex-col overflow-hidden bg-background">
            <div className="flex min-h-0 flex-1 overflow-hidden">
                <Sidebar />

                <main className="flex min-h-0 flex-1 flex-col bg-background">
                    <header className="flex items-end justify-between border-b px-10 pb-4 pt-12 text-foreground/70">
                        <h1 className="text-[20px] font-medium uppercase tracking-[0.06em]">
                            {project.title}
                        </h1>
                        <p className="text-[14px] uppercase tracking-[0.08em]">+ Info</p>
                    </header>

                    <div className="min-h-0 flex-1 px-0 pb-8 pt-0">
                        <ProjectSlider projectId={project.id} />
                    </div>
                </main>
            </div>

            <footer className="flex h-14 items-center justify-end border-t bg-background px-10 text-[14px] text-foreground/60">
                <p>Website by Ilokan</p>
            </footer>
        </div>
    );
}
