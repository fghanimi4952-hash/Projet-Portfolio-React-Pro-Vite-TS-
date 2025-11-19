# Portfolio React Pro

Portfolio professionnel moderne construit avec React, TypeScript, Vite, Tailwind CSS et shadcn/ui.

##  Fonctionnalités

-  **Pages complètes** : Home, Projects, Experience, Education, Certifications, Contact
-  **Design moderne** : Interface responsive avec Tailwind CSS et shadcn/ui
-  **Dark mode** : Toggle pour basculer entre thème clair et sombre
-  **SEO optimisé** : Meta tags et JSON-LD pour un meilleur référencement
-  **TypeScript** : Typage strict pour une meilleure maintenabilité
-  **Données centralisées** : Contenu modifiable dans `src/data/*`
-  **Certifications avec badges** : Affichage des badges avec filtre de recherche
-  **Accessibilité** : ARIA labels et navigation au clavier

##  Installation

```bash
npm install
```

> **Note** : Le projet utilise `--legacy-peer-deps` pour résoudre les conflits de dépendances avec React 19. Ceci est configuré automatiquement via le fichier `.npmrc`.

##  Développement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

##  Build

```bash
npm run build
npm run preview
```

##  Scripts disponibles

- `npm run dev` - Démarrer le serveur de développement
- `npm run build` - Construire pour la production
- `npm run preview` - Prévisualiser le build de production
- `npm run lint` - Vérifier le code avec ESLint
- `npm run format` - Formater le code avec Prettier

##  Structure du projet

```
src/
├── app/              # Configuration du router et layout
├── components/       # Composants réutilisables
│   ├── ui/          # Composants shadcn/ui
│   └── ...
├── data/             # Données centralisées
│   ├── profile.ts
│   ├── projects.ts
│   ├── education.ts
│   ├── experience.ts
│   └── certifications.ts
├── pages/            # Pages de l'application
└── lib/              # Utilitaires
```

##  Personnalisation

### Modifier les données

Éditez les fichiers dans `src/data/` :
- `profile.ts` - Informations personnelles
- `projects.ts` - Liste des projets
- `education.ts` - Formations académiques
- `certifications.ts` - Certifications et badges

### Ajouter des badges de certifications

1. Placez les images dans `public/certs/` (format WebP recommandé)
2. Ajoutez les certifications dans `src/data/certifications.ts`
3. Référencez les images avec `/certs/nom-du-fichier.webp`

##  Déploiement sur Vercel (CI automatique)

### Prérequis

1. Un compte GitHub avec votre code poussé
2. Un compte Vercel (gratuit) : [https://vercel.com](https://vercel.com)

### Étapes de déploiement

#### Option 1 : Déploiement via l'interface Vercel (Recommandé)

1. **Connecter votre repository GitHub**
   - Allez sur [vercel.com](https://vercel.com)
   - Cliquez sur "Add New Project"
   - Importez votre repository GitHub
   - Vercel détectera automatiquement Vite

2. **Configuration du projet**
   - **Framework Preset** : Vite (détecté automatiquement)
   - **Root Directory** : `./` (racine du projet)
   - **Build Command** : `npm run build` (déjà configuré dans `vercel.json`)
   - **Output Directory** : `dist` (déjà configuré dans `vercel.json`)
   - **Install Command** : `npm install --legacy-peer-deps` (déjà configuré dans `vercel.json`)

3. **Variables d'environnement** (si nécessaire)
   - Ajoutez vos variables d'environnement dans les paramètres du projet

4. **Déployer**
   - Cliquez sur "Deploy"
   - Vercel construira et déploiera automatiquement votre site
   - Vous recevrez une URL de production (ex: `portfolio-react-pro.vercel.app`)

#### Option 2 : Déploiement via CLI Vercel (sans installation globale)

```bash
# Se connecter à Vercel (npx évite l'installation globale)
npx vercel login

# Déployer en production
npx vercel --prod
```

> **Note** : Si vous préférez installer Vercel CLI globalement, utilisez `sudo npm i -g vercel` (macOS/Linux) ou exécutez le terminal en tant qu'administrateur (Windows). Cependant, `npx` est recommandé car il évite les problèmes de permissions.

### CI/CD Automatique

Une fois connecté à GitHub, Vercel activera automatiquement le CI/CD :

- ✅ **Déploiement automatique** à chaque push sur `main`/`master`
- ✅ **Preview deployments** pour chaque Pull Request
- ✅ **Rollback** automatique en cas d'erreur de build
- ✅ **Notifications** par email pour chaque déploiement

### Configuration Vercel

Le fichier `vercel.json` est déjà configuré avec :
- ✅ Build command optimisé
- ✅ Output directory (`dist`)
- ✅ Rewrites pour React Router (SPA)
- ✅ Cache headers pour les assets statiques
- ✅ Install command avec `--legacy-peer-deps`

### Domaine personnalisé

1. Allez dans **Settings** → **Domains**
2. Ajoutez votre domaine personnalisé
3. Suivez les instructions DNS fournies par Vercel
4. Vercel configurera automatiquement le SSL/HTTPS

### Monitoring et Analytics

- **Vercel Analytics** : Disponible dans le dashboard Vercel
- **Speed Insights** : Analyse des performances intégrée
- **Logs** : Accessibles dans le dashboard pour le debugging

### Commandes utiles

```bash
# Voir les logs de déploiement
vercel logs

# Lister les déploiements
vercel ls

# Ouvrir le dashboard Vercel
vercel dashboard
```

##  Prochaines étapes

- [ ] Intégrer un formulaire de contact fonctionnel (Formspree ou API serverless)
- [ ] Ajouter des animations avec Framer Motion
- [ ] Intégrer Google Analytics ou Plausible
- [ ] Ajouter un blog/portfolio détaillé
- [ ] Optimiser les images avec lazy loading

