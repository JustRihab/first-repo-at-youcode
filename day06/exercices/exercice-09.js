/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FILTRAGE DE DONNÉES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Dans le même tableau de candidats, écrivez une fonction qui retourne un nouveau tableau contenant uniquement les candidats ayant un score >= 10.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day06/exercices/exercice-09.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
let candidats = [ 
    { 
    nom : "Anne",
    score : 6,
    },
    { 
    nom : "Harry",
    score : 500,
    },
    { 
    nom : "Leona",
    score : 650,
    },
    { 
    nom : "Leouis",
    score : 10,
    },
    { 
    nom : "Larina",
    score : 475,
    }
];
function newCandidats(candidats) {
    let meilleurScore = [];
    for ( let i=0; i<candidats.length; i++ ) {
        if (candidats[i].score >= 10) {
            meilleurScore.push(candidats[i]);
        }
    }
    return meilleurScore;
}
console.log(newCandidats(candidats));