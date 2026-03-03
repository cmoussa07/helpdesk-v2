/**
 * Service API équipes (AppHeldeskApi).
 * Utilise la config locale en fallback si l'API n'expose pas encore les endpoints.
 */

const BASE = "https://localhost:7274/api";

import {
  getMembresPourCategorie as getMembresConfig,
  getEquipePourCategorie,
  MEMBRES_EQUIPES,
} from "../config/equipes";

/**
 * Récupère les membres assignables pour une catégorie de ticket.
 * Appelle GET /api/Membres?categorieId= ou /api/Equipes/{id}/Membres si disponible,
 * sinon utilise la config locale.
 */
export async function getMembresPourCategorie(categorieId) {
  try {
    const res = await fetch(
      `${BASE}/Membres?categorieId=${encodeURIComponent(categorieId)}`
    );
    if (res.ok) {
      const data = await res.json();
      return Array.isArray(data) ? data : data.membres ?? [];
    }
  } catch (_) {
    // API non disponible ou endpoint pas encore implémenté
  }
  return getMembresConfig(categorieId);
}

/**
 * Récupère l'équipe responsable d'une catégorie (pour affichage).
 */
export function getEquipePourCategorieSync(categorieId) {
  return getEquipePourCategorie(categorieId);
}

/**
 * Liste toutes les équipes (pour admin). Optionnel.
 */
export async function getEquipes() {
  try {
    const res = await fetch(`${BASE}/Equipes`);
    if (res.ok) return await res.json();
  } catch (_) {}
  return null;
}
