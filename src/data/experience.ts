export type Experience = {
  title: string;
  company: string;
  location?: string;
  start: string;
  end?: string;
  description?: string;
  responsibilities?: string[];
  achievements?: string[];
};

export const experiences: Experience[] = [
  {
    title: "Professeure d'informatique",
    company: "Éducation Nationale",
    location: "Province Rhamna",
    start: "2024-09",
    end: undefined, // Présent
    description: "Enseignement de l'informatique au niveau secondaire",
    responsibilities: [
      "Enseignement des fondamentaux de l'informatique",
      "Initiation à la programmation et aux technologies numériques",
      "Accompagnement pédagogique des élèves",
      "Intégration des technologies émergentes dans les pratiques pédagogiques"
    ],
    achievements: [
      "Prise de fonction en 2024",
      "Développement de projets pédagogiques innovants"
    ]
  },
  {
    title: "Stage d'enseignement",
    company: "Lycée Ibn Abbad",
    location: "Marrakech",
    start: "2024-02",
    end: "2024-06",
    responsibilities: [
      "Participation à des séances d'observation",
      "Préparation des cours et des évaluations",
      "Explication et présentation des notions en classe",
      "Accompagnement et orientation des élèves durant les travaux pratiques (TP)",
      "Suivi et correction des travaux des élèves"
    ]
  },
  {
    title: "Stage en administration",
    company: "Lycée Abou Al Abass Assabti",
    location: "Marrakech",
    start: "2023-03",
    end: "2023-07",
    responsibilities: [
      "Vérification des dossiers d'élèves",
      "Aide aux élèves de première et deuxième année du baccalauréat pour corriger leurs informations sur Massar",
      "Surveillance et ordre dans les couloirs",
      "Vérification des notes sur Massar",
      "Gestion des archives",
      "Préparation des documents d'examen du baccalauréat",
      "Assurer la surveillance d'un examen régional blanc",
      "Coordination des convocations pour la surveillance des examens du baccalauréat"
    ]
  },
  {
    title: "Stage d'enseignement et d'administration",
    company: "Lycée IBN ABBAD",
    location: "Marrakech",
    start: "2022-10",
    end: "2022-12",
    responsibilities: [
      "Participation à des séances d'observation avec un professeur d'informatique",
      "Surveillance des entrées et sorties",
      "Gestion des feuilles d'absence et enregistrement des absences sur les cartes d'identité",
      "Vérification des informations des étudiants",
      "Collaboration dans la maintenance des ordinateurs d'administration",
      "Préparation d'examens et de convocations"
    ]
  }
];

