# 🏆 CAN 2025 - Application Web

Une application web moderne et responsive pour suivre la Coupe d'Afrique des Nations 2025 au Maroc.

![React](https://img.shields.io/badge/React-19.2.0-blue.svg)
![Redux](https://img.shields.io/badge/Redux_Toolkit-2.11.2-purple.svg)
![Vite](https://img.shields.io/badge/Vite-7.2.4-green.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)



## 🎯 Aperçu

Cette application permet aux fans de football de suivre la CAN 2025 avec une interface moderne et intuitive. Elle offre une expérience utilisateur optimale sur tous les appareils.

### 🌟 Fonctionnalités principales

- **📱 Design responsive** - Interface adaptée mobile, tablette et desktop
- **🔍 Recherche avancée** - Recherche d'équipes et de matchs en temps réel
- **❤️ Système de favoris** - Sauvegarde des équipes préférées
- **📊 Informations détaillées** - Stats complètes des équipes et joueurs
- **🏟️ Calendrier des matchs** - Suivi des rencontres avec lieux et horaires
- **🎨 Interface moderne** - Design professionnel avec animations fluides

## 🛠️ Technologies utilisées

### Frontend
- **React 19.2.0** - Bibliothèque UI moderne
- **Redux Toolkit 2.11.2** - Gestion d'état prévisible
- **React Router DOM 7.11.0** - Navigation côté client
- **CSS3** - Styles modernes avec animations

### Outils de développement
- **Vite 7.2.4** - Build tool ultra-rapide
- **ESLint** - Linting et qualité du code
- **Node.js** - Environnement d'exécution

## 🚀 Installation

### Prérequis
- Node.js (version 18 ou supérieure)
- npm ou yarn

### Étapes d'installation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/votre-username/can-2025-app.git
   cd can-2025-app
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Démarrer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir l'application**
   ```
   http://localhost:5173
   ```

## 📖 Utilisation

### Commandes disponibles

```bash
# Développement
npm run dev          # Démarre le serveur de développement

# Production
npm run build        # Génère la version de production
npm run preview      # Prévisualise la version de production

# Qualité du code
npm run lint         # Vérifie la qualité du code
```

### Navigation

- **Accueil** - Vue d'ensemble des équipes
- **Équipes** - Liste complète avec recherche et favoris
- **Matchs** - Calendrier des rencontres
- **Favoris** - Équipes sauvegardées

## 📁 Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── Navbar.jsx      # Navigation principale
│   └── TeamFlag.jsx    # Composant drapeau avec fallback
├── features/           # Fonctionnalités par domaine
│   ├── teams/         # Gestion des équipes
│   │   ├── TeamsList.jsx
│   │   ├── TeamsDetails.jsx
│   │   └── matches/
│   │       └── MatchesList.jsx
│   └── favorites/     # Système de favoris
│       └── Favorites.jsx
├── store/             # Configuration Redux
│   └── index.js       # Store et slices
├── data/              # Données JSON
│   ├── teams.json     # Informations des équipes
│   ├── matches.json   # Calendrier des matchs
│   └── players.json   # Données des joueurs
├── assets/            # Ressources statiques
│   └── images/        # Images et drapeaux
└── styles/            # Fichiers CSS
```







## 🙏 Remerciements

- [React](https://reactjs.org/) pour la bibliothèque UI
- [Redux Toolkit](https://redux-toolkit.js.org/) pour la gestion d'état
- [Vite](https://vitejs.dev/) pour l'outil de build
- [CAF](https://www.cafonline.com/) pour les données officielles

---

