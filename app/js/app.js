let headerHam = document.getElementsByClassName("header__ham");
let menu = document.getElementsByClassName("menu");
if(headerHam.length&&menu.length){
    headerHam[0].addEventListener(`click`, function () {
        if(this.classList.contains(`active`)){
            this.classList.remove(`active`)
            menu[0].classList.remove(`active`)
        } else {
            this.classList.add(`active`)
            menu[0].classList.add(`active`)
        }
    });
}

var scene;
window.onload = function() {
    if(document.querySelector('.body__horisontal')!=null&&window.innerWidth>1650){
        let controller = new ScrollMagic.Controller();
        let wipeAnimation = new TimelineMax()
            .fromTo(".horisontal-wrapper", 1, {x: "0px"}, {x: "-90%", ease: Linear.easeNone})  // in from left
        scene = new ScrollMagic.Scene({
            triggerElement: ".body__horisontal",
            triggerHook: "onLeave",
            duration: "1000%"
        })
            .setPin(".body__horisontal")
            .setTween(wipeAnimation)
            .addTo(controller);

        lax.setup();

        const updateLax = () => {
            lax.update(window.scrollY)
            window.requestAnimationFrame(updateLax)
        }

        window.requestAnimationFrame(updateLax)
    }

    let floatingBlock1 = document.querySelector('.floating-block_type_1'),
        floatingBlock2 = document.querySelector('.floating-block_type_2'),
        floatingBlock3 = document.querySelector('.floating-block_type_3'),
        floatingBlock4 = document.querySelector('.floating-block_type_4'),
        floatingBlock5 = document.querySelector('.floating-block_type_5'),
        floatingBlock6 = document.querySelector('.floating-block_type_6'),
        floatingBlock7 = document.querySelector('.floating-block_type_7'),
        floatingBlock8 = document.querySelector('.floating-block_type_8'),
        floatingBlock9 = document.querySelector('.floating-block_type_9'),
        floatingBlock10 = document.querySelector('.floating-block_type_10'),
        floatingBlock11 = document.querySelector('.floating-block_type_11'),
        floatingBlock12 = document.querySelector('.floating-block_type_12'),
        floatingBlock13 = document.querySelector('.floating-block_type_13'),
        floatingBlock14 = document.querySelector('.floating-block_type_14'),
        floatingBlock15 = document.querySelector('.floating-block_type_15'),
        floatingBlock16 = document.querySelector('.floating-block_type_16'),
        floatingBlock17 = document.querySelector('.floating-block_type_17'),
        floatingBlock18 = document.querySelector('.floating-block_type_18'),
        floatingBlock19 = document.querySelector('.floating-block_type_19'),
        floatingBlock20 = document.querySelector('.floating-block_type_20');

    let block01 = document.querySelector('.floating-block_01'),
        block02 = document.querySelector('.floating-block_02'),
        block03 = document.querySelector('.floating-block_03'),
        block04 = document.querySelector('.floating-block_04'),
        block05 = document.querySelector('.floating-block_05');

    let title01 = [], title02 = [], title03 = [], title04 = [], title05 = [];
    if(document.querySelector('.block_type_1')!=null){
        title01.push(document.querySelector('.block_type_1').querySelector('.title__subtitle'));
        title01.push(document.querySelector('.block_type_1').querySelector('.title__title'));
    }
    if(document.querySelector('.block_type_2')!=null){
        title02.push(document.querySelector('.block_type_2').querySelector('.title__subtitle'));
        title02.push(document.querySelector('.block_type_2').querySelector('.title__title'));
    }
    if(document.querySelector('.block_type_3')!=null){
        title03.push(document.querySelector('.block_type_3').querySelector('.title__subtitle'));
        title03.push(document.querySelector('.block_type_3').querySelector('.title__title'));
    }
    if(document.querySelector('.block_type_4')!=null){
        title04.push(document.querySelector('.block_type_4').querySelector('.title__subtitle'));
        title04.push(document.querySelector('.block_type_4').querySelector('.title__title'));
    }
    if(document.querySelector('.block_type_5')!=null){
        title05.push(document.querySelector('.block_type_5').querySelector('.title__subtitle'));
        title05.push(document.querySelector('.block_type_5').querySelector('.title__title'));
    }

    let images1, images2, images3, images4, images5;
    if(document.querySelector('.block__images_type_1')!=null){
        images1 = document.querySelector('.block__images_type_1').querySelectorAll('.block__img');
    }
    if(document.querySelector('.block__images_type_2')!=null){
        images2 = document.querySelector('.block__images_type_2').querySelectorAll('.block__img');
    }
    if(document.querySelector('.block__images_type_3')!=null){
        images3 = document.querySelector('.block__images_type_3').querySelectorAll('.block__img');
    }
    if(document.querySelector('.block__images_type_4')!=null){
        images4 = document.querySelector('.block__images_type_4').querySelectorAll('.block__img');
    }
    if(document.querySelector('.block__images_type_5')!=null){
        images5 = document.querySelector('.block__images_type_5').querySelectorAll('.block__img');
    }

    let accordion = document.querySelector('.accordion');
    if(typeof simpleParallax !=="undefined"){
        new simpleParallax(floatingBlock1, {
            overflow: true,
            orientation: `up left`
        }).handleResize();

        new simpleParallax(floatingBlock2, {
            overflow: true,
            orientation: 'right'
        }).handleResize();

        new simpleParallax(floatingBlock4, {
            overflow: true,
            orientation: 'left'
        }).handleResize();

        new simpleParallax(floatingBlock5, {
            overflow: true,
            orientation: 'left'
        }).handleResize();

        new simpleParallax(floatingBlock7, {
            overflow: true,
            orientation: 'down'
        }).handleResize();

        new simpleParallax(floatingBlock8, {
            overflow: true,
            orientation: 'down right'
        }).handleResize();

        new simpleParallax(floatingBlock9, {
            overflow: true,
            orientation: 'left'
        }).handleResize();

        new simpleParallax(floatingBlock10, {
            overflow: true,
            orientation: 'left'
        }).handleResize();

        new simpleParallax(floatingBlock11, {
            overflow: true,
            orientation: 'left'
        }).handleResize();

        new simpleParallax(floatingBlock12, {
            overflow: true,
            orientation: 'left'
        }).handleResize();

        new simpleParallax(floatingBlock13, {
            overflow: true,
            orientation: 'left'
        }).handleResize();

        new simpleParallax(floatingBlock14, {
            overflow: true,
            orientation: 'right'
        }).handleResize();

        new simpleParallax(floatingBlock15, {
            overflow: true,
            orientation: 'up left'
        }).handleResize();

        new simpleParallax(floatingBlock16, {
            overflow: true,
            orientation: 'down left'
        }).handleResize();

        new simpleParallax(floatingBlock17, {
            overflow: true,
            orientation: 'down right'
        }).handleResize();

        new simpleParallax(floatingBlock18, {
            overflow: true,
            orientation: 'down'
        }).handleResize();

        new simpleParallax(floatingBlock19, {
            overflow: true,
            orientation: 'down left'
        }).handleResize();

        new simpleParallax(block01, {
            overflow: true,
            orientation: 'down left'
        }).handleResize();
        new simpleParallax(block02, {
            overflow: true,
            orientation: 'down right'
        }).handleResize();
        new simpleParallax(block03, {
            overflow: true,
            orientation: 'left'
        }).handleResize();
        new simpleParallax(block04, {
            overflow: true,
            orientation: 'up left'
        }).handleResize();
        new simpleParallax(block04, {
            overflow: true,
            orientation: 'up right'
        }).handleResize();

        new simpleParallax(images1[0], {
            overflow: true,
            orientation: 'left'
        }).handleResize();
        new simpleParallax(images1[1], {
            overflow: true,
            orientation: 'up right'
        }).handleResize();
        new simpleParallax(images2[0], {
            overflow: true,
            orientation: 'down right',
            maxTransition: 60
        }).handleResize();
        new simpleParallax(images3[0], {
            overflow: true,
            orientation: 'up right',
            maxTransition: 60
        }).handleResize();
        new simpleParallax(images4[0], {
            overflow: true,
            orientation: 'down',
            maxTransition: 60
        }).handleResize();
        new simpleParallax(images5[0], {
            overflow: true,
            orientation: 'down right',
            maxTransition: 60
        }).handleResize();
        new simpleParallax(images5[1], {
            overflow: true,
            orientation: 'down left',
            maxTransition: 60
        }).handleResize();

        new simpleParallax(title01[0], {
            overflow: true,
            orientation: 'left'
        }).handleResize();
        new simpleParallax(title01[1], {
            overflow: true,
            orientation: 'left'
        }).handleResize();

        new simpleParallax(title02[0], {
            overflow: true,
            orientation: 'left'
        }).handleResize();
        new simpleParallax(title02[1], {
            overflow: true,
            orientation: 'left'
        }).handleResize();

        new simpleParallax(title03[0], {
            overflow: true,
            orientation: 'left'
        }).handleResize();
        new simpleParallax(title03[1], {
            overflow: true,
            orientation: 'left'
        }).handleResize();

        new simpleParallax(title04[0], {
            overflow: true,
            orientation: 'left'
        }).handleResize();
        new simpleParallax(title04[1], {
            overflow: true,
            orientation: 'left'
        }).handleResize();

        new simpleParallax(title05[0], {
            overflow: true,
            orientation: 'left'
        }).handleResize();
        new simpleParallax(title05[1], {
            overflow: true,
            orientation: 'left'
        }).handleResize();

        new simpleParallax(accordion, {
            overflow: true,
            orientation: 'left'
        }).handleResize();
    }
}

let krest = document.querySelector('.header__krest'),
    share = document.querySelector('.header__share'),
    social = document.querySelectorAll('.header__social');

krest.onclick = () => {
    krest.classList.toggle('header__krest_active');
    share.classList.toggle('header__share_active');
    for (var i = social.length - 1; i >= 0; i--) {
        social[i].classList.toggle('header__social_active');
    }
}