/**
 * Configuration équipes / catégories
 * Chaque équipe gère un ensemble de catégories.
 * Lors de l'attribution d'un ticket, seuls les membres de l'équipe
 * responsable de la catégorie du ticket sont proposés.
 */

export const CATEGORIES = [
  { id: 1, libelle: "Bug logiciel" },
  { id: 2, libelle: "Connexion" },
  { id: 3, libelle: "Paiement" },
  { id: 4, libelle: "Autre" },
];

/** Équipes : id, nom, categoryIds (catégories gérées par cette équipe) */
export const EQUIPES = [
  { id: 1, nom: "Équipe Front", categorieIds: [1, 4] },   // Bug logiciel, Autre
  { id: 2, nom: "Équipe API", categorieIds: [2, 3] },       // Connexion, Paiement
];

/** Membres : id, nom, email, equipeId */
export const MEMBRES_EQUIPES = [
  { id: 1, nom: "Paul Dupont", email: "paul@example.com", equipeId: 1 },
  { id: 2, nom: "Marie Leroy", email: "marie@example.com", equipeId: 1 },
  { id: 3, nom: "Ali Koné", email: "ali@example.com", equipeId: 2 },
  { id: 4, nom: "Sophie Martin", email: "sophie@example.com", equipeId: 2 },
];

/**
 * Retourne l'équipe qui gère la catégorie donnée (première équipe trouvée).
 */
export function getEquipePourCategorie(categorieId) {
  const id = typeof categorieId === "number" ? categorieId : parseInt(categorieId, 10);
  return EQUIPES.find((e) => e.categorieIds.includes(id)) ?? null;
}

/**
 * Retourne les membres assignables pour un ticket de la catégorie donnée.
 * Si pas d'équipe pour cette catégorie, retourne tous les membres (fallback).
 */
export function getMembresPourCategorie(categorieId) {
  const equipe = getEquipePourCategorie(categorieId);
  if (!equipe) return MEMBRES_EQUIPES;
  return MEMBRES_EQUIPES.filter((m) => m.equipeId === equipe.id);
}

export function getLibelleCategorie(categorieId) {
  const c = CATEGORIES.find((x) => x.id === categorieId || x.id === parseInt(categorieId, 10));
  return c?.libelle ?? "—";
}
