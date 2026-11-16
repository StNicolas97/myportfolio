# Portfolio · Nicolas Basson

Site en Vue 3 + Vite + Bootstrap 5.

## Modifier le contenu
Tout le texte (profil, diplômes, applications, technologies, sites) est dans `src/data/content.js`.
Les captures des sites sont dans `src/assets/sites/`.

## Lancer en local
```bash
npm install
npm run dev
```

## Déployer sur Netlify
**Option A, avec GitHub (recommandée)**
1. Poussez ce dossier dans un dépôt GitHub.
2. Sur Netlify : Add new site → Import an existing project → choisissez le dépôt.
3. Netlify lit `netlify.toml` : commande `npm run build`, dossier `dist`. Cliquez sur Deploy.
Chaque `git push` redéploie le site automatiquement.

**Option B, glisser-déposer**
1. `npm run build`
2. Glissez le dossier `dist` sur https://app.netlify.com/drop
