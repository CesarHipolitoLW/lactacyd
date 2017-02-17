

jQuery('#menu-movil-trigger').click(function(){
	if(jQuery('#header-menu-movil').hasClass('active')){
		jQuery('#header-menu-movil').removeClass('active')
		jQuery('#header-menu-movil').slideUp();
	}
	else{
		jQuery('#header-menu-movil').addClass('active')
		jQuery('#header-menu-movil').slideDown();
	}
return false;
	
})