"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  image: string;
  title?: string;
  href: string;
}

export default function ProjectCard({ image, title, href }: Props) {
  return (
    <Link href={href} className="block group relative overflow-hidden h-full">
      <motion.img
        src={image}
        alt={title || ""}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      {/* subtle overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-500" />

      {/* optional text */}
      {title && (
        <div className="absolute bottom-4 left-4 text-white text-sm opacity-0 group-hover:opacity-100 transition duration-500">
          {title}
        </div>
      )}
    </Link>
  );
}