export type Certification = {
  title: string;
  shortTitle?: string;      // Titre court pour l'affichage (ex: "Java Fundamentals")
  issuer: string;
  issueDate: string;        // "YYYY-MM"
  expiryDate?: string;      // "YYYY-MM"
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  tags?: string[];
  image?: string;           // "/images/certs/java-cert.jpg"
  imageAlt?: string;        // "Badge AWS SAA"
  status?: "active" | "expired" | "revoked" | "pending";
  score?: number;           // Score obtenu (pourcentage)
};

export const certifications: Certification[] = [
  {
    title: "Fondamentaux et Concepts Avancés de la Programmation Java",
    shortTitle: "Java Fundamentals",
    issuer: "MLIAEdu",
    issueDate: "2025-10",
    credentialId: "6-0cb05bd8-a850-4bd0-b184-2bcb3fa335",
    skills: ["Java", "Programmation Orientée Objet", "Concepts Avancés Java"],
    tags: ["Java", "OOP", "Programming Basics"],
    status: "active",
    score: 79,
    image: "/images/certs/java-cert.jpg",
    imageAlt: "Certification Java MLIAEdu"
  },
  {
    title: "Hibernate & JPA",
    shortTitle: "Hibernate & JPA",
    issuer: "MLIAEdu",
    issueDate: "2025-10",
    credentialId: "28-0cb05bd8-a850-4bd0-b184-2bcb3fa335",
    skills: ["Hibernate", "JPA", "ORM", "Java EE"],
    tags: ["Hibernate", "ORM", "JPA"],
    status: "active",
    score: 88,
    image: "/images/certs/hibernate-cert.jpg",
    imageAlt: "Certification Hibernate & JPA MLIAEdu"
  },
  {
    title: "Développement Front-End moderne avec React",
    shortTitle: "React Front-End Development",
    issuer: "MLIAEdu",
    issueDate: "2025-11",
    credentialId: "26-0cb05bd8-a850-4bd0-b184-2bcb3fa335df-626407",
    skills: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "React Router", "Framer Motion"],
    tags: ["React", "Hooks", "Front-End", "Web Development"],
    status: "active",
    score: 91,
    image: "/images/certs/react-cert.jpg",
    imageAlt: "Certification React MLIAEdu - Score 91%"
  }
];
