export type Project = {
    id: string;
    title: string;
    href: string;
    previewImage: string;
    slides: string[];
};

const azSlides = [
    "/images/projects/AZ/1.JPG",
    "/images/projects/AZ/2.JPG",
    "/images/projects/AZ/4.JPG",
    "/images/projects/AZ/6.JPG",
    "/images/projects/AZ/7.JPG",
    "/images/projects/AZ/8.JPG",
    "/images/projects/AZ/9.JPG",
    "/images/projects/AZ/10.JPG",
    "/images/projects/AZ/11.JPG",
    "/images/projects/AZ/12.JPG",
    "/images/projects/AZ/13.jpg",
    "/images/projects/AZ/14.jpg",
];

const olvosSlides = [
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
];

const politeiaSlides = [
    "/images/projects/politeia/1.jpg",
    "/images/projects/politeia/2.jpg",
    "/images/projects/politeia/3.jpg",
    "/images/projects/politeia/4.jpg",
];

const lokossaSlides = [
    "/images/projects/lokossa/1.jpg",
    "/images/projects/lokossa/2.jpg",
    "/images/projects/lokossa/3.jpg",
];

const hainanSlides = [
    "/images/projects/HAINAN/1.jpg",
    "/images/projects/HAINAN/2.jpg",
    "/images/projects/HAINAN/3.jpg",
    "/images/projects/HAINAN/4.jpg",
    "/images/projects/HAINAN/5.jpg",
    "/images/projects/HAINAN/6.jpg",
];

export const projects: Project[] = [
    {
        id: "San Cinturón",
        title: "AZ64 Residence . Athens",
        href: "/projects/San Cinturón",
        previewImage: "/images/projects/AZ/1.jpg",
        slides: azSlides,
    },
    {
        id: "Olvos",
        title: "Olvos Hotel . Koufonisi",
        href: "/projects/Olvos",
        previewImage: "/images/projects/olvos/1.jpg",
        slides: olvosSlides,
    },
    {
        id: "Politeia",
        title: "Politeia Private Residence . Athens",
        href: "/projects/Politeia",
        previewImage: "/images/projects/politeia/1.jpg",
        slides: politeiaSlides,
    },
    {
        id: "Punta",
        title: "Island House . Paros",
        href: "/projects/Punta",
        previewImage: "/images/projects/lokossa/1.jpg",
        slides: lokossaSlides,
    },
    {
        id: "Tanpopo",
        title: "University . China",
        href: "/projects/Tanpopo",
        previewImage: "/images/projects/HAINAN/1.jpg",
        slides: hainanSlides,
    }
];

export const projectsById = projects.reduce<Record<string, Project>>(
    (catalog, project) => {
        catalog[project.id] = project;
        return catalog;
    },
    {}
);

export function getProjectById(id: string) {
    return projectsById[id];
}
