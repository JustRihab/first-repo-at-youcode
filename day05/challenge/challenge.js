/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · CHALLENGE
 * GESTION DE PANIER E-COMMERCE
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous codez la logique du panier d'achat d'une boutique en ligne.
 *
 * Consignes :
 * 1. Vous avez un tableau représentant les ID des articles dans le panier : panier = [101, 105, 101, 102].
 * 2. Créez une fonction ajouterAuPanier(id) qui ajoute l'article au tableau.
 * 3. Créez une fonction retirerDuPanier(id) qui retire Toutes les occurrences de cet ID du panier (ex: retirer 101).
 * 4. (Bonus) Créez une fonction afficherQuantites() qui compte et affiche le panier sous forme : Article 101 : 2 exemplaires, Article 105 : 1 exemplaire...
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day05/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.
// TODO: écris ta solution ici.
let panier = [101, 105, 101, 102];
function ajouterAuPanier(id) {
    panier.push(id);
}
function retirerDuPanier(id) {
    let newPanier = [];
    for ( let i=0; i<panier.length; i++ ) {
        if (panier[i] !== id ) {
            newPanier.push(panier[i]);
        }
    }
    panier = newPanier;
}
function afficherQuantites() {
    let quantite = {};
    for ( let i=0; i<panier.length; i++ ) {
        let article = panier[i];
        let count = 0;
        for ( let j = 0; j < panier.length; j++ ) {
            if (panier[j] === article) {
                count++;
            }
        }
        if (!quantite[article]) {
            quantite[article] = count;
            console.log("Article " + article + " : " + count + " exemplaires.");
        }
    }

}
console.log("Au debut :",panier);
ajouterAuPanier(103);
console.log("Après ajout :", panier);
afficherQuantites();
retirerDuPanier(101);
console.log("Après retrait de 101 :", panier);
afficherQuantites();