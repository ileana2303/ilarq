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
        <div className="flex min-h-screen flex-col bg-background lg:h-screen lg:overflow-hidden">
            <div className="flex min-h-0 flex-1 flex-col lg:flex-row lg:overflow-hidden">
                <Sidebar />

                <main className="flex min-h-0 flex-1 flex-col bg-background">
                    <header className="flex flex-col gap-3 px-5 pb-4 pt-6 text-foreground/70 sm:px-6 sm:pt-8 lg:flex-row lg:items-end lg:justify-between lg:px-10 lg:pb-4 lg:pt-12">
                        <h1 className="text-[18px] font-medium uppercase tracking-[0.06em] sm:text-[20px]">
                            {project.title}
                        </h1>
                        <p className="text-[13px] uppercase tracking-[0.08em] sm:text-[14px]">+ Info</p>
                    </header>

                    <div className="min-h-0 flex-1 px-5 pb-6 pt-0 sm:px-6 sm:pb-8 lg:px-10">
                        <ProjectSlider projectId={project.id} />
                    </div>
                </main>
            </div>

            <footer className="flex min-h-14 items-center justify-end bg-background px-5 py-4 text-[13px] text-foreground/60 sm:px-6 sm:text-[14px] lg:px-10">
                <p>Website by Ilokan</p>
            </footer>
        </div>
    );
}
