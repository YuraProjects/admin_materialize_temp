$(document).ready(function () {
	// $(".button-collapse").sideNav();
	// $(".slider").slider({

	// 	indicators: false,

	// 	height: 500,

	// 	transition: 600,

	// 	interval: 6500

	// });
	// $('.parallax').parallax();
	// $('.materialboxed').materialbox();

	// yang lama
	// Subaru Punya

	$(".dropdown-button").dropdown();

	const flashData =  $(".flash-data").data('flashdata');

	const typeData = $(".flash-data").data('type');



	if ( flashData ) {

		

		Swal.fire({

			title: 'Berhasil!',

			text: 'Data '+typeData+' berhasil '+flashData,

			type: 'success'

		});



		Materialize.toast('Data '+typeData+' berhasil '+flashData+'!', 4000);

	}



	$(".delete-btn").click(function(e){

		

		e.preventDefault();

		const href = $(this).attr('href');



		Swal.fire({

			title: 'Anda yakin menghapus?',

			text: 'Data tidak dapat dipulihkan setelah dihapus',

			type: 'warning',

			showCancelButton: true,

			confirmButtonText: 'Ya, Hapus!',

			cancelButtonText: 'Batal',

			cancelButtonColor: '#d33'

		}).then((result)=> {

			if (result.value) {

				document.location.href = href;

			}

		})

	});



	$(".logout-btn").click(function(e){

		

		e.preventDefault();

		const href = $(this).attr('href');



		Swal.fire({

			title: 'Anda yakin ingin keluar?',

			type: 'warning',

			showCancelButton: true,

			confirmButtonText: 'Ya, keluar!',

			cancelButtonText: 'Batal',

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

	$(".daftar-menu").hover(function() {

		$(this).addClass('active-list');

	}, function() {

		$(this).removeClass('active-list');

	});



	setInterval(function() {

    	// $('#jam').load('http://subaruprojects.epizy.com/assets/jam.php?');

    	// $('#date').load('http://subaruprojects.epizy.com/assets/date.php?');

    	// $('#hello').load('http://subaruprojects.epizy.com/assets/good.php?');

	}, 1000);



	

	$(".notif").click(function() {

		Materialize.toast('Foto Berhasil Dihapus', 5000);

	});



	$(".preloader").fadeOut();
});