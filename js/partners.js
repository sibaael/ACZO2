/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Header Search
4. Init Menu
5. Init Accordions
6. Init Tabs
7. Init Milestones
8. Init Loaders


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
	var ctrl = new ScrollMagic.Controller();

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
	initAccordions();
	initTabs();
	initMilestones();
	initLoaders();

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

	/* 

	5. Init Accordions

	*/

	function initAccordions()
	{
		if($('.accordion').length)
		{
			var accs = $('.accordion');

			accs.each(function()
			{
				var acc = $(this);

				if(acc.hasClass('active'))
				{
					var panel = $(acc.next());
					var panelH = panel.prop('scrollHeight') + "px";
					
					if(panel.css('max-height') == "0px")
					{
						panel.css('max-height', panel.prop('scrollHeight') + "px");
					}
					else
					{
						panel.css('max-height', "0px");
					} 
				}

				acc.on('click', function()
				{
					if(acc.hasClass('active'))
					{
						acc.removeClass('active');
						var panel = $(acc.next());
						var panelH = panel.prop('scrollHeight') + "px";
						
						if(panel.css('max-height') == "0px")
						{
							panel.css('max-height', panel.prop('scrollHeight') + "px");
						}
						else
						{
							panel.css('max-height', "0px");
						} 
					}
					else
					{
						acc.addClass('active');
						var panel = $(acc.next());
						var panelH = panel.prop('scrollHeight') + "px";
						
						if(panel.css('max-height') == "0px")
						{
							panel.css('max-height', panel.prop('scrollHeight') + "px");
						}
						else
						{
							panel.css('max-height', "0px");
						} 
					}
				});
			});
		}
	}

	/* 

	6. Init Tabs

	*/

	function initTabs()
	{
		if($('.tab').length)
		{
			$('.tab').on('click', function()
			{
				$('.tab').removeClass('active');
				$(this).addClass('active');
				var clickedIndex = $('.tab').index(this);

				var panels = $('.tab_panel');
				panels.removeClass('active');
				$(panels[clickedIndex]).addClass('active');
			});
		}
	}

	/* 

	7. Initialize Milestones

	*/

	function initMilestones()
	{
		if($('.milestone_counter').length)
		{
			var milestoneItems = $('.milestone_counter');

	    	milestoneItems.each(function(i)
	    	{
	    		var ele = $(this);
	    		var endValue = ele.data('end-value');
	    		var eleValue = ele.text();

	    		/* Use data-sign-before and data-sign-after to add signs
	    		infront or behind the counter number (+, k, etc) */
	    		var signBefore = "";
	    		var signAfter = "";

	    		if(ele.attr('data-sign-before'))
	    		{
	    			signBefore = ele.attr('data-sign-before');
	    		}

	    		if(ele.attr('data-sign-after'))
	    		{
	    			signAfter = ele.attr('data-sign-after');
	    		}

	    		var milestoneScene = new ScrollMagic.Scene({
		    		triggerElement: this,
		    		triggerHook: 'onEnter',
		    		reverse:false
		    	})
		    	.on('start', function()
		    	{
		    		var counter = {value:eleValue};
		    		var counterTween = TweenMax.to(counter, 4,
		    		{
		    			value: endValue,
		    			roundProps:"value", 
						ease: Circ.easeOut, 
						onUpdate:function()
						{
							document.getElementsByClassName('milestone_counter')[i].innerHTML = signBefore + counter.value + signAfter;
						}
		    		});
		    	})
			    .addTo(ctrl);
	    	});
		}
	}

	/* 

	8. Init Loaders

	*/

	function initLoaders()
	{
		if($('.loader').length)
		{
			var loaders = $('.loader');

			loaders.each(function()
			{
				var loader = this;
				var endValue = $(loader).data('perc');

				var loaderScene = new ScrollMagic.Scene({
		    		triggerElement: this,
		    		triggerHook: 'onEnter',
		    		reverse:false
		    	})
		    	.on('start', function()
		    	{
		    		var bar = new ProgressBar.Circle(loader,
					{
						color: '#ff8a00',
						// This has to be the same size as the maximum width to
						// prevent clipping
						strokeWidth: 2,
						trailWidth: 1,
						trailColor: 'transparent',
						easing: 'easeInOut',
						duration: 1400,
						text:
						{
							autoStyleContainer: false
						},
						from:{ color: '#ff8a00', width: 2 },
						to: { color: '#ff8a00', width: 2 },
						// Set default step function for all animate calls
						step: function(state, circle)
						{
							circle.path.setAttribute('stroke', state.color);
							circle.path.setAttribute('stroke-width', state.width);

							var value = Math.round(circle.value() * 100);
							if (value === 0)
							{
								circle.setText('0%');
							}
							else
							{
								circle.setText(value + "%");
							}
						}
					});
					bar.text.style.fontFamily = '"Montserrat", sans-serif';
					bar.text.style.fontSize = '36px';
					bar.text.style.fontWeight = '600';
					bar.text.style.color = "#44425a";


					bar.animate(endValue);  // Number from 0.0 to 1.0
		    	})
			    .addTo(ctrl);
			});
		}
	}

	const btnAsociarme = document.getElementById('btnAsociarme');
	btnAsociarme.addEventListener('click', function(event) {
		event.preventDefault();
		if(validateForm()){
			showSuccess('Se ha enviado el FORMULARIO con éxito, pronto recibirá un email de confirmación.');
		}
	});

	function validateForm()
	{
		const nombre = document.getElementById('txtNombre').value.trim();
		const email = document.getElementById('txtEmail').value.trim();
		const apellido = document.getElementById('txtApellido').value.trim();
		const calle = document.getElementById('txtCalle').value.trim();
		const localidad = document.getElementById('txtLocalidad').value.trim();
		const codigopostal = document.getElementById('txtCodigoPostal').value.trim();
		const provincia = document.getElementById('txtProvincia').value.trim();
		const telefono = document.getElementById('txtTelefono').value.trim();
		const documento = document.getElementById('txtDocumento').value.trim();
		const profesion = document.getElementById('txtProfesion').value.trim();
		const nacimiento = document.getElementById('txtNacimiento').value.trim();
		const justificacion = document.getElementById('txtJustificacion').value.trim();

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

		if(!validateLength(calle,3,250)){
			mensaje += 'La CALLE debe contener al menos 3 caracteres y no superar los 250. ';
			isValid=false;
		}

		if(!validateIsEmptyAndLength(localidad,3,100)){
			mensaje += 'La LOCALIDAD es obligatorio y debe contener al menos 3 caracteres y no superar los 100. ';
			isValid=false;
		}

		if(!validateLength(codigopostal,4,15)){
			mensaje += 'El CÓDIGO POSTAL debe contener al menos 4 caracteres y no superar los 15. ';
			isValid=false;
		}

		if(!validateIsEmptyAndLength(provincia,3,100)){
			mensaje += 'La PROVINCIA es obligatorio y debe contener al menos 3 caracteres y no superar los 100. ';
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

		if(!validateDocumentNumber(documento)){
			mensaje += 'El DOCUMENTO es obligatorio y debe tener un valor correcto (sin puntos, ni guiones, ni espacios). ';
			isValid=false;
		}
		
		if(!validateLength(profesion,3,100)){
			mensaje += 'La PROFESIÓN debe contener al menos 3 caracteres y no superar los 100. ';
			isValid=false;
		}

		if(!validateAge(nacimiento)){
			mensaje += 'La FECHA DE NACIMIENTO es obligatoria y debe ser mayor de edad. ';
			isValid=false;
		}

		if(!validateLength(justificacion,3,250)){
			mensaje += 'La JUSTIFICACIÓN debe contener al menos 3 caracteres y no superar los 250. ';
			isValid=false;
		}

		if(!isValid){
			showError(mensaje);
		}

		return isValid;
	}
});