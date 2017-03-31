
$( document ).ready(function() {

		var annuaire = [];	


	$('#button').click(function(){

		var nom = $('#Name').val();
		var prenom = $('#Prenom').val();
		var age = $('#Age').val();
		var buttonDel = "<button id='suprimer'>suprimer</button>";

			$("#tab").DataTable().row.add([
			nom,
			prenom,
			age,
			buttonDel
			]).draw(false);
		
		var person = {'nom':nom , 'prenom': prenom , 'age' : age};
		annuaire.push(person)
		$('input').val("");
		console.log(annuaire);
		
	})

		$( "tbody" ).delegate( '#suprimer', "click", function() {
  		$( this ).parent().parent().remove()

  		})
 		
 		$(document).ready(function () {
    		$('#tab').DataTable();
});
 		
})