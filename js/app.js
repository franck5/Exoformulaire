
$( document ).ready(function() {

		var annuaire = [];	


	$('#button').click(function(){

		var nom = $('#Name').val();
		var prenom = $('#Prenom').val();
		var age = $('#Age').val();
		var buttonDel = "<button id='suprimer'>suprimer</button>";

			$("#tab").DataTable().row.add([nom,prenom,age,buttonDel]).draw(false);
		
		var person = {'nom':nom , 'prenom': prenom , 'age' : age};
		annuaire.push(person)
		$('input').val("");
		console.log(annuaire);
		
	})

		$( "#tab" ).on("click", '#suprimer', function() {
			$("#tab").DataTable().row($(this).parent().parent("tr")).remove().draw();
  		$( this ).parent().parent().remove()
  		var Delentre = $(this).parent().parent().data();
		annuaire.splice(Delentre, 1);
		console.log(annuaire);
	
  		})
 		
 		$(document).ready(function () {
    		$('#tab').DataTable();
});
 		
})