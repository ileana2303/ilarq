import Sidebar from "@/components/Sidebar";

export default function Project() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 flex overflow-x-scroll snap-x">
        {[1,2,3,4].map(i => (
          <div key={i} className="min-w-full h-screen bg-gray-200 flex items-center justify-center snap-center">
            Slide {i}
          </div>
        ))}
      </main>
    </div>
  );
}
