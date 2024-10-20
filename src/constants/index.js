import project1 from "../assets/projects/project-ong.png";
import project2 from "../assets/projects/project-kasa.png";
import project3 from "../assets/projects/project-seo.png";
import project4 from "../assets/projects/project-sophie.png";
import project5 from "../assets/projects/project-plan.png";

export const HERO_CONTENT = `Je suis un développeur web débutant passionné, avec une année d'expérience dans la création d'applications web. J'ai acquis des compétences en front-end avec React, HTML, CSS, Tailwind, ainsi qu'en back-end avec Node.js, Express, et MongoDB. Désireux de continuer à évoluer, je cherche à intégrer une entreprise dynamique où je pourrai perfectionner mes compétences existantes tout en apprenant de nouvelles technologies, afin d'acquérir une stack complète et participer activement au développement de projets innovants. Mon ambition est de contribuer à des solutions qui allient performance et expérience utilisateur exceptionnelle.
`
export const ABOUT_TEXT = `Je suis un développeur full stack dévoué et polyvalent, passionné par la création d'applications web performantes et intuitives. Avec une année d'expérience professionnelle, j'ai eu l'opportunité de travailler avec diverses technologies telles que React, Node.js, et MongoDB. Mon parcours dans le développement web a débuté par une passion et curiosité profonde pour la technologie, cela s'est transformé en une carrière où je cherche constamment à améliorer mes compétences et à relever de nouveaux défis. J'apprécie les environnements collaboratifs et je prends plaisir à résoudre des problèmes complexes pour fournir des solutions efficaces. En dehors du développement, je m'intéresse à l'exploration de nouvelles technologies et j'aime contribuer à des projets qui ont un impact réel.`
export const EXPERIENCES = [
  {
    year: "2024 - En cours",
    role: "Développeur Full Stack",
    company: "ONG",
    description: `Conception et développement d’un site web pour la gestion des activités d’une association, en utilisant React.js, Node.js, Express, et MongoDB. Le frontend, développé avec React.js, offre une interface utilisateur intuitive, tandis que le backend, basé sur Node.js et Express, gère les API et les interactions avec une base de données MongoDB. Ce projet met en avant mes compétences en développement fullstack et mon aptitude à réaliser des solutions complètes.`,
    technologies: ["React.js","Node.Js", "Express", "mongoDB"],
  },
  {
    year: "2024 - 2024",
    role: "Développeur Frontend",
    company: "Openclassroom",
    description: `J'ai développé le frontend de Kasa, une application de location de logements, en utilisant React, SaaS, et React Router. Ce projet a consisté à implémenter des composants réutilisables et à configurer les routes de l'application pour une navigation fluide. L'interface utilisateur est conçue pour offrir une gestion des annonces immobilières efficace, avec une expérience utilisateur fluide et réactive.`,
    technologies: ["React", "Saas", "React Router"],
  },
  {
    year: "2024 - 2024",
    role: "Développeur Frontend",
    company: "Openclassroom",
    description: `J'ai accompagné un client dans l'amélioration de son positionnement sur Google en appliquant les bonnes pratiques de SEO et d'accessibilité. J'ai également rédigé le cahier des charges pour définir les objectifs du projet et les attentes en matière de performance. En parallèle, j'ai débogué plusieurs anomalies dans le code afin d'optimiser le site et d'offrir une meilleure expérience utilisateur.`,
    technologies: ["Chrome DevTools", "Wave", "GTmetrix"],
  },
  {
    year: "2024 - 2024",
    role: "Développeur Frontend",
    company: "Openclassrooms",
    description: `J'ai aidé à finaliser le nouveau site internet d'une architecte en créant un site dynamique avec HTML, CSS, et JavaScript. Le site interagit avec une API pour afficher les projets de l'architecte sur la page et dans une modale en temps réel et offrir une expérience utilisateur enrichissante. Tout en implémentant l'authentification pour l'administrateur du site`,
    technologies: ["HTML", "CSS", "Javascript"],
  },
];

export const PROJECTS = [
  {
    title: "Site web d'une Association",
    image: project1,
    description:
      "Site web pour la gestion des activités d’une association, en utilisant React.js, Node.js, Express, et MongoDB.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Kasa Project",
    image: project2,
    description:
      "Implémentation du frontend de cette application web de location immobilière similaire à AirBnB.",
    technologies: ["React", "Saas", "React Router"],
  },
  {
    title: "Débogage et Optimisation d'un Site",
    image: project3,
    description:
      "J'ai accompagné un client dans le débogage et l'optimisation de son site en appliquant les bonnes pratiques de SEO et d'accessibilité, tout en documentant mon travail",
    technologies: ["Chrome DevTools", "Wave", "GTmetrix"],
  },
  {
    title: "PortFolio Sophie Bluel",
    image: project4,
    description:
      "J'ai finaliser le portfolio d’une architecte grâce à la création d’un site dynamique avec JavaScript, communiquant avec une API.",
    technologies: ["HTML", "CSS", "Javascript", "API"],
  },
  {
    title: "Planification du Développement du site d'un client",
    image: project5,
    description:
      "J'ai planifiez chacune des étapes du projet de développement d’un site de création de menus pour les restaurateurs.",
    technologies: ["Notion", "Figma"],
  },
];

export const CONTACT = {
  address: "3 Rue des Petites Maulévries, 49000 Angers ",
  phoneNo: "+33 7 82 87 74 68 ",
  email: "smorlaye313@gmail.com",
};
