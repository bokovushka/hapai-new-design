// карусель рекомендуемое

new Swiper(".partners__swiper", {
	spaceBetween: 8,
	grabCursor: true,
	breakpoints: {
		1440: {
			slidesPerView: 4,
		},
		1280: {
			slidesPerView: 3,
		},
		768: {
			slidesPerView: 2,
		},
		640: {
			slidesPerView: 1.7,
		},
		360: {
			slidesPerView: 1.1,
		}
	},
	navigation: {
		prevEl: "#qa-loop .swiper__buttons .icon-u_arrow-left",
		nextEl: "#qa-loop .swiper__buttons .icon-u_arrow-right"
	},
})

// карусель на карточках товара

function swiperItemGallery() {
	new Swiper('.swiper-item-gallery', {
		direction: 'horizontal',
		nested: true,
		grabCursor: true,
		navigation: {
			nextEl: '.item-gallery-button .btn-item-swiper.icon-right',
			prevEl: '.item-gallery-button .btn-item-swiper.icon-left',
		},
	});
}
swiperItemGallery();

// slider gallery

if (window.innerWidth < 993) {
	var swipercontainer = $('.ic-gallery');
	var swiperwrapper = $('.ic-img-loop');
	var swiperslide = $('.ic-img');
	$('.ic-gallery').addClass('swiper-container');
	$('.ic-img-loop').addClass('swiper-wrapper');
	$('.ic-img').addClass('swiper-slide');
	var mySwiper2 = new Swiper('.ic-gallery', {
		direction: 'horizontal',
		slidesPerView: 1,
		spaceBetween: 20,
		navigation: {
			prevEl: ".ic-gallery .item-gallery-button .btn__swiper-prev",
			nextEl: ".ic-gallery .item-gallery-button .btn__swiper-next"
		},
		breakpoints: {
			640: {
				slidesPerView: 2,
			}
		},
	});
}

// article Swiper slider

var articleSwiper = new Swiper('.article__swiper', {
	direction: 'horizontal',
	grabCursor: true,
	spaceBetween: 20,
	freeMode: true,
	breakpoints: {
		1280: {
			slidesPerView: 4,
		},
		992: {
			slidesPerView: 3.2,
		},
		768: {
			slidesPerView: 2.4,
		},
		640: {
			slidesPerView: 2.1,
			spaceBetween: 8,
		},
		480: {
			slidesPerView: 1.6,
			spaceBetween: 8,
		},
		360: {
			slidesPerView: 1.1,
			spaceBetween: 8,
		}
	},
	navigation: {
		prevEl: ".other-article .swiper__buttons .icon-u_arrow-left",
		nextEl: ".other-article .swiper__buttons .icon-u_arrow-right"
	},
});

// team Swiper slider

var teamSwiper = new Swiper('.team__swiper', {
	direction: 'horizontal',
	grabCursor: true,
	spaceBetween: 20,
	freeMode: true,
	breakpoints: {
		1280: {
			slidesPerView: 4,
		},
		992: {
			slidesPerView: 3.2,
		},
		768: {
			slidesPerView: 2.4,
		},
		640: {
			slidesPerView: 2.1,
		},
		480: {
			slidesPerView: 1.6,
		},
		360: {
			slidesPerView: 1.2,
		}
	},
});

//car-style

var articleSwiper = new Swiper('.car-style__swiper', {
	direction: 'horizontal',
	grabCursor: true,
	spaceBetween: 12,
	freeMode: true,
	breakpoints: {
		1280: {
			slidesPerView: 5,
		},
		1024: {
			slidesPerView: 4.1,
		},
		992: {
			slidesPerView: 3.9,
		},
		768: {
			slidesPerView: 2.9,
		},
		640: {
			slidesPerView: 2.2,
		},
		480: {
			slidesPerView: 1.8,
		},
		360: {
			slidesPerView: 1.3,
		}
	},
});

//company-partners
new Swiper(".company-partners__swiper", {
	spaceBetween: 20,
	grabCursor: true,
	autoHeight: false,
	loop: true,
	breakpoints: {
		1440: {
			slidesPerView: 5,
		},
		1280: {
			slidesPerView: 4,
		},
		768: {
			slidesPerView: 3,
		},
		480: {
			slidesPerView: 2,
		},
		360: {
			slidesPerView: 1,
			grid: {
				rows: 2,
			},
			loop: false,
		}
	},
	navigation: {
		prevEl: ".company-partners .swiper__buttons .icon-u_arrow-left",
		nextEl: ".company-partners .swiper__buttons .icon-u_arrow-right"
	},
})


//loan-leasing
var SwiperWallpaperCollectionThumbs = new Swiper(".loan-leasing .leasing__swiper", {
	spaceBetween: 20,
	grabCursor: true,
	loop: true,
	watchSlidesProgress: true,
	breakpoints: {
		992: {
			slidesPerView: 3,
		},
		640: {
			slidesPerView: 2,
		},
		360: {
			slidesPerView: 1.15,
		}
	},
})

var SwiperWallpaperCollection = new Swiper(".loan-leasing .loan__swiper", {
	spaceBetween: 20,
	grabCursor: true,
	loop: true,
	breakpoints: {
		992: {
			slidesPerView: 3,
		},
		640: {
			slidesPerView: 2,
		},
		360: {
			slidesPerView: 1.15,
		}
	},
	thumbs: {
		swiper: SwiperWallpaperCollectionThumbs,
	},
	navigation: {
		prevEl: ".loan-leasing .leasing-swiper__buttons .icon-u_arrow-left",
		nextEl: ".loan-leasing .leasing-swiper__buttons .icon-u_arrow-right"
	},
})

//feedback swiper
new Swiper(".feedback__swiper", {
	grabCursor: true,
	navigation: {
		prevEl: ".feedback-button .icon-left",
		nextEl: ".feedback-button .icon-right"
	},
})

//feedback swiper
new Swiper(".why-sell-car__swiper", {
	direction: 'horizontal',
	grabCursor: true,
	spaceBetween: 20,
	freeMode: true,
	breakpoints: {
		1440: {
			slidesPerView: 3.55,
		},
		1280: {
			slidesPerView: 3.15,
		},
		992: {
			slidesPerView: 2.45,
		},
		768: {
			slidesPerView: 1.9,
		},
		640: {
			slidesPerView: 1.6,
			spaceBetween: 8,
		},
		480: {
			slidesPerView: 1.2,
			spaceBetween: 8,
		},
		360: {
			slidesPerView: 1.1,
			spaceBetween: 8,
		}
	},
})

//about__swiper
new Swiper(".about__swiper", {
	direction: 'horizontal',
	grabCursor: true,
	navigation: {
		prevEl: ".about__swiper .swiper__buttons .btn__swiper-prev",
		nextEl: ".about__swiper .swiper__buttons .btn__swiper-next"
	},
	breakpoints: {

	},
})
//why-we-about__swiper
new Swiper(".why-we-about__swiper", {
	grabCursor: true,
	spaceBetween: 20,
	loop: true,
	navigation: {
		prevEl: ".why-we-about .swiper__buttons .btn__swiper-prev",
		nextEl: ".why-we-about .swiper__buttons .btn__swiper-next"
	},
	breakpoints: {
		1441: {
			slidesPerView: 3,
		},
		1280: {
			slidesPerView: 3.1,
		},
		992: {
			slidesPerView: 2.5,
		},
		640: {
			slidesPerView: 1.6,
		},
		360: {
			slidesPerView: 1.15,
		},
	},
})
