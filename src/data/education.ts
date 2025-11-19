export type Education = {
  school: string; 
  degree: string; 
  field?: string;
  location?: string; 
  start: string; 
  end?: string;
  gpa?: string; 
  courses?: string[]; 
  highlights?: string[];
};

export const education: Education[] = [
  {
    school: "Ecole Normale Supérieure Marrakech",
    degree: "Master",
    field: "Didactique – Option Technologies Émergentes en Éducation (TEE)",
    location: undefined, // Marrakech déjà dans le nom de l'école
    start: "2024-09",
    end: undefined, // Présent
    highlights: ["Formation continue en didactique des technologies émergentes"]
  },
  {
    school: "Centre Régional des Métiers de l'Éducation & de la Formation Région Marrakech-Safi",
    degree: "Formation pédagogique",
    field: "Option Enseignement Secondaire Informatique",
    location: "Marrakech-Safi",
    start: "2023-09",
    end: "2024-06",
    highlights: ["Certification pédagogique pour l'enseignement secondaire informatique"]
  },
  {
    school: "ENS Marrakech",
    degree: "Licence",
    field: "Éducation – Option Enseignement Secondaire Informatique",
    location: undefined, // Marrakech déjà dans le nom de l'école
    start: "2020-09",
    end: "2023-06",
    courses: ["Pédagogie","Didactique de l'informatique","Technologies éducatives"],
    highlights: ["Formation spécialisée en enseignement de l'informatique"]
  },
  {
    school: "Lycée Ibn Abbad",
    degree: "Baccalauréat",
    field: "Sciences Physiques",
    location: "Marrakech",
    start: "2019-09",
    end: "2019-06",
    highlights: ["Baccalauréat Sciences Physiques"]
  }
];
