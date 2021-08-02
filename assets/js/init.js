$(document).ready(function () {

	$(".dropdown-button").dropdown();

	const flashData =  $(".flash-data").data('flashdata');

	const typeData = $(".flash-data").data('type');



	if ( flashData ) {

		

		Swal.fire({
			template: '#my-template',

			title: 'Berhasil!',

			text: 'Data '+typeData+' berhasil '+flashData,

			icon: 'success'

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



	setInterval(function() {

    	$('#jam').load('http://localhost/rajawali_umrah/assets/jam.php?');

    	$('#date').load('http://localhost/rajawali_umrah/assets/date.php?');

    	$('#hello').load('http://localhost/rajawali_umrah/assets/good.php?');

	}, 1000);



	

	$(".notif").click(function() {

		Materialize.toast('Foto Berhasil Dihapus', 5000);

	});

	$(".preloader").fadeOut();
});