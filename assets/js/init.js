$(document).ready(function () {

	// for dropdown menu
	$(".dropdown-button").dropdown();

	// the flash data for notificaton success 
	const flashData =  $(".flash-data").data('flashdata');
	// the type is the action name like Deleted, Updated or Created for flash data info
	const typeData = $(".flash-data").data('type');



	if ( flashData ) {

		

		Swal.fire({
			template: '#my-template',

			title: 'Berhasil!',

			text: 'Data '+typeData+' berhasil '+flashData,

			icon: 'success',

			confirmButtonText: '<i class="bi bi-check left alert-icon"></i>',

		});



		Materialize.toast('Data '+typeData+' berhasil '+flashData+'!', 4000);

	}



	$(".delete-btn").click(function(e){

		

		e.preventDefault();

		const href = $(this).attr('href');



		Swal.fire({

			// template: '#my-template',

			title: 'Anda yakin menghapus?',

			text: 'Data tidak dapat dipulihkan setelah dihapus',

			icon: 'warning',

			showCancelButton: true,

			confirmButtonText: '<i class="bi bi-check left alert-icon"></i>Ya, Hapus!',

			cancelButtonText: '<i class="bi bi-x left alert-icon"></i>Batal',

			cancelButtonColor: '#d33'

		}).then((result)=> {

			if (result.value) {

				// document.location.href = href;
				// if ( flashData ) {

		

					Swal.fire({

						title: 'Berhasil!',
			
						text: 'Data '+typeData+' berhasil '+flashData,
			
						icon: 'success',
			
					});
			
			
			
					Materialize.toast('Data '+typeData+' berhasil '+flashData+'!', 4000);
			
				// }

			}

		})

	});



	$(".logout-btn").click(function(e){

		

		e.preventDefault();

		const href = $(this).attr('href');



		Swal.fire({
			template: '#my-template',
			title: 'Anda yakin ingin keluar?',

			icon: 'warning',

			showCancelButton: true,

			confirmButtonText: '<i class="bi bi-check left alert-icon"></i>Ya, keluar!',

			cancelButtonText: '<i class="bi bi-x left alert-icon"></i> Batal',

			cancelButtonColor: '#d33'

		}).then((result)=> {

			if (result.value) {

				document.location.href = href;

			}

		})

	});



	$(".modal").modal();

	$(".button-collapse").sideNav();

	$(".mobile").click(function(event) {

		$(".button-collapse").sideNav('hide');

	});

	$(".slider").slider({

		indicators:false,

		height:435,

		transition: 600,

		interval:6000	

	});

	$(".slider img").css('filter', 'brightness(55%)');

	

	$('.slider.slider-promo').slider({

		indicators:true,

		height:100,

		transition: 600,

		interval:7000

	});

	

	$('.parallax').parallax();

	$('.scrollspy').scrollSpy({

		scrollOffset:55

	});

	$(".menu-item").hover(function() {

		$(this).addClass('active-list');

	}, function() {

		$(this).removeClass('active-list');

	});


	function formatAMPM(date) {
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var ampm = hours >= 12 ? 'PM' : 'AM';
		hours = hours % 12;
		hours = hours ? hours : 12; // the hour '0' should be '12'
		minutes = minutes < 10 ? '0'+minutes : minutes;
		var strTime = hours + '.' + minutes + ' ' + ampm;
		return strTime;
	}

	function hello(hours){

		if ((hours>=6) && (hours<=11)) {

			return "Good Morning!";
		  
		  }else if((hours>=11) && (hours<=15)){
		  
			return "Good Afternoon!";
		  
		  }else if((hours>15) && (hours<=18)){
		  
			return "Good Afternoon!";
		  
		  }else{
		  
			return "Good Evening!";
		  
		  }
	}


	setInterval(function() {


		let today = new Date();

		let mm = String(today.toDateString()).padStart(2, '0'); //January is 0!
		let time = formatAMPM(today);

		let hours = today.getHours();
		
    	$('#date').text(mm);
    	$('#jam').text(time);
    	$('#hello').text(hello(hours));

	}, 1000);



	

	$(".notif").click(function() {

		Materialize.toast('Foto Berhasil Dihapus', 5000);

	});

	$(".preloader").fadeOut();

	// Switch of Dark Mode or not
	
	$("#switch-mode").change(function() {
		$('.css-href').attr('href', function(index, attr){
			return attr == 'assets/css/style-dark-mode.css' ? 'assets/css/style.css' : 'assets/css/style-dark-mode.css';

		});
		$(".switch i").attr('class', function(index, attr){
			return attr == 'bi bi-moon-fill' ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
		});
	});
});