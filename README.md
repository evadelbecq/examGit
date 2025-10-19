# Examen Git
Evan “Eva” Delbecq
Mathias “Camille” Cornano

## Description:

Petit programme de gestion de taches, identifiées par un Id auto-incrémenté, un descriptif, et un état de complétion.

**`addTask()`:** Crée une tache (task) et l’ajoute à la liste (tasks).

**`toggleTask()`:** Cible une tache dans la liste et change son état de complétion de `false` à `true`.

**`countDone():`** Compte les taches accomplies dans la liste.

**`reset()`:** Vide la liste et remet l’indentateur des taches à 0

**`getTasks()`:** Permet de récupérer la liste des taches.

![CI](https://github.com/evadelbecq/examGit/actions/workflows/ci.yml/badge.svg)

## Commandes git :

- `git switch` change de branche/ `git checkout` en crée une nouvelle à partir de la branche actuelle.
- `git pull` récupère les modifications sur le repo et les ajoute directement à l’espace de travail (comme un merge) / `git fetch` permet de les récupérer, et de décider quoi faire ensuite, généralement pour les comparer.
- `git rebase` change l’historique des corrections en déplaçant une branche qui n’a pas été commit vers un autre point de départ, c’est plus esthétique qu’autre chose, c’est pour garder un argre de projet propre mais c’est à utiliser avec précaution, cela crée souvent des conflits et/ou pertes de données lorsqu’on joue avec/ `git revert` permet d’annuler un commit en le remplaçant par un autre, gardant l’historique des corrections tel quel.
- `git tag` permet de nommer les moments importants du projet, notamment les versions stables.
- `git stash` c’est un commit qui commit pas, ça met les changements de coté sans les appliquer tout de suite, et on peut les récupérer plus tard
- **Une release** c’est une version officielle du projet, souvent associée à un tag, elle permet de clairement rythmer le développement, en disant que la branche main ou master est en ligne.
