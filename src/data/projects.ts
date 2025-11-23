export type Project = {
  title: string; 
  period?: string; 
  tags: string[];
  summary: string; 
  link?: string; 
  repo?: string; 
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Projet Unity 3D - Environnement Naturel",
    period: "2024",
    tags: ["Unity", "C#", "3D", "Character Controller"],
    summary: "Ce projet représente ma première expérience avec Unity. Il s'agit d'une scène 3D dans un environnement naturel, où un personnage (Player) peut se déplacer librement à l'aide des touches de direction. Le but est de comprendre les bases du moteur Unity, notamment l'utilisation du Character Controller, la création d'objets 3D naturels (terrain, arbres, herbe, ciel, lumière) et l'intégration d'une caméra de suivi.",
    repo: "https://github.com/fghanimi4952-hash/projet1_Unity.git"
  },
  {
    title: "To-Do List Interactive - Projet React",
    period: "2024",
    tags: ["React", "JavaScript", "CSS", "HTML"],
    summary: "Application To-Do List interactive créée avec React dans le cadre du TP 4. Fonctionnalités : ajouter des tâches, afficher et cocher les tâches terminées, supprimer des tâches. Interface moderne et responsive.",
    repo: "https://github.com/fghanimi4952-hash/-TP-4-Projet-de-synth-se-React-To-Do-List-interactive-ou-Blog-simple.git"
  },
  {
    title: "Système Solaire – Projet Éducatif Unity",
    period: "2024",
    tags: ["Unity", "C#", "3D", "Éducation"],
    summary: "Simulation du système solaire développée avec Unity, utilisée comme module de formation interactif pour les enfants. Fonctionnalités : vue réaliste du système solaire, planètes interactives, objectif éducatif, musique et effets sonores d'ambiance pour une expérience immersive.",
    repo: "https://github.com/fghanimi4952-hash/-solary_system.git"
  },
  {
    title: "Portfolio React Pro",
    period: "2024",
    tags: ["React","TypeScript","Tailwind CSS","Vite"],
    summary: "Portfolio professionnel moderne développé avec React, TypeScript et Tailwind CSS pour présenter mon parcours et mes compétences.",
    repo: "https://github.com/fghanimi4952-hash/Projet-Portfolio-React-Pro-Vite-TS-.git"
  }
];
