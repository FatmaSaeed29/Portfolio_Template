$(function () {
    // change navbar color from transparent to dark on scroll
    $(window).scroll(function () {
        scrollFunction();
    });

    function scrollFunction() {
        if ($(document).scrollTop() > 80) {
            $("#blog-navbar").css({
                'backgroundColor': '#080e1e',
                'transition': 'background-color 0.3s'
            });
        } else {
            $("#blog-navbar").css({
                'backgroundColor': 'transparent',
                'transition': 'background-color 0.3s' 
            });
        }
        
    }

    $('input[type="checkbox"]').on('change', function() {
        // Toggle the classes in dark-light-mode
        $('.blog-body').toggleClass('blog-body-light-mode', this.checked);
        $('.blog-header').toggleClass('blog-header-light-mode', this.checked);
        $('p').toggleClass('blog-header-light-mode', this.checked);
        $('i').toggleClass('blog-header-light-mode', this.checked);
        $('.input-light-mode').toggleClass('contact-form-input-light-mode', this.checked);
        $('.form-label').toggleClass('form-label-light-mode', this.checked);
        $('footer').toggleClass('footer-light-mode' , this.checked)
        $('.quote-line').toggleClass('footer-light-mode' , this.checked)
        $('.btn-change-mode').toggleClass('btn-change-light-mode' , this.checked) 
        $('hr').toggleClass('hr-light-mode' , this.checked) 
       
    });
});
