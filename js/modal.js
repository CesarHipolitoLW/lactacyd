
jQuery('document').ready(function(){

})


jQuery('.modal-trigger').click(function(){
	
	modal=jQuery(this).attr('href');
	
	jQuery('#modal-fondo').show();
	jQuery(modal).show();
	return false;

});


jQuery('.modal-close').click(function(){
	
	
	jQuery('#modal-fondo').hide();
	jQuery('.modal-contenedor').hide();
	return false;

})

jQuery('.modal-acepto').click(function(){
	
	
	jQuery('#modal-fondo').hide();
	jQuery('.modal-contenedor').hide();
	/* Aqui alguna accion adicional al aceptar  */


	return false;

})