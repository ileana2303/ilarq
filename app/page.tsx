import Sidebar from "@/components/Sidebar";
import ImageLoop from "@/components/image-loop";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background lg:h-screen lg:flex-row lg:overflow-hidden">
      <Sidebar />

      <main className="flex-1 min-h-[calc(100svh-4.5rem)] lg:min-h-0">
        <ImageLoop />
      </main>
    </div>
  );
}
