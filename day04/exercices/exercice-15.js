/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 15 · NIVEAU 3 : DÉFI (AVANCÉS)
 * VÉRIFICATEUR D'ANAGRAMME
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vérifiez si "chien" et "niche" sont des anagrammes (elles contiennent exactement les mêmes lettres, même quantité).
 * Indice : vous pouvez les transformer en tableau, les trier, et les rejoindre.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-15
 * ▶️ Commande : node day04/exercices/exercice-15.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
let tab1 = "chien";
let tab2 = "niche";
let mot1 = tab1.split("");
let mot2 = tab2.split("");
mot1.sort();
mot2.sort();
if (mot1.join("") === mot2.join("")){
    console.log(tab1 + " et " + tab2 + " sont des anagrammes" );
}
else {
    console.log(tab1 + " et " + tab2 + " ne sont pas  des anagrammes" );
}
