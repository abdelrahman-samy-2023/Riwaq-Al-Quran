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

// Login
// Check if user is logged in
const isLoggedIn = true; // Default to true for logged-in state

if (isLoggedIn) {
	document.getElementById('loginButton').style.display = 'none'; // Hide login button
	document.getElementById('profileDropdown').style.display = 'block'; // Show profile dropdown
	document.getElementById('notificationsDropdown').style.display = 'block'; // Show notifications dropdown
	document.getElementById('shoppingCartDropdown').style.display = 'block'; // Show shopping cart dropdown
} else {
	document.getElementById('loginButton').style.display = 'block'; // Show login button
	document.getElementById('profileDropdown').style.display = 'none'; // Hide profile dropdown
	document.getElementById('notificationsDropdown').style.display = 'none'; // Hide notifications dropdown
	document.getElementById('shoppingCartDropdown').style.display = 'none'; // Hide shopping cart dropdown
}

// AOS
AOS.init();

let lastScrollTop = 0; // Variable to store the last scroll position

// Show the button when scrolling down
window.onscroll = function() {
    const scrollToTopButton = document.getElementById("scrollToTop");
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > 100) {
        scrollToTopButton.style.display = "block"; // Show the button

        // Check the scroll direction
        if (currentScrollTop > lastScrollTop) {
            scrollToTopButton.style.display = "block"; // Show the button when scrolling down
        } else {
            scrollToTopButton.style.display = "none"; // Hide the button when scrolling up
        }
    } else {
        scrollToTopButton.style.display = "none"; // Hide the button if scroll is less than 100
    }

    lastScrollTop = currentScrollTop; // Update the last scroll position
};

// Scroll to top when the button is clicked
document.getElementById("scrollToTop").onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'}); // Scroll to the top
};

// Ensure the code runs after the page has loaded
document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopButton = document.getElementById("scrollToTop");
    scrollToTopButton.style.display = "none"; // Ensure the button is hidden on page load
});