$(".owl-carousel").owlCarousel(
    {
        loop:true,
        autoplay: true,
        autoplayTimeout: 5000,
        nav:true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        margin:45,
        dots:true,
        
        responsive: {
            1:{
                items:1
            },
            320:{
                items:1
            },

            568:{
                items:1
            },
            
            600:{
                items:2
            },
            1000:{
                items:3
            }
    }
}
);
