$(function(){

    window.onscroll = function(){
        scrollFunction();
        // scrollForImage();
    }
    
    function scrollFunction(){
        if(document.body.scrollTop >80 || document.documentElement.scrollTop>80)
        {
            document.getElementById("navbar").style.opacity = '0.9';
            document.getElementById("arrow").style.display = 'block';
        }else{
            document.getElementById("navbar").style.opacity = '1';
            document.getElementById("arrow").style.display = 'none';

        }
    }

    // nav-link colored when click 
    $(document).on("click", ".nav-link", function() {
        $(".nav-link").not(this).css('color' , '');
        $(this).css('color', '#fec544');
    });
    
// animation of the image when hover //
    $("#Portfolio_Image").hover(
        function(){
            $(this).css({
                'right': '0%',
                'transition': 'right 0.7s ease'
            });
            $("#welcome-section-social-links").css({
                'right': '40%',
                'transition': 'right 0.7s ease'
            })
        },
        function(){
            $(this).css({
                'right': '-10%',
                'transition': 'right 0.7s ease'
            });
            $("#welcome-section-social-links").css({
                'right': '30%',
                'transition': 'right 0.7s ease'
            })
        }
    );

// animation of the social links when hover //
    $(".dribble-link").hover(function(){
        $(".dribble").css({
            'display':'inline',
            'transition': 'display 2s ease'
        })
    } , function(){
        $(".dribble").css({
            'display':'none',
            'transition': 'display 2s ease'
        })
    })

    $(".behance-link").hover(function(){
        $(".behance").css({
            'display':'inline',
            'transition': 'display 2s ease'
        })
    } , function(){
        $(".behance").css({
            'display':'none',
            'transition': 'display 2s ease'
        })
    })

    $(".twitter-link").hover(function(){
        $(".twitter").css({
            'display':'inline',
            'transition': 'display 2s ease'
        })
    } , function(){
        $(".twitter").css({
            'display':'none',
            'transition': 'display 2s ease'
        })
    })

    $(".linkedin-link").hover(function(){
        $(".linkedin").css({
            'display':'inline',
            'transition': 'display 2s ease'
        })
    } , function(){
        $(".linkedin").css({
            'display':'none',
            'transition': 'display 2s ease'
        })
    })
    // color:#fec544;
    // service card //
    $(".service-card").hover(
        function(){
            // $(this).child().child()
            $(this).children().children().css({
                'filter' : 'grayscale(0%)',
                'transition': 'all 0.2s ease'
            })
            $(this).find('h4').css({
                'color' : '#fec544',
                'transition': 'all 0.2s ease'
            })
        } , 
        function(){
            $(this).children().children().css({
                'filter' : 'grayscale(100%)',
                'transition': 'all 0.2s ease'
            })
            $(this).find('h4').css({
                'color' : '#a9adb8',
                'transition': 'all 0.2s ease'
            })
        })

        //load More
        $("#loadMore").click(function(){
            $(".portfolio-card").slideToggle();
            var buttonText = $("#loadMore").text();
            
            if (buttonText === "Load More") {
                $("#loadMore").text("Show Less");
            } else {
                $("#loadMore").text("Load More");
            }
        });
      
        // contact-info hover
        $(".contact-info table tr").hover(
            function(){
                $(this).find('div').css({
                    'border': '1px solid #fec544',
                    'transition': 'all 0.2s ease'
                })
            } , 
            function(){
                $(this).find('div').css({
                    'border': '1px solid #fdfeff',
                    'transition': 'all 0.2s ease'
                })
            })

            // Light-Mode
            $('input[type="checkbox"]').on('change', function() {
                // Toggle the classes in dark-light-mode
                // body
                $('.background').toggleClass('checked', this.checked);

                // arrow
                $('.arrow').toggleClass('arrow-checked', this.checked);

                // Welcome Section
                $('.welcome-section').toggleClass('welcome-section-checked', this.checked);
                $('.navbar').toggleClass('nav-light-mode', this.checked);
                $('.navbar-nav .nav-item a').toggleClass('nav-item-light-mode', this.checked);
                $('.welcome-text-light-mode').toggleClass('nav-item-light-mode', this.checked);
                $('.welcome-img .social').toggleClass('social-light-mode', this.checked);
                $('.welcome-img .social i').toggleClass('social-icons-light-mode', this.checked);
                $('.welcome-img .social span').toggleClass('social-icons-light-mode', this.checked);
                $('.welcome-img .social .social-link a ').toggleClass('social-link-light-mode', this.checked);

                // About Me Section
                $('.aboutMe-behind').toggleClass('aboutMe-behind-light-mode', this.checked);
                $('.aboutMe-above').toggleClass('aboutMe-above-light-mode', this.checked);
                $('.aboutMeLightMode').toggleClass('aboutMe-above-light-mode', this.checked);
                $('.aboutMe-Info p').toggleClass('aboutMe-above-light-mode', this.checked);
                $('.aboutMe-Info h5').toggleClass('aboutMe-title-light-mode', this.checked);
                $('.aboutMe-Info table').toggleClass('aboutMe-above-light-mode', this.checked);

                // Service Section
                $('.service-card').toggleClass('service-card-light-mode', this.checked);
                $('.service-card h4').toggleClass('service-card-info-light-mode', this.checked);
                $('.service-card p').toggleClass('service-card-info-light-mode', this.checked);
               
                // Skills Section
                $('.resume-behind').toggleClass('aboutMe-behind-light-mode', this.checked);
                $('.resume-above').toggleClass('aboutMe-above-light-mode', this.checked);
                $('.skills-background').toggleClass('skills-background-light-mode', this.checked);
                $('.skills-container h4').toggleClass('skills-container-headers-light-mode', this.checked);
                $('.skills-container h5').toggleClass('skills-container-headers-light-mode', this.checked);
                $('.skills-container p').toggleClass('skills-container-parag-light-mode', this.checked);

                // Resume Section
                $('.resume-background').toggleClass('resume-background-light-mode', this.checked);
                $('.change-color').toggleClass('change-color-light-mode', this.checked);
                $('.timeline-name').toggleClass('resume-timeLine-light-mode', this.checked);
                $('.timeline-details').toggleClass('resume-timeLine-details-light-mode', this.checked);
                $('.timeline .date').toggleClass('resume-timeLine-details-light-mode', this.checked);

                // Portfolio Section
                $('.portfolio-behind').toggleClass('aboutMe-behind-light-mode', this.checked);
                $('.portfolio-above').toggleClass('aboutMe-above-light-mode', this.checked);

                // Review Section
                $('.section-behind').toggleClass('aboutMe-behind-light-mode', this.checked);
                $('.section-above').toggleClass('aboutMe-above-light-mode', this.checked);
                $('#review').toggleClass('review-bg-light-mode', this.checked);
                $('.client-quote').toggleClass('client-quote-light-mode', this.checked);
                $('.client-quote p').toggleClass('client-quote-details-light-mode', this.checked);
                $('.rotate1').toggleClass('rotate-light-mode', this.checked);
                $('.client-name').toggleClass('client-name-light-mode', this.checked);
                $('.client-position').toggleClass('client-position-light-mode' , this.checked);

                // Blog Section 
                $('.blog-title').toggleClass('blog-title-light-mode', this.checked);
                $('.blog-details').toggleClass('blog-details-light-mode', this.checked);

                // Contact Section
                $('.contact-title').toggleClass('blog-title-light-mode', this.checked);
                $('.contact-details').toggleClass('contact-details-light-mode', this.checked);
                $('.input-light-mode').toggleClass('contact-form-input-light-mode', this.checked);
                $('.form-label').toggleClass('form-label-light-mode', this.checked);
                $('.contact-info-icon-container').toggleClass('contact-info-icon-container-light-mode', this.checked);
                $('.social-container').toggleClass('contact-info-icon-container-light-mode', this.checked);
                $('.social-container span').toggleClass('contact-social-link-span-light-mode', this.checked);

                // Footer Section
                $('footer').toggleClass('footer-light-mode' , this.checked)
            });
    
})


