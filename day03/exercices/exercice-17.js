/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 17 · NIVEAU 3 : DÉFI (AVANCÉS)
 * LE NETTOYEUR DE DONNÉES SCRAPPÉES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction extrairePrixEtConvertir(chaineBrute) qui reçoit, par exemple, "   Prix: 15.99 $  ". La fonction doit nettoyer la chaîne, isoler le chiffre, et retourner le type Number. Elle doit gérer les erreurs (retourner null si la chaîne ne contient pas de prix exploitable).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-17
 * ▶️ Commande : node day03/exercices/exercice-17.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
function extrairePrixEtConvertir(chaineBrute) {
    if (typeof chaineBrute !== "string"){
        return null;
    }
    let chaine = chaineBrute.trim();
    let chaineNbr = "";
    for ( let i=0; i<chaine.length; i++ ) {
        let a = chaine[i];
        if (a>="0" && a<="9" || a===".") {
            chaineNbr += a;
        }
    }
    let value = Number(chaineNbr);
    if (!isNaN(value)) {
        return value;
    }
    return null;
}
console.log(extrairePrixEtConvertir("   Prix: 15.99 $  "));
console.log(extrairePrixEtConvertir("225$"));
console.log(extrairePrixEtConvertir("hello!"));