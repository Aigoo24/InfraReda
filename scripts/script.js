document.getElementById('burger').onclick = function () {
    document.getElementById('menu').classList.add('open')
}

document.querySelectorAll('#menu *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('menu').classList.remove('open')
    }
})


$('#main').click(function (){
        $('.main')[0].scrollIntoView({behavior: "smooth"})
    }
);

$('#advantage').click(function (){
        $('.advantages')[0].scrollIntoView({behavior: "smooth"})
    }
);

$('#work').click(function (){
        $('.operation')[0].scrollIntoView({behavior: "smooth"})
    }
);

$('#technical').click(function (){
        $('.documentation')[0].scrollIntoView({behavior: "smooth"})
    }
);

$('#production').click(function (){
        $('.video')[0].scrollIntoView({behavior: "smooth"})
    }
);

$('#object').click(function (){
        $('.object')[0].scrollIntoView({behavior: "smooth"})
    }
);

$('#contacts').click(function (){
        $('.footer')[0].scrollIntoView({behavior: "smooth"})
    }
);

let currentlyOpen = null;

$('.useful-info-item').each(function() {
    const $this = $(this);
    const $text = $this.find('.useful-text');
    const $open = $this.find('.open');
    const $close = $this.find('.close');

    $open.click(function() {
        if (currentlyOpen) {
            currentlyOpen.find('.useful-text').slideUp();
            currentlyOpen.find('.close').hide();
            currentlyOpen.find('.open').show();
        }
        currentlyOpen = $this;
        $text.slideDown();
        $open.hide();
        $close.show();
    });

    $close.click(function() {
        $text.slideUp();
        $close.hide();
        $open.show();
        currentlyOpen = null;
    });

    // Открываем первый элемент при загрузке страницы
    if ($this.is(':first-child')) {
        $text.show();
        $open.hide();
        $close.show();
        currentlyOpen = $this;
    }
});



$('.input-phone').inputmask({"mask": "9(999)-999-99-99" });

