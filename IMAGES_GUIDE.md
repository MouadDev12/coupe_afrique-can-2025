# Guide d'ajout d'images

## Structure des dossiers

```
src/
  assets/
    images/
      flags/          # Drapeaux des équipes
        morocco.png
        senegal.png
        algeria.png
        ...
      logos/          # Logos et autres images
        can-logo.png
        ...
```

## Comment ajouter des images

### 1. Drapeaux des équipes
- Placez les images des drapeaux dans `src/assets/images/flags/`
- Format recommandé : PNG ou JPG
- Taille recommandée : 60x40px (ratio 3:2)
- Nommage : `nom-pays.png` (ex: `cote-divoire.png`)

### 2. Autres images
- Logos : `src/assets/images/logos/`
- Photos de joueurs : `src/assets/images/players/`
- Stades : `src/assets/images/stadiums/`

## Utilisation dans le code

### Import d'image
```jsx
import moroccoFlag from '../assets/images/flags/morocco.png';
```

### Avec le composant TeamFlag (recommandé)
```jsx
<TeamFlag 
  src="/src/assets/images/flags/morocco.png"
  alt="Drapeau Maroc"
  className="team-flag"
  teamName="Maroc"
/>
```

### Image directe
```jsx
<img src="/src/assets/images/flags/morocco.png" alt="Drapeau Maroc" />
```

## Fallback automatique
Le composant `TeamFlag` affiche automatiquement les initiales du pays si l'image n'est pas trouvée.

## Sources d'images gratuites
- [Flagpedia](https://flagpedia.net/) - Drapeaux haute qualité
- [Unsplash](https://unsplash.com/) - Photos libres de droits
- [Pixabay](https://pixabay.com/) - Images gratuites
- [Wikimedia Commons](https://commons.wikimedia.org/) - Images libres