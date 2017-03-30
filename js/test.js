$( document ).ready(function() {

	$('#Name').keyup(function(){
		var name = $(this).val()
		$('#button').click(function(){
			$('#text').text(name); 
			console.log(name);
		})

			
	})

	$('#Prenom').keyup(function(){
		var prenom = $(this).val()
		$('#button').click(function(){
			$('#textprenom').text(prenom); 
		})
	})

	$('#Age').keyup(function(){
		var age = $(this).val()
		$('#button').click(function(){
			$('#textage').text(age); 
		})
	})

});