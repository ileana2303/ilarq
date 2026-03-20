"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

type MediaCardProps = {
  src: string;
  title?: string;
  type: "image" | "video";
  href?: string;
  hideOnError?: boolean;
  showTitle?: boolean;
};

const tileClassName = "group relative block h-full overflow-hidden";

function MediaContents({
  src,
  title,
  type,
  onMediaError,
  showTitle,
}: Omit<MediaCardProps, "href" | "hideOnError"> & {
  onMediaError?: () => void;
}) {
  return (
    <>
      {type === "video" ? (
        <motion.video
          src={src}
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onError={onMediaError}
        />
      ) : (
        <motion.img
          src={src}
          alt={title || ""}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onError={onMediaError}
        />
      )}

      <div className="absolute inset-0 bg-black/10 transition duration-500 sm:bg-black/0 sm:group-hover:bg-black/10" />

      {showTitle && title && (
        <div className="absolute bottom-4 left-4 pr-4 text-xs text-white transition duration-500 sm:text-sm sm:opacity-0 sm:group-hover:opacity-100">
          {title}
        </div>
      )}
    </>
  );
}

export default function MediaCard({
  src,
  title,
  type,
  href,
  hideOnError = false,
  showTitle = true,
}: MediaCardProps) {
  const [hasError, setHasError] = useState(false);

  if (hideOnError && hasError) {
    return null;
  }

  const handleMediaError = hideOnError ? () => setHasError(true) : undefined;

  if (href) {
    return (
      <Link href={href} className={tileClassName}>
        <MediaContents
          src={src}
          title={title}
          type={type}
          onMediaError={handleMediaError}
          showTitle={showTitle}
        />
      </Link>
    );
  }

  return (
    <div className={tileClassName}>
      <MediaContents
        src={src}
        title={title}
        type={type}
        onMediaError={handleMediaError}
        showTitle={showTitle}
      />
    </div>
  );
}
