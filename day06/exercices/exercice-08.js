/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DANS UN TABLEAU D'OBJETS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez un tableau de candidats (chaque objet a nom et score). Écrivez une fonction qui retourne le nom du candidat ayant le meilleur score.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day06/exercices/exercice-08.js
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
function meilleurScore(candidats) {
    let meilleur = candidats[0];
    for ( let i=0; i<candidats.length; i++ ) {
        if (candidats[i].score > meilleur.score) {
            meilleur = candidats[i];
        }
    }
    return meilleur.nom;
}
console.log(meilleurScore(candidats));
