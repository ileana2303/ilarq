import Sidebar from "@/components/Sidebar";
import ImageLoop from "@/components/image-loop";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 h-screen">
        <ImageLoop />
      </main>
    </div>
  );
}