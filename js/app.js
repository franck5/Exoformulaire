
$( document ).ready(function() {

		var annuaire = [];	


	$('#button').click(function(){

		var nom = $('#Name').val();
		var prenom = $('#Prenom').val()
		var age = $('#Age').val()
		$('table').append($("<tr><td>"+nom +"</td><td>"+prenom +"</td><td>"+age +
			"</td><td><button id='suprimer'>Suprimer</button></td></tr>"));
		
		var person = {'nom':nom , 'prenom': prenom , 'age' : age};
		annuaire.push(person)
		console.log(annuaire);
	})

		$( "table" ).delegate( '#suprimer', "click", function() {
  		$( this ).parent().parent().remove()
  		})
})