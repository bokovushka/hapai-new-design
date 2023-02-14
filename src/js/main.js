// меню

$(document).ready(function () {
	let body_lock = document.querySelector('body');
	let menuBtn = document.querySelector('.menu-btn');
	let menu = document.querySelector('.menu');
	let language = document.querySelector('.language');
	let header_active = document.querySelector('.header-menu');

	menuBtn.addEventListener('click', function () {
		menuBtn.classList.toggle('active');
		menu.classList.toggle('active');
		language.classList.toggle('active');
		header_active.classList.toggle('active');
		body_lock.classList.toggle('lock-menu-m');
	})
});

// height = max height

$(document).ready(function () {
	function setEqualHeight(columns) {
		var tallestcolumn = 0;
		columns.each(function () {
			currentHeight = $(this).height();
			if (currentHeight > tallestcolumn) {
				tallestcolumn = currentHeight;
			}
		});
		columns.height(tallestcolumn);
	}

	setEqualHeight($(".item-loop__txtblock .heading"));
	setEqualHeight($(".article__swiper .swiper-slide"));
	setEqualHeight($(".happy-customers__swiper .swiper-slide"));
	setEqualHeight($(".favorite__main .item-loop__link"));
	setEqualHeight($(".item-loop__txtblock"));
});

//favorite

$(document).on('click', '.btn-favor', function () {
	if ($(this).attr('data-status') === 'favorite') {
		$(this).removeAttr('data-status', 'favorite')
	} else {
		$(this).attr('data-status', 'favorite')
	}
});

$(document).on('click', 'a[href^="#"]', function (e) {
	var anchor = $(this);
	$("html, body")
		.stop()
		.animate(
			{
				scrollTop: $(anchor.attr("href")).offset().top - 20,
			},
			800
		);
	e.preventDefault();
});

//popup-authorization

$(function () {
	$(".checkbox input").checkboxradio();
});
$("#popup-authorization .login .txt-link").click(function () {
	$(".login").addClass("hide");
	$(".register").removeClass("hide");

});
$("#popup-authorization .register .txt-link").click(function () {
	$(".register").addClass("hide");
	$(".login").removeClass("hide");
});

//faq-item
$(function () {
	$("#accordion").accordion({
		collapsible: true,
		active: false,
		heightStyle: "content"
	});
});

// MAIN SEARCH

// $(function () {
// 	$.widget("custom.catcomplete", $.ui.autocomplete, {
// 		_create: function () {
// 			this._super();
// 			this.widget().menu("option", "items", "> :not(.ui-autocomplete-category)");
// 		},
// 		_renderMenu: function (ul, items) {
// 			var that = this,
// 				currentCategory = "";
// 			$.each(items, function (index, item) {
// 				var li;
// 				if (item.category != currentCategory) {
// 					ul.append("<li class='ui-autocomplete-category'>" + item.category + "</li>");
// 					currentCategory = item.category;
// 				}
// 				li = that._renderItemData(ul, item);
// 				if (item.category) {
// 					li.attr("aria-label", item.category + " : " + item.label);
// 				}
// 			});
// 		}
// 	});
// 	var data = [
// 		{ label: "Audi A3", category: "" },
// 		{ label: "Audi A4", category: "" },
// 		{ label: "Audi A5", category: "" },
// 		{ label: "Audi A7", category: "" },
// 		{ label: "Продати Audi", category: "Послуги" },
// 		{ label: "Купити Audi", category: "Послуги" },
// 		{ label: "Audi захоплює дух часу цим автомобілем: перший Audi 80 був представлений 50 років тому", category: "Блог" },
// 		{ label: "Audi додає Apple Music до широкого спектру своїх моделей", category: "Блог" }
// 	];
//
// 	$("#search").catcomplete({
// 		delay: 0,
// 		source: data
// 	});
// });


$(document).ready(function () {
	$("#datepicker").datepicker({
		// changeMonth: true,
		// changeYear: true,
		showOn: "button",
		showOtherMonths: true,
		selectOtherMonths: true
	});

	$(".date-link").click(function () {
		$("#datepicker").datepicker("show");
	});
});

//Back to Top Button
$(document).ready(function () {
	var btn = $("#button_top");

	$(window).scroll(function () {
		if ($(window).scrollTop() > 300) {
			btn.addClass("show");
		} else {
			btn.removeClass("show");
		}
	});

	btn.on("click", function (e) {
		e.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, "300");
	});
});

//choose-reality btn show content
$(document).ready(function () {
	var btn = $(".choose-reality .btn-style-2");
	btn.on("click", function (e) {
		e.preventDefault();
		$(this).next(".choose-reality__info").addClass("show");
		$(this).addClass('hide');
	});
});

//checkHeight partners page
// $(function checkHeight() {

// 	if (window.innerWidth > 991) {
// 		var height = $('.become-partner__form').height();
// 		$('.become-partner .img-wrap').height(height);
// 	}
// 	setTimeout(checkHeight, 500);
// });

//tabs / offices page / purchase-goods page
$(document).ready(function () {
	const tabs = document.querySelectorAll('.tab');
	const tabContents = document.querySelectorAll('.tab-content-item');

	tabs.forEach(tab => {
		tab.addEventListener('click', function () {
			tabs.forEach(tab => tab.classList.remove('active'));
			tabContents.forEach(content => content.classList.remove('active'));
			this.classList.add('active');
			document.getElementById(this.dataset.tabContent).classList.add('active');
		});
	});
});

//callback form
$("#form-popup-callback .btn-style-4").click(function () {
	$('.form-popup-callback__result').addClass("show");
	$('.form-popup-callback__content').addClass("hide");
});

//cookies popup
$(document).ready(function () {
	setTimeout(function () {
		$('#btn-cookies').click();
	}, 1000);
});

//text lenght
$(function () {
	$('#txt-feedback').keyup(function () {
		var txtlen = $(this).val().length;
		$('#txt-feedback-count').text(txtlen);

	});
});

//add form field 
$(document).ready(function () {
	var counter = 0;
	$("#form-become-partner .field-plus").click(function (e) {
		counter++;
		if (counter > 3) {
			return false;
		}
		else {
			$(".more-user-link").append('<div class="user-txt f-user-link"><input type="text" name="client_link" placeholder="Посилання"><p class="help-block help-block-error">Обов&#39;язкове поле.</p ></div >');
		}
	});
});

//popup-automatic-selection
$("#automatic-car-brand").selectmenu();
$("#automatic-car-model").selectmenu();

$(function () {
	$("#slider-range").slider({
		range: true,
		min: 10000,
		max: 45000,
		values: [10000, 30000],
		slide: function (event, ui) {
			$("#amount").val(ui.values[0] + " - " + ui.values[1]);
		}
	});
	$("#amount").val($("#slider-range").slider("values", 0) + " - " + $("#slider-range").slider("values", 1));
});

$(function () {
	$("#slider-range2").slider({
		range: true,
		min: 80000,
		max: 150000,
		values: [80000, 100000],
		slide: function (event, ui) {
			$("#amount2").val(ui.values[0] + " - " + ui.values[1]);
		}
	});
	$("#amount2").val($("#slider-range2").slider("values", 0) + " - " + $("#slider-range2").slider("values", 1));
});

$("#popup-automatic-selection .btn-style-4").click(function () {
	$('#popup-automatic-selection .form-popup-callback__result').addClass("show");
	$('#popup-automatic-selection .user-info').addClass("hide");
});

//purchase goods page / select
$("#car-year-production").selectmenu();
$("#car-basket").selectmenu();
$("#car-gearbox").selectmenu();
$("#car-fuel").selectmenu();
$("#car-engine-capacity").selectmenu();

//purchase goods page / button click
$("#form-request-purchase-goods .btn-style-3").click(function () {
	$('.request-purchase-goods .choice-car__content').addClass("hide");
	$('.request-purchase-goods .request-purchase-goods__thank').addClass("show");
	$('.about-car').addClass("hide");
	$('.choice-car__main').addClass("choice-car__thank");
});