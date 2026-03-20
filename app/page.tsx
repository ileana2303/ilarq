import Sidebar from "@/components/Sidebar";
import ImageLoop from "@/components/image-loop";

export default function Home() {
  return (
    <div className="flex h-[100svh] flex-col overflow-hidden bg-background lg:h-screen lg:flex-row">
      <Sidebar />

      <main className="min-h-0 flex-1">
        <ImageLoop />
      </main>
    </div>
  );
}
