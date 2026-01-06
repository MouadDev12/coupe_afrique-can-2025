# 🏁 Instructions pour afficher vos drapeaux

## 📁 Structure requise

Placez vos images dans le dossier `public/images/` :

```
public/
  images/
    Maroc.jpg
    Senegal.jpg
    Algerie.jpg
    Cote-dIvoire.jpg
    Egypte.jpg
    Nigeria.jpg
```

## ✅ Étapes à suivre

1. **Créer le dossier** `public/images/` (si pas encore fait)

2. **Copier vos images** dans `public/images/` avec ces noms exacts :
   - `Maroc.jpg`
   - `Senegal.jpg`
   - `Algerie.jpg`
   - `Cote-dIvoire.jpg`
   - `Egypte.jpg`
   - `Nigeria.jpg`

3. **Redémarrer le serveur** :
   ```bash
   npm run dev
   ```

## 🎯 Résultat attendu

- ✅ **Images trouvées** → Affiche le vrai drapeau
- ❌ **Images manquantes** → Affiche les initiales (MA, SN, etc.)

## 🔍 Debug

Si les images ne s'affichent pas, vérifiez :
- Les noms de fichiers correspondent exactement
- Les images sont dans `public/images/` (pas dans `src/`)
- Le serveur a été redémarré après ajout des images

## 📝 URLs générées

- Maroc : `http://localhost:5173/images/Maroc.jpg`
- Sénégal : `http://localhost:5173/images/Senegal.jpg`
- etc.

Testez ces URLs directement dans votre navigateur pour vérifier que les images sont accessibles.