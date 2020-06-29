function validarExt()
	{
		var archivoInput = document.getElementById('archivoInput');
		var archivoRuta = archivoInput.value;
		var extPermitidas = /(.CSV)$/i;
		if(!extPermitidas.exec(archivoRuta)){
			alert('Asegurese de haber seleccionado un CSV');
			archivoInput.value = '';
			return false;
		}
	
		else
		{
			if (archivoInput.files && archivoInput.files[0]) 
			{
				var visor = new FileReader();
				visor.onload = function(e) 
				{
					document.getElementById('visorArchivo').innerHTML = 
					'<embed src="'+e.target.result+'" width="500" height="375" />';
				};
				visor.readAsDataURL(archivoInput.files[0]);
			}
		}
	}
