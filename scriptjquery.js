$(function(){

	$('#azul').click(function(){
		$('p').css("color","blue");
		$('p').fadeOut('slow');
		$('p').delay(3000);
		$('p').fadeIn();
	});
		$('#vermelho').click(function(){
		$('p').css("background-color", "red");
		$('#mensagem')
		.text("Cor alterada com sucesso")
		.css({color:'white',border:'1px solid black'})
		.delay(3000)
		.addClass('green');

	$('button').removeClass('red');
	});
});