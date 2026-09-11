/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DU MAXIMUM ET MINIMUM
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui parcourt un tableau de nombres aléatoires et retourne le plus grand et le plus petit nombre, SANS utiliser Math.max ni Math.min.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day05/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
function maXmin(tab) {
    let min = tab[0];
    let max = tab[0];
    for (let i=1; i<tab.length; i++) {
        if (tab[i] < min) {
            min = tab[i]; 
        }
        else if (tab[i] > max) {
            max = tab[i]; 
        }
    }
    return {min, max};
}
let numbers = [6, 10, 21, 8, 5, 12];
let result = maXmin(numbers);
console.log(result);


