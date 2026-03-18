export type Project = {
    id: string;
    title: string;
    slides: string[];
};

const azSlides = [
    "/images/projects/AZ/1.JPG",
    "/images/projects/AZ/2.JPG",
    "/images/projects/AZ/3.JPG",
    "/images/projects/AZ/4.JPG",
    "/images/projects/AZ/5.JPG",
    "/images/projects/AZ/6.JPG",
    "/images/projects/AZ/7.png",
];

const olvosSlides = [
    "/images/projects/olvos/1.jpg",
    "/images/projects/olvos/2.jpg",
    "/images/projects/olvos/3.jpg",
    "/images/projects/olvos/4.jpg",
    "/images/projects/olvos/5.jpg",
];

export const projects: Project[] = [
    {
        id: "1",
        title: "AZ Residence",
        slides: azSlides,
    },
    {
        id: "2",
        title: "AZ Residence Detail Study",
        slides: azSlides.slice(1, 6),
    },
    {
        id: "3",
        title: "Olvos Residence",
        slides: olvosSlides,
    },
    {
        id: "4",
        title: "Olvos Residence Detail Study",
        slides: olvosSlides.slice(1),
    },
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
