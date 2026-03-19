export type Project = {
  id: string;
  title: string;
  previewImage: string;
  slides: string[];
  href: string;
};

export const projects: Project[] = [
  {
    id: "Politeia",
    title: "Politeia Private Residence . Athens",
    previewImage: "/images/projects/politeia/1.jpg",
    href: "/projects/Politeia",
    slides: [
      "/images/projects/politeia/1.jpg",
      "/images/projects/politeia/2.jpg",
      "/images/projects/politeia/3.jpg",
      "/images/projects/politeia/4.jpg",
    ],
  },
  {
    id: "Tanpopo",
    title: "Tanpopo University . China",
    previewImage: "/images/projects/tanpopo/1.jpg",
    href: "/projects/Tanpopo",
    slides: [
      "/images/projects/tanpopo/1.jpg",
      "/images/projects/tanpopo/2.jpg",
      "/images/projects/tanpopo/3.jpg",
      "/images/projects/tanpopo/4.jpg",
      "/images/projects/tanpopo/5.jpg",
      "/images/projects/tanpopo/6.jpg",
    ],
  },
  {
    id: "Voula",
    title: "Voula Residence . Athens",
    previewImage: "/images/projects/voula/2.jpg",
    href: "/projects/Voula",
    slides: [
      "/images/projects/voula/1.jpg",
      "/images/projects/voula/2.jpg",
      "/images/projects/voula/3.jpg",
      "/images/projects/voula/4.jpg",
    ],
  },
  {
    id: "San-Cinturón",
    title: "San Cinturón Residence . Athens",
    previewImage: "/images/projects/AZ/1.jpg",
    href: "/projects/San-Cinturón",
    slides: [
      "/images/projects/AZ/1.jpg",
      "/images/projects/AZ/2.JPG",
      "/images/projects/AZ/3.JPG",
      "/images/projects/AZ/4.JPG",
      "/images/projects/AZ/5.JPG",
      "/images/projects/AZ/6.jpg",
      "/images/projects/AZ/7.jpg",
      "/images/projects/AZ/8.JPG",
      "/images/projects/AZ/9.JPG",
      "/images/projects/AZ/10.JPG",
      "/images/projects/AZ/11.jpg",
      "/images/projects/AZ/12.jpg",
      "/images/projects/AZ/13.JPG",
      "/images/projects/AZ/14.JPG",
    ],
  },
  {
    id: "Punta",
    title: "Island House . Paros",
    previewImage: "/images/projects/lokossa/1.jpg",
    href: "/projects/Punta",
    slides: [
      "/images/projects/lokossa/1.jpg",
      "/images/projects/lokossa/2.jpg",
      "/images/projects/lokossa/3.jpg",
    ],
  },
  {
    id: "JM",
    title: "Summer House . Mykonos",
    previewImage: "/images/projects/JM/4.jpg",
    href: "/projects/JM",
    slides: [
      "/images/projects/JM/1.jpg",
      "/images/projects/JM/2.jpg",
      "/images/projects/JM/3.jpg",
      "/images/projects/JM/4.jpg",
      "/images/projects/JM/5.jpg",
    ],
  },
  {
    id: "Olvos",
    title: "Olvos Hotel . Koufonisi",
    previewImage: "/images/projects/olvos/1.jpg",
    href: "/projects/Olvos",
    slides: [
      "/images/projects/olvos/1.jpg",
      "/images/projects/olvos/2.jpg",
      "/images/projects/olvos/3.jpg",
      "/images/projects/olvos/4.jpg",
      "/images/projects/olvos/5.jpg",
      "/images/projects/olvos/6.jpg",
      "/images/projects/olvos/7.jpg",
      "/images/projects/olvos/8.jpg",
      "/images/projects/olvos/9.jpg",
      "/images/projects/olvos/10.jpg",
      "/images/projects/olvos/11.jpg",
      "/images/projects/olvos/12.jpg",
      "/images/projects/olvos/14.jpg",
    ],
  },
];

export function getProjectById(id: string) {
  return projects.find((project) => project.id === decodeURIComponent(id));
}
