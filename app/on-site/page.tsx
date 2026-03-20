import { readdirSync } from "fs";
import path from "path";

import Sidebar from "@/components/Sidebar";
import MediaCard from "@/components/media-card";

const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const videoExtensions = new Set([".mp4", ".m4v", ".mov", ".webm"]);

const onSiteDirectory = path.join(process.cwd(), "public/images/on-site");

const onSiteMedia = readdirSync(onSiteDirectory)
  .filter((fileName) => {
    if (fileName.startsWith(".")) {
      return false;
    }

    const extension = path.extname(fileName).toLowerCase();
    return (
      (imageExtensions.has(extension) || videoExtensions.has(extension)) &&
      !path.parse(fileName).name.endsWith("-web")
    );
  })
  .sort((left, right) => left.localeCompare(right, undefined, { numeric: true }))
  .map((fileName, index) => {
    const extension = path.extname(fileName).toLowerCase();

    return {
      src: `/images/on-site/${fileName}`,
      title: `ON SITE ${String(index + 1).padStart(2, "0")}`,
      type: videoExtensions.has(extension) ? ("video" as const) : ("image" as const),
    };
  });

export default function OnSitePage() {
  const rows: Array<{
    featured: (typeof onSiteMedia)[number];
    others: Array<(typeof onSiteMedia)[number]>;
  }> = [];

  for (let i = 0; i < onSiteMedia.length; i += 3) {
    rows.push({
      featured: onSiteMedia[i],
      others: onSiteMedia.slice(i + 1, i + 3),
    });
  }

  return (
    <div className="flex min-h-screen flex-col bg-background lg:h-screen lg:flex-row lg:overflow-hidden">
      <Sidebar />

      <main className="flex-1 space-y-4 p-4 sm:space-y-6 sm:p-6 lg:min-h-0 lg:overflow-y-auto lg:space-y-8 lg:p-8">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="h-[58svh] min-h-[320px] sm:h-[68svh] md:h-[72svh] lg:h-[90vh] lg:min-h-[420px]">
              <MediaCard
                src={row.featured.src}
                title={row.featured.title}
                type={row.featured.type}
                hideOnError
              />
            </div>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              {row.others.map((media, idx) => (
                <div
                  key={`${media.src}-${idx}`}
                  className="h-[34svh] min-h-[240px] sm:h-[40svh] md:h-[44svh] lg:h-[60vh] lg:min-h-[260px]"
                >
                  <MediaCard
                    src={media.src}
                    title={media.title}
                    type={media.type}
                    hideOnError
                  />
                </div>
              ))}

              {row.others.length === 1 && (
                <div className="hidden rounded-lg bg-slate-900/10 md:block" />
              )}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
