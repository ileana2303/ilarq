"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigationLinks = [
  { href: "/projects", label: "PROJECTS" },
  { href: "/projects", label: "ON SITE" },
  { href: "/", label: "CONTACT" },
];

const socialLinks = [
  { href: "https://www.instagram.com/ilarq_studio/", label: "Instagram" },
  { href: "https://es.pinterest.com/ilarqstudio/", label: "Pinterest" },
];

function SiteLinks() {
  return (
    <>
      <div>
        <h1 className="mb-12 text-[15px] font-medium tracking-[0.06em] sm:mb-16 sm:text-[16px]">
          <Link href="/">ILARQ STUDIO</Link>
        </h1>

        <nav className="space-y-4 text-[15px] leading-none sm:text-[16px]">
          {navigationLinks.map((link) => (
            <Link key={link.label} className="block" href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="pt-8 text-[14px] sm:text-[15px]">
        <div className="space-y-2">
          {socialLinks.map((link) => (
            <a key={link.label} className="block" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default function Sidebar() {
  return (
    <>
      <header className="sticky top-0 z-40 flex items-center justify-between border-b bg-background/95 px-5 py-4 text-foreground/70 backdrop-blur-sm lg:hidden">
        <Link
          href="/"
          className="text-[15px] font-medium tracking-[0.06em] sm:text-[16px]"
        >
          ILARQ STUDIO
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon-sm"
              className="text-foreground/70"
              aria-label="Open navigation"
            >
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="w-[min(88vw,360px)] border-r px-0"
            showCloseButton
          >
            <SheetHeader className="px-6 pb-0 pt-6">
              <SheetTitle className="text-[15px] uppercase tracking-[0.06em] text-foreground/70">
                ILARQ STUDIO
              </SheetTitle>
            </SheetHeader>

            <div className="flex flex-1 flex-col justify-between px-6 pb-8 pt-10 text-foreground/70">
              <SiteLinks />
            </div>
          </SheetContent>
        </Sheet>
      </header>

      <aside className="hidden h-screen w-[280px] shrink-0 flex-col justify-between overflow-hidden border-r bg-background px-8 py-10 text-foreground/70 lg:flex xl:w-[340px] xl:px-12 xl:py-16">
        <SiteLinks />
      </aside>
    </>
  );
}
