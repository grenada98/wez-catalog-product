$(document).ready(function(){

    function testWebP(callback) {

        var webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
        
    testWebP(function (support) {
        
        if (support == true) {
            document.querySelector('body').classList.add('webp');
        }else{
            document.querySelector('body').classList.add('no-webp');
        }
    });


    $(".header-menu-link").on("click", function(){
        $(".header-menu-link").removeClass("active");
        $(".header-menu-link-a").removeClass("active");
		$(this).addClass("active");
        $(this).find(".header-menu-link-a").addClass("active");
        console.log("1");
	});

    $(".item-menu-img-li").on("click", function(){
        $(".item-menu-img-li").removeClass("active");
        $(this).addClass("active");
    });

    //mobile menu
    const burgerIcon = document.getElementsByClassName('burger');
    const mainDisabled=document.getElementsByClassName('main-disabled');
    const mobileMenu = document.getElementsByClassName('mobile-menu-header');
    const htmlTag = document.getElementsByTagName('html');
    console.log(mainDisabled);
    $('.mobile-catalog-div').on("click", function(event){
        console.log($('.burger').hasClass('active'));
        if($('.burger').hasClass('active')==false){
            burgerIcon[0].classList.add('active');
            console.log(burgerIcon[0]);
            mobileMenu[0].classList.add('active');
            mainDisabled[0].classList.add('active');
            htmlTag[0].classList.add('disabled');
        }
        else{
            burgerIcon[0].classList.remove('active');
            mobileMenu[0].classList.remove('active');
            mainDisabled[0].classList.remove('active');
            htmlTag[0].classList.remove('disabled');
        }
    });
    
    $('.main-disabled').on("click", function(event){
        if($(this).hasClass('active')==true){
            $(this).removeClass('active');
            mobileMenu[0].classList.remove('active');
            burgerIcon[0].classList.remove('active');
            htmlTag[0].classList.remove('disabled');
        }
    });


    //basket
    const basketIcon =document.getElementById('basket-count-id');
    const buyButton =document.getElementsByClassName('buy-span');
    const openWindowPopupDisabled = document.getElementsByClassName('basket-popup');
    const openBasketPopup = document.getElementsByClassName('basket-popup-window');
    const addProduct = document.getElementsByClassName('add');
    const removeProduct = document.getElementsByClassName('remove');
    const inputBasket = document.getElementsByClassName('input-count-of-product[data-name]');
    buyButton.forEach(function(el) {el.addEventListener('click', function (){
        basketIcon.textContent=+basketIcon.innerHTML+1;
    })})
    $('#open-basket-popup').on("click", function(event){
        openWindowPopupDisabled[0].classList.add('active');
        openBasketPopup[0].classList.add('active');
        htmlTag[0].classList.add('disabled');
    });
    $('.basket-popup-close').on("click", function(event){
        openWindowPopupDisabled[0].classList.remove('active');
        openBasketPopup[0].classList.remove('active');
        htmlTag[0].classList.remove('disabled');
    });
    addProduct.forEach(function(el) {el.addEventListener('click', function (){
        const data = this.dataset.name;
        document.querySelector(`.input-count-of-product[data-name="${data}"]`).value =+document.querySelector(`.input-count-of-product[data-name="${data}"]`).value+1;
        if(document.querySelector(`.input-count-of-product[data-name="${data}"]`).value>100){
            document.querySelector(`.input-count-of-product[data-name="${data}"]`).value = 100;
            console.log(document.querySelector(`.input-count-of-product[data-name="${data}"]`).value);
        }
        else{
            console.log(document.querySelector(`.input-count-of-product[data-name="${data}"]`).value + " Значение плейсхолдера");
        }
    })});
    removeProduct.forEach(function(el) {el.addEventListener('click', function (){
        const data = this.dataset.name;
        if(document.querySelector(`.input-count-of-product[data-name="${data}"]`).value>0){
            document.querySelector(`.input-count-of-product[data-name="${data}"]`).value =+document.querySelector(`.input-count-of-product[data-name="${data}"]`).value-1;
        }
        else{
            document.querySelector(`.input-count-of-product[data-name="${data}"]`).value=0;
        }

    })});
    /*inputBasket.forEach(function(el) {el.addEventListener('change', (event) => {
        const data = this.dataset.name;
        console.log($(this).getAttribute('max'));
        if($(this).value>+$(this).getAttribute('max')){
            $(this).value=+$(this).getAttribute('max');
        }
        if($(this).value<+$(this).getAttribute('min')){
            $(this).value=+$(this).getAttribute('min');
        }
      })});*/


    //mobile submenu

    const submenuMobile = document.getElementsByClassName('mobile-menu-list-li');
    submenuMobile.forEach(function(el) {el.addEventListener('click', function (){
        const data = this.dataset.name;
        if(document.querySelector(`.mobile-header-submenu-case.active`) !==null){
            document.querySelector(`.mobile-header-submenu-case.active`).classList.remove('active');
        }
        document.querySelector(`.mobile-header-submenu-case[data-name="${data}"]`).classList.add('active');
        //document.querySelector('.mobile-menu-list').classList.add('disabled');
    })})

        //button back for mobile submenu
    const backMobileSubmenu = document.getElementsByClassName('mobile-menu-back-button');
    backMobileSubmenu.forEach(function(el) {el.addEventListener('click', function (){
        const data = this.dataset.name;
        document.querySelector(`.mobile-header-submenu-case[data-name="${data}"]`).classList.remove('active');
    })})

    //rate
    const ratingItemsList = document.querySelectorAll('.star');
    const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);
    ratingItemsArray.forEach(item => {
        item.addEventListener('click', ()=>{
            const {itemValue} = item.dataset;
            item.closest(".rating").dataset.totalValue =  item.dataset.itemValue;
        })
    });

    
    
    //option-menu
        $(".option-title-button").on("click", function(event){
            event.preventDefault();
            if($(this).hasClass("active")){
                $(this).removeClass("active");
                $(this).removeClass("active").next().slideToggle(300);
            }
            else{
                $(".option-title-button").removeClass("active");
                $(".option-title-button").next().removeClass("active");

                $(this).addClass("active");
                $(this).addClass("active").next().slideToggle(300);
            }
            console.log($(this)[0].name)
        });

        $('.button-submit-options').on("click", function(event){
            event.preventDefault();
            console.log($(this)[0].name)
        })

        $(".checkbox").on("click", function(){
            if($(this).find(".option-checkbox").prop("checked")==true){
                $(this).removeClass("active");
                $(this).find(".option-checkbox").prop("checked", false);
            }
            else{
                $(this).addClass("active");
                $(this).find(".option-checkbox").prop("checked", true);
            }
        })
    
    //mobile option-menu
    const buttonOptionCatalog = document.getElementsByClassName("filter-option-catalog-button");
    const buttonOptionCatalogClose = document.getElementsByClassName("catalog-option-div-mobile-close");
    buttonOptionCatalog.forEach(function(el, i) {el.addEventListener('click', function (){
        const data = this.dataset.name;
        document.querySelector(`.popup-catalog-option-div-mobile[data-name="${data}"]`).classList.add('active');
        htmlTag[0].classList.add('disabled');
    })})
    buttonOptionCatalogClose.forEach(function(el, i) {el.addEventListener('click', function (){
        const data = this.dataset.name;
        document.querySelector(`.popup-catalog-option-div-mobile.active[data-name="${data}"]`).classList.remove('active');
        htmlTag[0].classList.remove('disabled');
    })})


    //input range with two tag
    const inputRangeTwoTags = document.getElementById('inputSlidTwoTags');
    const inputPriceMin = document.getElementById('input-price-min');
    const inputPriceMax = document.getElementById('input-price-max');
    if(inputRangeTwoTags && inputPriceMin && inputPriceMax){
        let countFrom;
        let countTo;
        let countFromInputMin;
        let countFromInputMax;
        let instance;
        let min = 0;
        let max = 1000;
        $("#inputSlidTwoTags").ionRangeSlider({
            type: "double",
            min: min,
            max: max,
            from: 200,
            to: 500,
            onStart: function(data) {
                inputPriceMin.value = data.from;
                inputPriceMax.value = data.to;
            },
            onChange: function (data) {
                countFrom = data.from;
                countTo = data.to;
                
                inputPriceMin.value = countFrom;
                inputPriceMax.value = countTo;
    
            }
        })
        instance = $("#inputSlidTwoTags").data("ionRangeSlider");
        inputPriceMin.addEventListener('change', function() {
            countFromInputMin = inputPriceMin.value;
            if (countFromInputMin < min) {
                countFromInputMin = min;
            } else if (countFromInputMin > max) {
                countFromInputMin = max;
            }
            console.log(countFromInputMin);
        
            instance.update({
                from: countFromInputMin
            });
        });
        inputPriceMax.addEventListener('change', function() {
            countFromInputMax = inputPriceMax.value;
            if (countFromInputMax > max) {
                countFromInputMax = max;
            } else if (countFromInputMax < min) {
                countFromInputMax = min;
            }
        
            instance.update({
                to: countFromInputMax
            });
        });
        
    }

    //mobile input range slider

    const inputRangeTwoTagsMob = document.getElementById('inputSlidTwoTagsMob');
    const inputPriceMinMob = document.getElementById('input-price-min-mob');
    const inputPriceMaxMob = document.getElementById('input-price-max-mob');
    if(inputRangeTwoTagsMob && inputPriceMinMob && inputPriceMaxMob){
        let countFrom;
        let countTo;
        let countFromInputMin;
        let countFromInputMax;
        let instance;
        let min = 0;
        let max = 1000;
        $("#inputSlidTwoTagsMob").ionRangeSlider({
            type: "double",
            min: min,
            max: max,
            from: 200,
            to: 500,
            onStart: function(data) {
                inputPriceMinMob.value = data.from;
                inputPriceMaxMob.value = data.to;
            },
            onChange: function (data) {
                countFrom = data.from;
                countTo = data.to;
                
                inputPriceMinMob.value = countFrom;
                inputPriceMaxMob.value = countTo;
    
            }
        })
        instance = $("#inputSlidTwoTagMobs").data("ionRangeSlider");
        inputPriceMinMob.addEventListener('change', function() {
            countFromInputMin = inputPriceMinMob.value;
            if (countFromInputMin < min) {
                countFromInputMin = min;
            } else if (countFromInputMin > max) {
                countFromInputMin = max;
            }
            console.log(countFromInputMin);
        
            instance.update({
                from: countFromInputMin
            });
        });
        inputPriceMaxMob.addEventListener('change', function() {
            countFromInputMax = inputPriceMaxMob.value;
            if (countFromInputMax > max) {
                countFromInputMax = max;
            } else if (countFromInputMax < min) {
                countFromInputMax = min;
            }
        
            instance.update({
                to: countFromInputMax
            });
        });
        
    }

    //scrollbar
    const scrollbar_list_weapons = document.getElementById('scroll-list-of-weapons');
    if(scrollbar_list_weapons){
    new SimpleBar(scrollbar_list_weapons), {
        autoHide: false,

      }}

    




    //slick 1

    $('.list-of-categories').slick({
        arrows: false,
        infinite: false,
        adaptiveHeight: false,
        speed: 300,
        slidesToShow: 5,
        responsive:[
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 1055,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1230,
                settings: {
                    slidesToShow: 5
                }
            }
        ]
    });
    let firstSlider = $('.list-of-categories');


    //to top
        let toTOP = document.querySelector('.to-top')
        function to_TOP() {
            if (window.pageYOffset > 100) {
              toTOP.style.opacity = '1'
            } else { toTOP.style.opacity = '0' }
          }
        window.onscroll = to_TOP
        // появление/затухание кнопки #back-top
        $(function (){
    
            // при клике на ссылку плавно поднимаемся вверх
            $(".to-top").click(function (){
                $("body,html").animate({
                    scrollTop:0
                }, 800);
                return false;
            });
        });
        $(document).click((e) => {
            const {target} = e;
            if(target.nodeName === 'A' && target.getAttribute('href') === '#') {
              e.preventDefault();
            }
          });




    //slick-sliders
    $('.item-menu-img-ul').slick({
        arrows: true,
        infinite: false,
        adaptiveHeight: true,
        speed: 300,
        slidesToShow: 4,
        vertical: true,
        focusOnSelect: true,
        asNavFor: ".slider-2",
        responsive:[
            {
                breakpoint: 360,
                settings: {
                    vertical: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 540,
                settings: {
                    vertical: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1217,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1055,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
    
    $('.slider-2').slick({
        arrows: false,
        fade: true,
        infinite: false,
        asNavFor: ".item-menu-img-ul"
    });

    $('.ul-list-of-product').slick({
        arrows: true,
        slidesToShow: 5,
        responsive:[
            {
                breakpoint: 450,
                settings:{
                    slidesToShow: 1,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 360,
                settings:{
                    slidesToShow: 1,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 1618,
                settings: {
                    slidesToShow: 4,
                    arrows: true
                }
            },
            {
                breakpoint: 1217,
                settings: {
                    slidesToShow: 3,
                    arrows: true
                }
            },
            {
                breakpoint: 885,
                settings: {
                    slidesToShow: 2,
                    arrows: true
                }
            },
            {
                breakpoint: 590,
                settings: {
                    slidesToShow: 1,
                    arrows: true
                }
            }
        ]
    })

})