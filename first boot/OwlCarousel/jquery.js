
$('.owl-carousel').owlCarousel({
                autoplay: true,
    loop:true,
                autoplayTimeout: 1000,
                navigation: false,
                margin: 10,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 4
                    }
                }
            })