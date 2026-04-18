export type Project = {
  title: string;
  desc: string;
  image: string;
  tech: string[];
  client?: string;
  result?: string;
  link?: string;
};

export const projects: Project[] = [
  {
    title: "School Management System",
    desc: "Platform for managing students, payments and teachers.",
    image: "/projects/school.jpg",
    tech: ["React", "Node.js", "PostgreSQL"],
    client: "Local School",
    result: "Automated 80% of admin tasks",
    link: "#"
  },
  {
    title: "Business Website",
    desc: "High-conversion website for a local company.",
    image: "/projects/business.jpg",
    tech: ["React", "Tailwind"],
    client: "SME Company",
    result: "+40% customer engagement",
    link: "#"
  },
  {
    title: "Network Infrastructure",
    desc: "Secure LAN network deployment.",
    image: "/projects/network.jpg",
    tech: ["Cisco", "LAN", "Security"],
    client: "Enterprise Client",
    result: "Improved network stability",
  },
  {
    title: "Server Deployment",
    desc: "Linux & Windows server configuration.",
    image: "/projects/server.jpg",
    tech: ["Linux", "Windows Server"],
    result: "99.9% uptime achieved",
  }
];