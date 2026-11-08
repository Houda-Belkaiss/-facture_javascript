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
    
    lignes.forEach((element)=>{
       updateItemTotal(element)});
       updateInvoiceTotal();
       invoiceTable.addEventListener('input', (event) =>{

        if (event.target.matches('.quantity') || event.target.matches('.unitPrice') ) {
          let row = event.target.closest('tr');
          
            updateItemTotal(row);
            updateInvoiceTotal();

        } 
       
        
     })
   
  
  
  
    




    /**
     * Fonction pour mettre à jour le total d'un article (ligne du tableau)
     * TODO:
     * - Récupérer les inputs .quantity et .unitPrice à l'intérieur de `row`
     * - Convertir leurs valeurs en nombres (parseFloat / Number)
     * - Calculer le total (quantité * prix)
     * - Mettre à jour la cellule .itemTotal avec un format à deux décimales
     * - Retourner le total calculé afin de pouvoir le réutiliser
     * 
     * */

 
    function updateItemTotal(row) {

      let inputQuantity = row.querySelector('.quantity');
      let inputUnitPrice = row.querySelector('.unitPrice');

      let quantity = Number(inputQuantity.value);
     // console.log(quantity);
      let unitPrice =  Number(inputUnitPrice.value);
     // console.log(unitPrice);

      let total = quantity * unitPrice;

     // console.log(total.toFixed(2));

      const totalItem = row.querySelector('.itemTotal');
      totalItem.textContent = total.toFixed(2);
      
      total = Number(total.toFixed(2))

      return total;
       
    }


/*
     * Fonction pour mettre à jour le total global de la facture
     * TODO:
     * - Parcourir toutes les lignes du corps du tableau
     * - Utiliser updateItemTotal(updateItemTotal) pour récupérer chaque total (ou lire la cellule .itemTotal)
     * - Additionner tous les totaux de lignes
     * - Mettre à jour le texte de `invoiceTotal` avec la somme formatée en deux décimales
     */
    function updateInvoiceTotal() {
        let somme = 0;
        const lignes = invoiceTable.querySelectorAll('tr');
      
        lignes.forEach(function (element) {
         //   console.log(element);
    
           let totalInput = updateItemTotal(element);
         somme = somme + totalInput;
         
          })
           const invoiceTotal = document.getElementById('invoiceTotal');
          invoiceTotal.textContent = somme.toFixed(2);
          console.log(somme);
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

    // <tr>
            //     <td>Article 1</td>
            //     <td><input type="number" value="1" class="quantity" min="0"></td>
            //     <td><input type="number" value="10" class="unitPrice" min="0" step="0.01"></td>
            //     <td class="itemTotal">10.00</td>
            // </tr>
    function addNewItem() {
       
       let tr = document.createElement('tr');
      invoiceTable.appendChild(tr);
      let td = document.createElement('td');
      tr.appendChild(td);
     td.innerHTML = "Article 4";

      let td2 = document.createElement('td');
      tr.appendChild(td2);
      let inputquantity = document.createElement('input');
      inputquantity.className ='quantity';
       inputquantity.type = "number";
      inputquantity.value = 1;
      inputquantity.min = 0;
      inputquantity.step = "0.01";
      td2.appendChild(inputquantity);
      
      let td3 = document.createElement('td');
      tr.appendChild(td3);
      let inputprice = document.createElement('input');
      inputprice.className ='unitPrice';
      inputprice.type = "number";
      inputprice.value = 10;
      inputprice.min = 0;
      inputprice.step = "0.01";
      td3.appendChild(inputprice);


    let td4 = document.createElement('td');
      td4.className ='itemTotal';
      tr.appendChild(td4);
    
        
        updateInvoiceTotal()

    }
addNewItem();

    /**
     * Bonus facultatif si les TODO précédents sont terminés:
     * - Ajouter un bouton "Supprimer" sur chaque ligne
     * - Lorsque l'utilisateur clique dessus, retirer la ligne et recalculer le total via updateInvoiceTotal
     */
 
});
