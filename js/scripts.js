        
    $('.button-video').on('click', function () {
        $('.modal.video').addClass('ativo');
    });
    $('.close').on('click', function () {
        $('.modal.ativo').removeClass('ativo');
    });

    var $doc = $('html, body');

    $('.menu-topo a').click(function() {
        $doc.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        console.log();
        return false;
    });