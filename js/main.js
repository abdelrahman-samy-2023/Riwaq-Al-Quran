$(function() {

	var siteSticky = function() {
		$(".js-sticky-header").sticky({ topSpacing: 0 });
		};
		siteSticky();
	
		var siteMenuClone = function() {
	
		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});
	
		setTimeout(function() {
	
			var counter = 0;
			$('.site-mobile-menu .has-children').each(function() {
			var $this = $(this);
	
			$this.prepend('<span class="arrow-collapse collapsed">');
	
			$this.find('.arrow-collapse').attr({
				'data-toggle': 'collapse',
				'data-target': '#collapseItem' + counter,
			});
	
			$this.find('> ul').attr({
				'class': 'collapse',
				'id': 'collapseItem' + counter,
			});
	
			counter++;
	
			});
	
		}, 1000);
	
		$('body').on('click', '.arrow-collapse', function(e) {
			var $this = $(this);
			if ($this.closest('li').find('.collapse').hasClass('show')) {
			$this.removeClass('active');
			} else {
			$this.addClass('active');
			}
			e.preventDefault();
	
		});
	
		$(window).resize(function() {
			var $this = $(this),
			w = $this.width();
	
			if (w > 768) {
			if ($('body').hasClass('offcanvas-menu')) {
				$('body').removeClass('offcanvas-menu');
			}
			}
		});
	
		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();
	
			if ($('body').hasClass('offcanvas-menu')) {
			$('body').removeClass('offcanvas-menu');
			$this.removeClass('active');
			} else {
			$('body').addClass('offcanvas-menu');
			$this.addClass('active');
			}
		});
	
		// click outside offcanvas
		$(document).mouseup(function(e) {
			var container = $(".site-mobile-menu");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
			if ($('body').hasClass('offcanvas-menu')) {
				$('body').removeClass('offcanvas-menu');
			}
			}
		});
		};
		siteMenuClone();
	
});

// YouTube Iframe API and JavaScript for autoplay and modal handling
var player;

		function onYouTubeIframeAPIReady() {
			// Create player object
			player = new YT.Player('videoPlayer', {
			height: '315',
			width: '100%',
			videoId: '', // Video ID will be set dynamically
			events: {
				'onReady': onPlayerReady
			}
			});
		}

		function onPlayerReady(event) {
			// Empty function, autoplay handled below
		}

		$(document).ready(function () {
			$('#videoModal').on('show.bs.modal', function (e) {
			var button = $(e.relatedTarget); // Button that triggered the modal
			var videoId = button.data('video-id'); // Get video ID
			player.loadVideoById(videoId); // Load and autoplay video
			});

			$('#videoModal').on('hide.bs.modal', function () {
			player.stopVideo(); // Stop the video when modal is closed
			});
		});

// Shopping Cart
$(document).ready(function() {
	$('.minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
});

// Counting 
$(document).ready(function() {
    var counted = false;

    $(window).scroll(function() {
        var sectionOffset = $('.counting').offset().top;
        var scrollTop = $(this).scrollTop();
        var windowHeight = $(window).height();

        
        if (!counted && (scrollTop + windowHeight) > sectionOffset) {
            counted = true;
            $('.counter-value').each(function() {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 3500,
                    easing: 'swing',
                    step: function(now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }
    });
});

// Sticky
$(document).ready(function() {
    var lastScrollTop = 0;
    var navbarTop = $('.site-navbar-top');

    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();

        if (scrollTop > lastScrollTop) {
            
            navbarTop.addClass('sticky-hidden');
        } else {
            
            navbarTop.removeClass('sticky-hidden'); 
        }
        lastScrollTop = scrollTop;
    });
});