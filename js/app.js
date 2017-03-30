
$( document ).ready(function() {

		var annuaire = [];	


	$('#button').click(function(){

		var nom = $('#Name').val();
		var prenom = $('#Prenom').val()
		var age = $('#Age').val()
		$('table').append($("<tr><td>"+nom +"</td><td>"+prenom +"</td><td>"+age +"</td></tr>"));
		
		var person = {'nom':nom , 'prenom': prenom , 'age' : age};
		annuaire.push(person)
		console.log(annuaire);
	})

	$('#Suprimer').click(function(){
		$('tr').remove()

	})
})