/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Header Search
4. Init Menu


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var menu = $('.menu');
	var menuActive = false;
	var header = $('.header');
	var burger = $('.hamburger');

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	initHeaderSearch();
	initMenu();

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		if($(window).scrollTop() > 100)
		{
			header.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
		}
	}

	/* 

	3. Init Header Search

	*/

	function initHeaderSearch()
	{
		if($('.search_button').length)
		{
			$('.search_button').on('click', function()
			{
				if($('.header_search_container').length)
				{
					$('.header_search_container').toggleClass('active');
				}
			});
		}
	}

	/* 

	4. Init Menu

	*/

	function initMenu()
	{
		if($('.menu').length)
		{
			var menu = $('.menu');
			if($('.hamburger').length)
			{
				burger.on('click', function()
				{
					if(menuActive)
					{
						closeMenu();
					}
					else
					{
						openMenu();

						$(document).one('click', function cls(e)
						{
							if($(e.target).hasClass('menu_mm'))
							{
								$(document).one('click', cls);
							}
							else
							{
								closeMenu();
							}
						});
					}
				});
			}
		}
	}

	function openMenu()
	{
		menu.addClass('active');
		menuActive = true;
	}

	function closeMenu()
	{
		menu.removeClass('active');
		menuActive = false;
	}

	const btnInscribrime = document.getElementById('btnInscribirme');
	btnInscribrime.addEventListener('click', function(event) {
		event.preventDefault();
		if(validateForm()){
			showSuccess('Se ha enviado la inscripción con éxito, pronto recibirá un email de confirmación.');
		}
	});

	function validateForm()
	{
		const nombre = document.getElementById('txtNombre').value.trim();
		const apellido = document.getElementById('txtApellido').value.trim();
		const telefono = document.getElementById('txtTelefono').value.trim();
		const email = document.getElementById('txtEmail').value.trim();
		let mensaje = '';
		let isValid = true;
		
		hideAlerts();

		if(!validateIsEmptyAndLength(nombre,3,150)){
			mensaje += 'El NOMBRE es obligatorio y debe contener al menos 3 caracteres y no superar los 150. ';
			isValid=false;
		}


		if(!validateIsEmptyAndLength(apellido,3,150)){
			mensaje += 'El APELLIDO es obligatorio y debe contener al menos 3 caracteres y no superar los 150. ';
			isValid=false;
		}

		if(!validatePhoneNumber(telefono)){
			mensaje += 'El TELEFONO es obligatorio y debe tener un valor correcto (sin puntos, ni guiones, ni espacios). ';
			isValid=false;
		}

		if(!validateEmail(email, 150)){
			mensaje += 'El EMAIL es obligatorio, debe tener un valor con el formato correcto y no superar los 150 caracteres. ';
			isValid=false;
		}

		if(!isValid){
			showError(mensaje);
		}

		return isValid;
	}
});