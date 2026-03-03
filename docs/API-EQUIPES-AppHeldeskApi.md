# API Équipes – AppHeldeskApi

Le front (helpdesk-v2) gère les **équipes** et l’**attribution des tickets** par catégorie.  
Chaque équipe est responsable d’un ensemble de **catégories**. Lors de l’attribution d’un ticket, seuls les **membres de l’équipe** qui gère la catégorie du ticket sont proposés.

En attendant que ces endpoints existent dans **AppHeldeskApi**, le front utilise la config locale (`src/app/config/equipes.js`).  
Dès que l’API exposera les routes ci‑dessous, le service `src/app/services/apiEquipes.js` pourra les appeler (il est déjà prêt avec un fallback sur la config).

---

## Modèle de données côté API

- **Catégorie** : id, libelle (ex. Bug logiciel, Connexion, Paiement, Autre).
- **Équipe** : id, nom, liste des catégorieIds gérés (ex. Équipe Front → [1, 4], Équipe API → [2, 3]).
- **Membre** : id, nom, email, equipeId (ou teamId).

Un **ticket** a au moins : `categorieId` (ou `categorieLibelle`) pour que le front détermine l’équipe et donc les membres assignables.

---

## Endpoints à implémenter dans AppHeldeskApi

### 1. Membres assignables pour une catégorie

Retourne les membres de l’équipe qui gère cette catégorie.

```
GET /api/Membres?categorieId={categorieId}
```

**Réponse attendue (exemple) :**

```json
[
  { "id": 1, "nom": "Paul Dupont", "email": "paul@example.com", "equipeId": 1 },
  { "id": 2, "nom": "Marie Leroy", "email": "marie@example.com", "equipeId": 1 }
]
```

Ou un objet avec une propriété `membres` :

```json
{ "membres": [ ... ] }
```

Le front utilisera cet endpoint dans `apiEquipes.getMembresPourCategorie(categorieId)`.

---

### 2. (Optionnel) Liste des équipes

Pour une future page « Gestion des équipes » ou pour afficher les équipes côté admin.

```
GET /api/Equipes
```

**Réponse attendue (exemple) :**

```json
[
  { "id": 1, "nom": "Équipe Front", "categorieIds": [1, 4] },
  { "id": 2, "nom": "Équipe API", "categorieIds": [2, 3] }
]
```

---

### 3. Attribution du ticket (PATCH/PUT)

Quand l’utilisateur clique sur « Attribuer », le front peut continuer à mettre à jour l’état local ; pour persister côté API, un endpoint du type :

```
PATCH /api/Tickets/{id}
Body: { "assigneId": 2 }
```

ou selon votre modèle :

```
PUT /api/Tickets/{id}/Assigner
Body: { "membreId": 2 }
```

À brancher dans `AttribuerTicket` une fois que le flux actuel (state + alerte) est validé.

---

## Config locale actuelle (front)

Fichier : `src/app/config/equipes.js`

- **Catégories** : 1 = Bug logiciel, 2 = Connexion, 3 = Paiement, 4 = Autre.
- **Équipes** :  
  - Équipe Front → catégories 1, 4  
  - Équipe API → catégories 2, 3  
- **Membres** : Paul & Marie (équipe Front), Ali & Sophie (équipe API).

Vous pouvez aligner les données dans AppHeldeskApi sur cette structure, puis remplacer progressivement les appels à la config par les appels à l’API dans `apiEquipes.js`.
