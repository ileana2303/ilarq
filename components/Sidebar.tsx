export default function Sidebar() {
  return (
    <aside className="flex h-full w-[340px] shrink-0 flex-col justify-between overflow-hidden border-r bg-background px-12 py-16 text-foreground/70">
      <div>
        <h1 className="mb-20 text-[16px] font-medium tracking-[0.06em]">ILARQ STUDIO</h1>
        <nav className="space-y-4 text-[16px] leading-none">
          <a className="block" href="/projects">PROJECTS</a>
          <a className="block" href="/projects">ON SITE</a>
          <a className="block" href="/">CONTACT</a>
        </nav>
      </div>

      <div className="pt-8 text-[15px]">
        <div className="space-y-2">
          <a className="block" href="https://www.instagram.com/ilarq_studio/">Instagram</a>
          <a className="block" href="https://es.pinterest.com/ilarqstudio/">Pinterest</a>
        </div>
      </div>
    </aside>
  );
}
