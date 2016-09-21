
function MostrarError()
{

	/*var funcionAjax=$.ajax({url:"nexoNoExiste.php",type:"post",data:{queHacer:"MostrarTexto"}});
	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto!!!");
	});
	funcionAjax.fail(function(retorno){
			$("#principal").html("error :(");
		$("#informe").html(retorno.responseText);		
	});
	funcionAjax.always(function(retorno){
		//alert("siempre "+retorno.statusText);
	});*/
	$.ajax({url:"nexoNoExiste.php"}).then(function(DatosCorrectos){
		alert("primero");
	},function(error){
		console.info("objeto respuesta",error);
		alert("segundo"+error); //la primer funcion es el exito la segunda el error
		$("#informe").html(error.responseText);
	}); //a la url es donde va a dirigir los datos que envias por json
}
function MostrarSinParametros()
{

	$.ajax({url:"nexoTexto.php"})
	.then(function ok(respuesta){
		//alert(respuesta);
		$("#Principal").html(respuesta);

	},function mal(error){
		alert(error);

	}); //estructura de funcion ajax


	/*var funcionAjax=$.ajax({url:"nexoTexto.php"});

	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto!!!");
	});
	funcionAjax.fail(function(retorno){
		$("#principal").html(":(");
		$("#informe").html(retorno.responseText);	
	});
	funcionAjax.always(function(retorno){
		//alert("siempre "+retorno.statusText);

	});*/
}

function Mostrar(queMostrar)
{

	//$.ajax().then(); FUNCION GENERICA DE AJAX
	//$.ajax().then(function(exito){},function(error){});
	$.ajax({url:"nexo.php",type:"post",data:{queHacer:queMostrar}})
	.then(function(exito){
		$("#principal").html(exito);
	},function(error){

	});
		//alert(queMostrar);
	/*var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{queHacer:queMostrar}
	});
	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto!!!");	
	});
	funcionAjax.fail(function(retorno){
		$("#principal").html(":(");
		$("#informe").html(retorno.responseText);	
	});
	funcionAjax.always(function(retorno){
		//alert("siempre "+retorno.statusText);

	});*/
}

function MostarLogin()
{
		//alert(queMostrar);
	var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{queHacer:"MostarLogin"}
	});
	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto Form login!!!");	
	});
	funcionAjax.fail(function(retorno){
		$("#botonesABM").html(":(");
		$("#informe").html(retorno.responseText);	
	});
	funcionAjax.always(function(retorno){
		//alert("siempre "+retorno.statusText);

	});
}