// Tout le contenu du portfolio est ici : modifiez ce fichier pour mettre la page à jour.
import hoptisoins from '../assets/sites/hoptisoins.jpg'
import secrets from '../assets/sites/secrets.jpg'
import mestaoui from '../assets/sites/mestaoui.jpg'
import passerelle from '../assets/sites/passerelle.jpg'
import comptoir from '../assets/sites/comptoir.jpg'
import lmdh from '../assets/sites/lmdh.jpg'
import loni from '../assets/sites/loni.jpg'
import likleek from '../assets/sites/likleek.jpg'

export const profile = {
  name: 'Nicolas Basson',
  intro: "développeur web. Je conçois des solutions métier prêtes à l'emploi pour les organismes et les entreprises.",
  email: 'fabrice.basson@gmail.com',
  phone: '+1 819 524-3715',
  github: { label: 'github.com/StNicolas97', url: 'https://github.com/StNicolas97' },
  linkedin: { label: 'linkedin.com/in/nicolas-basson', url: 'https://www.linkedin.com/in/nicolas-basson-0a1b011a3/' },
  location: 'Granby (Québec)',
}

export const diplomas = [
  { year: 'En cours', title: "DEC en Techniques de l'informatique", school: 'Cégep de Granby' },
  { year: 'En cours', title: 'AWS Certified Cloud Practitioner', school: 'Amazon Web Services' },
  { year: '2024', title: "Certificat d'analyste de données", school: 'Google' },
  { year: '2019', title: 'Baccalauréat en génie logiciel', school: "Institut Africain d'Informatique" },
]

export const awards = [
  'Prix Idéation 2025 · Université de Sherbrooke',
  "Bourse d'excellence · ministère de l'Éducation",
  "Bourse d'excellence · SRAM",
  "Bourse d'excellence · Fondation Pierre-Jules-Crevier",
]

export const beliefs = [
  { title: 'Partir du vrai besoin', text: "Avant d'écrire du code, j'écoute les gens qui vont utiliser l'outil : bénévoles, employés, clients." },
  { title: 'Livrer ce qui sert', text: "Une application réussie est une application qu'on utilise chaque jour, pas seulement une démo." },
  { title: 'Accompagner dans la durée', text: "Après la livraison, je fais un suivi à long terme et j'aide les utilisateurs à vraiment maîtriser leur solution." },
]

// mock : 'route' | 'kanban' | 'tracking' (illustration de l'interface)
export const apps = [
  {
    name: 'Plateforme communautaire',
    tags: [{ label: 'En ligne', live: true }, { label: 'Organisme communautaire' }],
    summary: 'Pour la Fondation Pierre-Jules-Crevier : le personnel coordonne des bénévoles qui offrent des services et du transport accompagné à des bénéficiaires.',
    features: [
      'Demandes de services et de transport accompagné, avec suivi des statuts.',
      'Trajets et arrêts sur une carte, calendrier des disponibilités des bénévoles.',
      "Paiements en ligne et reçus d'impôt en PDF.",
      'Tableaux de bord et rapports, accès propre à chaque rôle.',
      'Application installable qui fonctionne aussi hors ligne.',
    ],
    stack: 'Vue 3 · ASP.NET Core · SQL Server · Stripe',
    url: 'https://webetu.cegepgranby.qc.ca/2388280/connexion',
    mock: 'route',
  },
  {
    name: 'CRM 360 AutoWrap',
    tags: [{ label: 'En ligne', live: true }, { label: 'Entreprise' }],
    summary: "L'équipe de 360 AutoWrap crée, attribue et suit ses travaux selon le type de service.",
    features: [
      'Tableau Kanban et calendrier pour voir les échéances et les priorités.',
      'Fiches clients centralisées.',
      'Besoins recueillis auprès des employés, maquettes validées sur Figma avant le code.',
    ],
    stack: 'Vue 3 · Node.js · PostgreSQL',
    url: 'https://360autowrapcrm.netlify.app/',
    mock: 'kanban',
  },
  {
    name: 'WEKILO',
    tags: [{ label: 'Projet personnel' }, { label: 'Afrique ↔ Occident' }],
    summary: "Des voyageurs transportent les colis de clients qui vivent entre l'Afrique et l'Occident.",
    features: ['Messagerie entre le voyageur et le client.', 'Suivi du colis étape par étape et paiement sécurisé.'],
    stack: 'Vue · ASP.NET (C#) · PostgreSQL',
    url: null,
    mock: 'tracking',
  },
]

export const technologies = [
  { group: 'Front-end', items: ['Vue 3', 'React', 'JavaScript'] },
  { group: 'Back-end', items: ['ASP.NET Core', 'Node.js'] },
  { group: 'Boutiques en ligne', items: ['Shopify', 'WordPress', 'WooCommerce', 'PrestaShop'] },
  { group: 'Infonuagique et déploiement', items: ['AWS', 'Docker', 'GitHub Actions'] },
]

// wide : la carte prend deux colonnes sur grand écran (vue « Tous »)
export const sites = [
  { name: 'hoptisoins.fr', url: 'https://www.hoptisoins.fr/', cat: 'boutique', text: 'Vêtements adaptés aux patients en chimiothérapie et en dialyse.', img: hoptisoins, wide: true },
  { name: 'secretsdeconfitures.fr', url: 'https://secretsdeconfitures.fr/', cat: 'boutique', text: 'Confitures artisanales et abonnements en box.', img: secrets },
  { name: 'mestaoui-art.com', url: 'https://mestaoui-art.com/', cat: 'boutique', text: "Boutique d'œuvres d'art et d'horloges en résine.", img: mestaoui },
  { name: 'La Passerelle – Die Brücke', url: 'https://xn--lapasserelle-diebrckeevv-dtc.com/', cat: 'vitrine', text: "Association germano-burkinabè qui récompense l'innovation en Afrique.", img: passerelle },
  { name: 'lecomptoirexotic.fr', url: 'https://lecomptoirexotic.fr/', cat: 'boutique', text: 'Épicerie fine de produits exotiques, livrée partout en France.', img: comptoir },
  { name: 'lamodedeshommes.fr', url: 'https://lamodedeshommes.fr/', cat: 'boutique', text: 'Mode masculine : chaussures, vêtements et accessoires.', img: lmdh },
  { name: 'loni.cg', url: 'https://www.loni.cg/', cat: 'boutique', text: 'Vente de matériel informatique au Congo.', img: loni },
  { name: 'likleek.com', url: 'https://www.likleek.com/', cat: 'vitrine', text: 'Agence web et marketing numérique.', img: likleek },
]

export const moreSites = [
  { name: 'chemtov.com', url: 'https://www.chemtov.com' },
  { name: 'mamaluva.com', url: 'https://www.mamaluva.com' },
  { name: 'ksfriends.com', url: 'https://ksfriends.com' },
  { name: 'prettygoodstore.com', url: 'https://prettygoodstore.com' },
]
