/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 19 · NIVEAU 3 : DÉFI (AVANCÉS)
 * RECHERCHE BINAIRE (CONCEPT DE BASE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Contrairement à la recherche linéaire (parcourir tout le tableau un par un), la recherche binaire cherche un élément dans un tableau TRIÉ en coupant l'espace de recherche en deux à chaque fois. Essayez de comprendre et d'implémenter ce concept pour trouver l'index de 45 dans [10, 20, 30, 40, 45, 50, 60].
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-19
 * ▶️ Commande : node day05/exercices/exercice-19.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
let arr = [10, 20, 30, 40, 45, 50, 60];
let target = 45;
let trouve = -1;
for ( let debut=0, fin=arr.length - 1 ; debut<=fin; ) {
    let milieu = Math.floor((debut+fin)/2);
    if (arr[milieu] === target) {
        trouve = milieu;
        break;
    }
    else if (arr[milieu] < target) {
        debut = milieu + 1;
    }
    else {
        fin = milieu - 1;
    }
}
console.log(trouve);