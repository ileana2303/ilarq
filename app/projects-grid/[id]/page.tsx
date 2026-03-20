import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectById, projects } from "@/lib/projects";

export function generateStaticParams() {
    return projects.map(({ id }) => ({ id }));
}

export default async function ProjectGridPage({
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
        <main className="min-h-screen bg-background px-5 py-6 text-foreground sm:px-6 sm:py-8 lg:px-10 lg:py-10">
            <div className="mx-auto max-w-7xl space-y-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div className="space-y-2">
                        <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">
                            Test Page
                        </p>
                        <h1 className="text-xl font-medium uppercase tracking-[0.06em] sm:text-2xl">
                            {project.title}
                        </h1>
                        <p className="text-sm text-foreground/70">
                            {project.slides.length} images from the project library
                        </p>
                    </div>

                    <div className="flex gap-4 text-sm uppercase tracking-[0.08em] text-foreground/70">
                        <Link href={project.href} className="hover:text-foreground">
                            Slider Page
                        </Link>
                        <Link href="/projects" className="hover:text-foreground">
                            All Projects
                        </Link>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {project.slides.map((src, index) => (
                        <figure
                            key={src}
                            className="space-y-3 border border-foreground/10 bg-white p-3"
                        >
                            <img
                                src={src}
                                alt={`${project.title} image ${index + 1}`}
                                className="block h-auto w-full bg-black/5"
                                decoding="async"
                            />
                            <figcaption className="text-xs leading-relaxed text-foreground/70">
                                {String(index + 1).padStart(2, "0")} · {src}
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </main>
    );
}
