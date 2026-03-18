import Sidebar from "@/components/Sidebar";
import ProjectSlider from "@/components/project-slider";

export default function Project({
    params,
}: {
    params: { id: string };
}) {
    const { id } = params;

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar />

            <main className="flex-1 h-screen relative">
                <ProjectSlider projectId={id} />
            </main>
        </div>
    );
}