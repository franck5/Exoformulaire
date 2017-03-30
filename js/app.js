
$( document ).ready(function() {

		var annuaire = [];	


	$('#button').click(function(){

		var nom = $('#Name').val();
		$('#text').text(nom);
		var prenom = $('#Prenom').val()
		$('#textprenom').text(prenom);
		var age = $('#Age').val()
		$('#textage').text(age);

		
		var person = {'nom':nom , 'prenom': prenom , 'age' : age};
		annuaire.push(person)
		console.log(annuaire);
	})

})