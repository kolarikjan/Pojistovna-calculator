
const filtersVisualReset = () => {
    if ($(window).width() < 993) {
        $(".largeFilters-main-item").removeClass("active");
        $(".largeFilters-menu li").removeClass("active");
    } else {
        $(".largeFilters-main-item:first-child").addClass("active");
        $(".largeFilters-menu li:first-child").addClass("active");
    }
}
$(document).ready(function () {

    Fancybox.bind("[data-fancybox]", {});

    document.querySelector('.navbar-toggler').addEventListener('click', function () {

        document.querySelector('.navbar-toggler').classList.toggle('open');

    });


    const owlHome = $('.banner-owl').owlCarousel({
        items:1,
        loop:false,
        rewind:true,
        navText:['<svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 13 8" width="13" height="8"><g id="Menu-top"><path id="-e-icon-arrow-default" class="s0" d="m7 7.4l5-4.9c0.4-0.4 0.4-1.1 0-1.5-0.4-0.4-1.1-0.4-1.5 0l-4.2 4.2-4.3-4.2c-0.4-0.4-1-0.4-1.4 0-0.3 0.2-0.4 0.5-0.4 0.7 0 0.3 0.1 0.6 0.4 0.8l4.9 4.9c0.2 0.2 0.5 0.3 0.8 0.3 0.2 0 0.5-0.1 0.7-0.3z"/></g></svg>','<svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 13 8" width="13" height="8"><g id="Menu-top"><path id="-e-icon-arrow-default" class="s0" d="m7 7.4l5-4.9c0.4-0.4 0.4-1.1 0-1.5-0.4-0.4-1.1-0.4-1.5 0l-4.2 4.2-4.3-4.2c-0.4-0.4-1-0.4-1.4 0-0.3 0.2-0.4 0.5-0.4 0.7 0 0.3 0.1 0.6 0.4 0.8l4.9 4.9c0.2 0.2 0.5 0.3 0.8 0.3 0.2 0 0.5-0.1 0.7-0.3z"/></g></svg>'],
        margin:1,
        nav: false,
        dots: false,
        autoplay:true,
        autoplayTimeout:6000,
        autoplayHoverPause:false,
    });

    const owlNews = $('.manufacturers-owl').owlCarousel({
        items:6,
        loop:false,
        rewind:true,
        navText:['<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 8" width="20" height="8"><path id="-e-icon-arrow" class="s0" d="m20 4l-3.5-3.7q-0.3-0.3-0.7-0.3-0.3 0-0.6 0.3-0.3 0.3-0.3 0.7 0 0.4 0.3 0.7l1.2 1.3h-15.5c-0.5 0-0.9 0.4-0.9 1 0 0.6 0.4 1 0.9 1h15.5l-1.2 1.3q-0.3 0.3-0.3 0.7 0 0.4 0.3 0.7 0.3 0.3 0.6 0.3 0.4 0 0.7-0.3l3.5-3.7z"/></svg>','<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 8" width="20" height="8"><path id="-e-icon-arrow" class="s0" d="m20 4l-3.5-3.7q-0.3-0.3-0.7-0.3-0.3 0-0.6 0.3-0.3 0.3-0.3 0.7 0 0.4 0.3 0.7l1.2 1.3h-15.5c-0.5 0-0.9 0.4-0.9 1 0 0.6 0.4 1 0.9 1h15.5l-1.2 1.3q-0.3 0.3-0.3 0.7 0 0.4 0.3 0.7 0.3 0.3 0.6 0.3 0.4 0 0.7-0.3l3.5-3.7z"/></svg>'],
        margin:10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 2,
            },
            993: {
                items: 3,
            },
            1200: {
                items: 4,
            },
            1475: {
                items: 5,
            },
            1800: {
                items: 6,
            }
        }
    });

    $(".products-item-top").on({
        mouseenter: function () {
            $(this).closest(".products-item").addClass("active");
        },
        mouseleave: function () {
            $(this).closest(".products-item").removeClass("active");
        }
    });
    
    $('body').on('click', '.search-toggler', function(e) {
        e.preventDefault();
        $(".search-extended").toggleClass("active");
    });
    $('body').on('click', '.search-extended-top-close', function(e) {
        e.preventDefault();
        $(".search-extended").toggleClass("active");
    });
    
    
    const owlProductsImaages = $('.productsDetail-owl').owlCarousel({
        items:3,
        loop:false,
        rewind:true, 
        navText:['<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 8" width="20" height="8"><path id="-e-icon-arrow" class="s0" d="m20 4l-3.5-3.7q-0.3-0.3-0.7-0.3-0.3 0-0.6 0.3-0.3 0.3-0.3 0.7 0 0.4 0.3 0.7l1.2 1.3h-15.5c-0.5 0-0.9 0.4-0.9 1 0 0.6 0.4 1 0.9 1h15.5l-1.2 1.3q-0.3 0.3-0.3 0.7 0 0.4 0.3 0.7 0.3 0.3 0.6 0.3 0.4 0 0.7-0.3l3.5-3.7z"/></svg>','<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 8" width="20" height="8"><path id="-e-icon-arrow" class="s0" d="m20 4l-3.5-3.7q-0.3-0.3-0.7-0.3-0.3 0-0.6 0.3-0.3 0.3-0.3 0.7 0 0.4 0.3 0.7l1.2 1.3h-15.5c-0.5 0-0.9 0.4-0.9 1 0 0.6 0.4 1 0.9 1h15.5l-1.2 1.3q-0.3 0.3-0.3 0.7 0 0.4 0.3 0.7 0.3 0.3 0.6 0.3 0.4 0 0.7-0.3l3.5-3.7z"/></svg>'],
        nav: true,
        dots: false,
        margin: 18
    });

    const owlGallery = $('.instagramGallery-owl').owlCarousel({
        items:5,
        loop:false,
        rewind:true,
        nav: false,
        dots: false,
        autoplay:true,
        autoplayHoverPause:true,
        autoplayTimeout:5000,
        responsive: {
            0: {
                items: 1,
                autoplayTimeout:2000
            },
            768: {
                items: 3,
            },
            1200: {
                items: 4,
            },
            1475: {
                items: 5,
            }
        }
    });

    $('body').on('click', '.addtocart-cart-inputbox-quantity a', function(e) {
        e.preventDefault();
        const input = $(this).closest(".addtocart-cart-inputbox").children("input[name='quantity']");
        let value = parseInt(input.val());
        if ($(this).hasClass("minus") && value > 1) {
            input.val(value-1);
        } else if ($(this).hasClass("plus")) {
            input.val(value+1);
        }
    });
    
    $('.form-section-dropdown-activator input[type="checkbox"]').each(function(i, obj) {
        if ($(this).is(':checked')) {
            $(this).closest(".form-section-dropdown").addClass("active");
        } else {
            $(this).closest(".form-section-dropdown").removeClass("active");
        }
    });
    
    $('body').on('click', '.filters-item-header', function() {
        this.classList.toggle("activated");
        let panel = this.nextElementSibling;
        if (panel) {
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }    
        }
    });
    
    $('body').on('click', '.tabs-menu-item', function(e) {
        e.preventDefault();
        const targetID = $(this).attr("data-target");
        $(".tabs-menu-item, .tabs-blocks-item").removeClass("active");
        $(".tabs-menu-item[data-target="+targetID+"]").addClass("active");
        $(".tabs-blocks-item[data-id="+targetID+"]").addClass("active");
    });

    
    $('body').on('click', '.largeFilters-menu a', function(e) {
        e.preventDefault();
        const targetID = $(this).parent().attr("data-target");
        $(".largeFilters-menu li, .largeFilters-main-item").removeClass("active");
        $(".largeFilters-menu li[data-target="+targetID+"]").addClass("active");
        $(".largeFilters-main-item[data-id="+targetID+"]").addClass("active");
        $(".largeFilters-main-back").addClass("d-flex");
        if ($(window).width() < 993) {
            $(".largeFilters-menu").addClass("hide");
            $(".largeFilters-main").addClass("active");
        }
    });

    $('body').on('click', '.largeFilters-main-back', function(e) {
        e.preventDefault();
        $(".largeFilters-menu").removeClass("hide");
        $(".largeFilters-main").removeClass("active");
        $(".largeFilters-main-back").removeClass("d-flex");
    });

    $('body').on('click', '.largeFilters-bottom-reset', function(e) {
        e.preventDefault();
        $('.largeFilters')[0].reset();
        $(this).closest(".popup-default").children(".popup-default-content").toggleClass("active");
    });

    $(".productInformation-gift-item").click(function (e) { 
        $(".productInformation-gift-item").removeClass("selected");
        $(this).addClass("selected");
    });

    $('.filters-item-changingHeader input[type="radio"]').on('change', function(e) {
        $(".filters-item-header-state-default").removeClass("active");
        $(".filters-item-header-state-selected").addClass("active");
        let title = $(this).attr("data-title") != "" ? $(this).attr("data-title") : $(this).val();
        $(".filters-item-header-state-selected span").html(title);
        $(".filters-item-changingHeader .filters-item-header").removeClass("activated");
        document.querySelector(".filters-item-changingHeader .filters-item-content").style.maxHeight = null;
    });
    
    $('.filters-item-changingHeader input[type="radio"]').each(function(i, obj) {
        if ($(this).is(':checked')) {
            $(".filters-item-header-state-default").removeClass("active");
            $(".filters-item-header-state-selected").addClass("active");
            let title = $(this).attr("data-title") != "" ? $(this).attr("data-title") : $(this).val();
            $(".filters-item-header-state-selected span").html(title);
            $(".filters-item-changingHeader .filters-item-header").removeClass("activated");
        }
    });

    $('body').on('click', '.popup-default-activator, .popup-default-close, .popup-close', function(e) {
        e.preventDefault();
        $(this).closest(".popup-default").children(".popup-default-content").toggleClass("active");
        if ($(this).hasClass("reset-visual")) {
            filtersVisualReset();
        }
    });
    

    $('.form-section-dropdown-activator input[type="checkbox"]').on('change', function(e) {
        e.preventDefault();
        if ($(this).is(':checked')) {
            $(this).closest(".form-section-dropdown").addClass("active");
        } else {
            $(this).closest(".form-section-dropdown").removeClass("active");
        }
    });
    
    $('.form-section-dropdown-activator input[type="checkbox"]').each(function(i, obj) {
        if ($(this).is(':checked')) {
            $(this).closest(".form-section-dropdown").addClass("active");
        } else {
            $(this).closest(".form-section-dropdown").removeClass("active");
        }
    });
    
    
    $('.filters-item-catalog input[type="checkbox"]').on('change', function(e) {
        e.preventDefault();
        const targetEl = "#"+ $(this).closest("form").attr("data-targetEl");
        const currentCount = $(targetEl).html();
        console.log(targetEl);
        if ($(this).is(':checked')) {
            if (currentCount == "") {
                $(targetEl).html("1");
            } else {
                $(targetEl).html(parseInt(currentCount)+1);
            }
        } else {
            if (currentCount <= 1) {
                $(targetEl).html("");
            } else {
                $(targetEl).html(parseInt(currentCount)-1);
            }
        }
    });

});