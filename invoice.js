document.addEventListener('DOMContentLoaded', function() {

    /**
     * TODO: Initialiser l'état de la facture dès que la page est chargée
     * - Sélectionner toutes les lignes du tableau
     * - Appeler updateItemTotal sur chaque ligne pour recalculer les totaux existants
     * - Appeler updateInvoiceTotal pour afficher le total global correct
     */

    // Ces références seront réutilisées dans plusieurs fonctions
    const invoiceTable = document.getElementById('invoiceTable').getElementsByTagName('tbody')[0];
    //console.log(invoiceTable);
    const lignes = invoiceTable.querySelectorAll('tr');
    //console.log(lignes);
     lignes.forEach((ligne)=> {
        //console.log(ligne);
        
        updateItemTotal(ligne);
        

     
     })

   updateInvoiceTotal();
  
    
    const invoiceTotal = document.getElementById('invoiceTotal');
   // console.log(invoiceTotal);
    




    /**
     * Fonction pour mettre à jour le total d'un article (ligne du tableau)
     * TODO:
     * - Récupérer les inputs .quantity et .unitPrice à l'intérieur de `row`
     * - Convertir leurs valeurs en nombres (parseFloat / Number)
     * - Calculer le total (quantité * prix)
     * - Mettre à jour la cellule .itemTotal avec un format à deux décimales
     * - Retourner le total calculé afin de pouvoir le réutiliser
     */
    function updateItemTotal(row) {
  
        
           const inputQuantity = row.querySelector('.quantity');
           //  console.log(imputQuantity);
             const inputunitPrice = row.querySelector('.unitPrice');
              // console.log(inputunitPrice);

              let totalinput = row.querySelector('.itemTotal');
              console.log(totalinput);
              

           row.addEventListener('change', function (element) {
                let quantityValue = inputQuantity.value;
                // console.log(quantityValue);
                //  console.log(typeof(quantityValue));
                    let quantity = Number(quantityValue);
                    console.log(quantity);

             let unitpriceValue = inputunitPrice.value;
             // console.log(unitpriceValue);
            // console.log(typeof(unitpriceValue));
             let unitPrice = Number(unitpriceValue);
             console.log(unitPrice);

          let total = quantity * unitPrice ;
            console.log(total)
             totalinput = total.toFixed(2);
            console.log(totalinput);
            return totalinput;
           })

    }


    /**
     * Fonction pour mettre à jour le total global de la facture
     * TODO:
     * - Parcourir toutes les lignes du corps du tableau
     * - Utiliser updateItemTotal(row) pour récupérer chaque total (ou lire la cellule .itemTotal)
     * - Additionner tous les totaux de lignes
     * - Mettre à jour le texte de `invoiceTotal` avec la somme formatée en deux décimales
     */
    function updateInvoiceTotal() {
       
    }


    /**
     * Fonction pour ajouter une nouvelle ligne d'article dans la facture
     * TODO:
     * - Créer un nouvel élément <tr>
     * - Ajouter les cellules nécessaires (nom, inputs quantité/prix, total)
     * - Veiller à ce que les inputs aient les mêmes classes que les autres lignes
     * - Ajouter des écouteurs d'événement sur les inputs pour recalculer les totaux en direct
     * - Insérer la nouvelle ligne dans `invoiceTable`
     * - Appeler updateInvoiceTotal pour recalculer le total global après l'ajout
     */
    function addNewItem() {
        

    }


    /**
     * Bonus facultatif si les TODO précédents sont terminés:
     * - Ajouter un bouton "Supprimer" sur chaque ligne
     * - Lorsque l'utilisateur clique dessus, retirer la ligne et recalculer le total via updateInvoiceTotal
     */
 
});