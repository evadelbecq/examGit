Evan “Eva” Delbecq
Mathias "Camille" Cornano

## Description

Application simple de gestion de tâches. Chaque tâche possède un identifiant unique auto-généré, une description et un statut de complétion.

### Fonctionnalités

**`addTask()`** : Crée une nouvelle tâche et l'ajoute à la liste des tâches.

**`toggleTask()`** : Modifie l'état de complétion d'une tâche spécifique (de `false` à `true`).

**`countDone()`** : Retourne le nombre de tâches accomplies.

**`reset()`** : Vide la liste des tâches et remet le compteur d'identifiants à zéro.

**`getTasks()`** : Retourne la liste complète des tâches.

![CI](https://github.com/evadelbecq/examGit/actions/workflows/ci.yml/badge.svg)

## Commandes Git

- **`git switch`** : Change de branche / **`git checkout`** : Crée une nouvelle branche à partir de la branche courante
- **`git pull`** : Récupère et applique directement les modifications distantes (équivalent à fetch + merge) / **`git fetch`** : Récupère les modifications sans les appliquer, permettant de les examiner avant intégration
- **`git rebase`** : Réécrit l'historique en déplaçant une série de commits vers un nouveau point de base, créant un historique linéaire mais à utiliser avec précaution / **`git revert`** : Annule un commit en créant un nouveau commit inverse, préservant l'historique
- **`git tag`** : Marque des points importants du projet (versions, releases)
- **`git stash`** : Sauvegarde temporairement les modifications en cours sans les commiter, permettant de les récupérer ultérieurement
- **Release** : Version officielle du projet, généralement associée à un tag, marquant une étape stable du développement