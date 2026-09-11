/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 15 · NIVEAU 3 : DÉFI (AVANCÉS)
 * FUSION TRIÉE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez deux tableaux DÉJÀ triés : [1, 3, 5] et [2, 4, 6]. Écrivez un algorithme pour les fusionner en un seul tableau trié [1, 2, 3, 4, 5, 6] (sans utiliser .sort()).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-15
 * ▶️ Commande : node day05/exercices/exercice-15.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
function mergeSortedArrays(tab1,tab2) {
    let result = [];
    let i = 0;
    let j = 0;
    for ( ; i<tab1.length && j<tab2.length; ) {
        if (tab1[i]<=tab2[j]) {
            result.push(tab1[i]);
            i++;
        }
        else {
            result.push(tab2[j]);
            j++;
        }
    }
    for ( ; i<tab1.length; i++) {
        result.push(tab1[i]);
    }
    for ( ; j<tab2.length; j++) {
        result.push(tab2[j]);
    }
    return result;
}
let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];
console.log(mergeSortedArrays(arr1, arr2));  