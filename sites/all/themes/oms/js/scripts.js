(function($) {
    var STNScript = {
        // Equal height function
        // Replace "obj" param with your selector
        equalHeight: function (obj) {
            var currentTallest = 0,
                currentRowStart = 0,
                rowDivs = [],
                $el,
                topPosition = 0;
            $(obj).each(function () {

                $el = $(this);
                $el.height('auto');
                topPostion = $el.offset().top;

                if (currentRowStart != topPostion) {
                    for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                        rowDivs[currentDiv].height(currentTallest);
                    }
                    rowDivs.length = 0;
                    currentRowStart = topPostion;
                    currentTallest = $el.height();
                    rowDivs.push($el);
                } else {
                    rowDivs.push($el);
                    currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
                }
                for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                }
            });
        },
        //
        initSlick:function(){

            $('.main-slider .view-content').slick({
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: true,
                dots:true
            });

            $('.view-id-projects.view-display-id-block_1 .view-content').slick({
                autoplay: false,
                autoplaySpeed: 2000,
                arrows: true,
                dots:true
                });
            $('.block-featured-product .view-content').slick({
                autoplay: false,
                arrows: true,
                dots:false,
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 4,
                dots:true
            });
            $('.partner .view-content').slick({
                autoplay: false,
                arrows: true,
                dots:false,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                dots:true
            });
        },

        autoHeight:function(){
            STNScript.equalHeight('.view-id-product_list .views-row');
            STNScript.equalHeight('.view-technical-list .views-row');
            STNScript.equalHeight('.view-news.view-display-id-page_2 .view-news .views-row,.view-news.view-display-id-page_1 .view-news .views-row');
        },

        createMenuMobile:function(){
            $( "#navigation" ).clone().appendTo( ".mobile-menu-container" );
        },

        /*
         * detect star for display
         */
        detectStar:function() {
            $('.views-field-field-rate').each(function () {
                var rate = parseInt($(this).find('.field-content').text());
                var stars_html = "";
                if (!isNaN(rate) || rate > 1) {
                    for (var i = 1; i <= 5; i++) {
                        if (i <= rate) {
                            stars_html += '<span class="star star-active"></span>';
                        } else {
                            stars_html += '<span class="star"></span>';
                        }
                    }
                    $(this).html(stars_html);
                }

            })
        },

        searchClick:function () {
            $('.block-search .title .fa.fa-search').click(function(){
                $('.block-search .content').show();
            })
        },

        moveSlideBarToBottom:function () {
            $('#main>.container>.row>.col-md-3').insertAfter('#main>.container>.row>.col-md-9')
        },
        moveSlideBarToTop:function () {
            $('#main>.container>.row>.col-md-3').insertBefore('#main>.container>.row>.col-md-9')
        },
        isMobile:function () {
            var w=$(window).width();
            if(w<=990){
                return true;
            }
            return false;
        },
        testimonialsEffect:function(){
            $('.block-testimonials .views-row').eq(3).addClass('active');
            $('.block-testimonials .views-field-field-image').click(function () {
                $('.block-testimonials .views-row').removeClass('active');
                $(this).parent().addClass('active');
            })
        },
        attackAjaxComplete:function () {
            $( document ).ajaxSend(function(event, xhr, settings) {

            });
            $( document ).ajaxComplete(function(event, xhr, settings) {

            });
        },
        initMagicZoom:function(){
            $('.node-type-project .node-project .field-name-field-image').magnificPopup(
                {
                    delegate: 'img',
                    type: 'image',
                    gallery: {
                        enabled: true
                    },
                    callbacks: {
                        elementParse: function(qw) {
                            qw.src = qw.el.attr('src');
                        }
                    }
                });
        },
        menuExpand:function(){
            $('.mobile-menu-container').find('#main-menu >ul>li.expanded>ul.menu').before('<i class="fa fa-plus"></i>');
            $(document).on('click','#main-menu .fa',function () {

                $(this).parent().toggleClass('open');
            })
        }
    }

    $(document).ready(function(){

        $('.block-search .fa-search').click(function () {
            $('.block-search .content').show();
        })
        $(document).on("click",function (event) {
            if (!$(event.target).is(".block-search .content .container-inline, #edit-search-block-form--2,.block-search .title .fa.fa-search")) {
                $('.block-search .content').hide();

            }
        })
        STNScript.initSlick();
        STNScript.createMenuMobile();



    })
    $(window).on('load',function(){
        STNScript.autoHeight();
        STNScript.initMagicZoom();
        $(window).resize(function () {
            STNScript.autoHeight();
        })
        STNScript.menuExpand();
    })
})(jQuery)