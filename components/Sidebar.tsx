export default function Sidebar() {
  return (
    <aside className="w-[260px] h-screen border-r p-6 flex flex-col justify-between">
      <div>
        <h1 className="font-semibold mb-8">ILARQ STUDIO</h1>
        <nav className="space-y-3 text-sm">
          <a href="/">WHO WE ARE</a>
          <a href="/">MODUS VIVENDI</a>
          <a href="/projects">PROJECTS</a>
          <a href="/">PRESS</a>
          <a href="/">CONTACT</a>
        </nav>
      </div>
      <div className="text-xs">Instagram<br/>Pinterest</div>
    </aside>
  );
}
