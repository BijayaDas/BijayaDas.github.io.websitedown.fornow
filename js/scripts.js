(function($) {
  "use strict";

   $(document).ready(function(){
    //Timeline
    $('.timeline-item-trigger span').click(function () {
        if ($(this).hasClass('fa fa-plus')) {
            $(this).removeClass('fa fa-plus').addClass('fa fa-minus');
        } else {
            $(this).removeClass('fa fa-minus').addClass('fa fa-plus');
        }
    });
    $('.timeline-item-title').click(function () {
        $trigger = $(this).parent().parent().find('.timeline-item-trigger span');
        if ($trigger.hasClass('fa fa-plus')) {
            $trigger.removeClass('fa fa-plus').addClass('fa fa-minus');
        } else {
            $trigger.removeClass('fa fa-minus').addClass('fa fa-plus');
        }
    }); 
/*----------------------------- Navigations --------------------------*/
//Navigation For Index1
  $('#open-nav ').click(function () {
      if ($(this).hasClass('fa fa-bars')) {
          $(this).removeClass('ffa fa-bars').addClass('fa fa-times');
          $('#navs').addClass('open-navs').slideDown('.navone');
          $(this).removeClass('nav-half').addClass('nav-full');
          $('.nav-menu').show();
      } else {
          $(this).removeClass('fa fa-times').addClass('fa fa-bars');
          $(this).removeClass('nav-full').addClass('nav-half');
          $('#navs').removeClass('open-navs').slideUp('.navone');
          $('.nav-menu').hide();
      }
  });

//Navigation For Index2
  $('#navs').onePageNav({
    currentClass: 'active',
    filter: ':not(.external)', 
    scrollThreshold: 0.25,
    scrollOffset: 0
  });

//Sticky Navigation
  $(".main-menu-continer").sticky({ topSpacing: 0 });

//Responsive Nav
  $( "ul.sub-menu").parent().append("<span class='toggle_nav_button'>+</span>");
    $(".toggle_nav_button").click(
          function(){
            var link = $(this);
            $(this).parent().find("ul.sub-menu").slideToggle('fast', function(){
              if ($(this).is(':visible')){
                link.text('-');
              } else {
                link.text('+');
              }
      });
      return false;
  });  


//Responsive Nav
  $('.nav a.colapse-menu1').click(function () { $(".navbar-collapse").collapse("hide") });
  $('body').on('touchstart.dropdown', '.dropdown-menu', function (e) { e.stopPropagation(); }); 

//Smoothscroll
      smoothScroll.init({
          speed: 200 
      }); 

 /*----------------------------- Scroll To Top--------------------------*/
             var scrollTimeout;
            
            $('a.scroll-top').click(function(){
                $('html,body').animate({scrollTop:0},500);
                return false;
            });

            $(window).scroll(function(){
                clearTimeout(scrollTimeout);
                if($(window).scrollTop()>400){
                    scrollTimeout = setTimeout(function(){$('a.scroll-top:hidden').fadeIn()},100);
                }
                else{
                    scrollTimeout = setTimeout(function(){$('a.scroll-top:visible').fadeOut()},100);    
            }
            });


/*----------------------------- Tooltip--------------------------*/
  $( 'body' ).tooltip({
        selector: "a[data-toggle=tooltip]"
  });

/*----------------------------- Skill Chart --------------------------*/
  $('.chart').easyPieChart({
        animate: 2000,
        lineWidth: 13,
        barColor: '#e74c3c',
        lineCap: 'square',
        scaleColor: false,
        trackColor: '#e6e8ed',
        size: 170
  });

//Animated Progress Bars
  $('.skill li').each(function () {
    $(this).appear(function() {
      $(this).animate({opacity:1,left:"0px"},1200);
      var b = $(this).find("span").attr("data-width");
      $(this).find("span").animate({
      width: b + "%"
      }, 1700, "easeOutCirc");
    }); 
  });
/*----------------------------- Animated Counter --------------------------*/
  $('.count').each(function () {
    $(".total-numbers .sum").appear(function() {
    var counter = $(this).html();
    $(this).countTo({
      from: 0,
      to: counter,
      speed: 2000,
      refreshInterval: 60,
      });
    });
  });

/*----------------------------- Blog Carousel --------------------------*/
  $("#blog-carousel").owlCarousel({
    autoPlay: 3000,
    navigation : false, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true
  });

/*----------------------------- Testimonials Carousel --------------------------*/
  $("#testimonials").owlCarousel({
    //autoPlay: 3000, //Set AutoPlay to 3 seconds
    items : 1,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [979,1],
    itemsMobile : [480,1]
  });

/*----------------------------- Google Map --------------------------*/
  // $('#gmap').gmap3({
  //   marker:{address:"Marathahalli, Bangalore, India", options:{icon: "img/location1.png"}},
  //   map:{
  //       options:{
  //       zoom: 14,
  //       scrollwheel: false
  //               }
  //       }
  // });

/*----------------------------- Contact Form --------------------------*/
     $('#submit').formValidator({
        scope: '#form'
      });
      
      $('#post-commentsss').formValidator({
        scope: '#comments-form'
      });
      
      $('#submit,#post-commentsss').click(function() {
            $('input.error-input, textarea.error-input').delay(300).animate({marginLeft:0},100).animate({marginLeft:10},100).animate({marginLeft:0},100).animate({marginLeft:10},100);
        });

      // Form plugin

      var options = {

        beforeSubmit: function() {
          $('.sending').show();

        },
        success: function() {
          $('.sending').hide();
          $('#form').hide();
          $(".mess").append('<h5>Thanks !</h5><h5>Your message has been sent.</h5>'); // Change Your message post send
          $('.mess').delay(3000).fadeOut(function() {

            $('#form').clearForm();
            $('#form').delay(3500).show();

          });
        }
      };
      

      $('#form').submit(function() {
        $(this).ajaxSubmit(options);
        return false;
      });   

   });

    $(window).load(function(){
/*----------------------------- Loader & Parallax --------------------------*/    
//Page Preloader  
      $(".loader-item").delay(700).fadeOut();
      $(".mask").delay(800).fadeOut("slow");    
        parallaxInit(); 

/*----------------------------- Isotop Portfolio --------------------------*/
    $(function(){
        var $container = $('.portfolio-container');
                  $container.isotope({
                    itemSelector : '.mt',
                    layoutMode : 'masonry'
                  });
        
        var $optionSets = $('#options .option-set'),
            $optionLinks = $optionSets.find('a');

        $optionLinks.click(function(){
          var $this = $(this);
          // don't proceed if already selected
          if ( $this.hasClass('selected') ) {
            return false;
          }
          var $optionSet = $this.parents('.option-set');
          $optionSet.find('.selected').removeClass('selected');
          $this.addClass('selected');
    
          // make option object dynamically, i.e. { filter: '.my-filter-class' }
          var options = {},
              key = $optionSet.attr('data-option-key'),
              value = $this.attr('data-option-value');
          // parse 'false' as false boolean
          value = value === 'false' ? false : value;
          options[ key ] = value;
          if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
            // changes in layout modes need extra logic
            changeLayoutMode( $this, options )
          } else {
            // otherwise, apply new options
            $container.isotope( options );
          }
          
          return false;
        });
      });  
//Masonry Blog
    var $container = $('.blog-post-holder');
    $container.isotope({
       masonry: { 
      },
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false,
      },  
    });

    });

//Parallax     
  function parallaxInit() {
    $('#home').parallax("30%", 0.1);
    $('#status').parallax("30%", 0.1);
    $('#wprocess').parallax("30%", 0.1);
    $('#hire').parallax("30%", 0.1);
    $('#qoutes').parallax("30%", 0.1);
    //$('#parallax-1').parallax("30%", 0.1);
    //$('#parallax-2').parallax("30%", 0.1);
    /*add as necessary*/
  }  
console.log("%cDon’t worry about failure; you only have to be right once.", "text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15); color: red; font-size: 44px; font-weight: bolder");
})(jQuery);