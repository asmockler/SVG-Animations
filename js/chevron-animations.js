window.onload = function() {

    var animationSpeed = $('#animation-speed').val();
    $('#set-animation-speed').on('click', function(){
        animationSpeed = $('#animation-speed').val();
        $('.alert-content').html('Animation speed set to <strong>' + animationSpeed + '</strong>')
        $('.toaster').fadeIn(300, function(){
            $('.close, .much-alert').on('click', function(){
                $('.toaster').fadeOut(300);
            });
        });
    });

    // ##### Flip Animation #####

    var flip = new Raphael(document.getElementById('flip-over'), 50, 50);
    var chevronFlip = flip.path('M 5 15 l 20 20 l 20 -20');
    chevronFlip.attr({
        'stroke-linejoin': 'round',
        'stroke-width': 2
    });

    flipDownToUp = function (el) {

        el.animate({
            path: 'M 5 35 l 20 -20 l 20 20'
        }, animationSpeed, '<<>>');

        $('#flip-over').attr('down', 'false');
    },

    flipUpToDown = function (el) {

        el.animate({
            path: 'M 5 15 l 20 20 l 20 -20'
        }, animationSpeed, '<<>>');

        $('#flip-over').attr('down', 'true');
    },

    $('#flip-over').click(function(){
        if ( $(this).attr('down') == "true" ){
            flipDownToUp(chevronFlip);
        } else {
            flipUpToDown(chevronFlip);
        }
    });


    // ##### Fan In Out 1 #####

    var fanInOut = new Raphael(document.getElementById('fan-in-out'), 50, 50);
    var chevronFanInOut = fanInOut.path('M 5 15 l 20 20 l 20 -20');
    chevronFanInOut.attr({
        'stroke-linejoin': 'round',
        'stroke-width': 2
    });

    fanDownToUp = function(el) {
        el.animate({
            path: 'M 25 15 l 0 20 l 0 -20'
        }, animationSpeed*.4, '<>', function(){
            el.animate({
                path: 'M 25 35 l 0 -20 l 0 20'
            }, animationSpeed*.2, '<>', function(){
                el.animate({
                    path: 'M 5 35 l 20 -20 l 20 20'
                }, animationSpeed*.4, '<>');
            });
        });
    },

    fanUpToDown = function(el){
        el.animate({
            path: 'M 25 35 l 0 -20 l 0 20'
        }, animationSpeed*.45, '<>', function(){
            el.animate({
                path: 'M 25 15 l 0 20 l 0 -20'
            }, animationSpeed*.1, '<>', function(){
                el.animate({
                    path: 'M 5 15 l 20 20 l 20 -20'
                }, animationSpeed*.45, '<>');
            });
        });
    },

    $('#fan-in-out').click(function(){
        if ( $(this).attr('down') == 'true' ){
            fanDownToUp(chevronFanInOut);
            $(this).attr('down', 'false');
        } else {
            fanUpToDown(chevronFanInOut);
            $(this).attr('down', 'true');
        }
    });

    // ##### Fan In Out 2 #####

    var fanInOut2 = new Raphael(document.getElementById('fan-in-out-2'), 50, 50);
    var chevronFanInOut2 = fanInOut2.path('M 5 15 l 20 20 l 20 -20');
    chevronFanInOut2.attr({
        'stroke-linejoin': 'round',
        'stroke-width': 2
    });

    fanDownToUp2 = function(el){
        el.animate({
            path: 'M 25 35 l 0 -20 l 0 20'
        }, animationSpeed*.5, '<>', function(){
            el.animate({
                path: 'M 5 35 l 20 -20 l 20 20'
            }, animationSpeed*.5, '<>');
        });
    },

    fanUpToDown2 = function(el) {
        el.animate({
            path: 'M 25 15 l 0 20 l 0 -20'
        }, animationSpeed*.5, '<>', function(){
            el.animate({
                path: 'M 5 15 l 20 20 l 20 -20'
            }, animationSpeed*.5, '<>');
        });
    },

    $('#fan-in-out-2').click(function(){
        if ( $(this).attr('down') == 'true' ){
            fanDownToUp2(chevronFanInOut2);
            $(this).attr('down', 'false');
        } else {
            fanUpToDown2(chevronFanInOut2);
            $(this).attr('down', 'true');
        }
    });

    // ##### Fan In Out 3 #####
    var fanInOut3 = new Raphael(document.getElementById('fan-in-out-3'), 50, 50);
    var chevronFanInOut3 = fanInOut3.path('M 5 15 l 20 20 l 20 -20');
    chevronFanInOut3.attr({
        'stroke-linejoin': 'round',
        'stroke-width': 2,
        'stroke-linecap': 'round'
    });

    fanDownToUp3 = function(el) {
        el.animate({
            path: 'M 25 15 l 0 20 l 0 -20'
        }, animationSpeed*.5, '<>', function(){
            el.animate({
                path: 'M 25 35 l 0 -20 l 0 20'
            }, 0, '<>', function(){
                el.animate({
                    path: 'M 5 35 l 20 -20 l 20 20'
                }, animationSpeed*.5, '<>')
            });
        });
    },

    fanUpToDown3 = function(el) {
        el.animate({
            path: 'M 25 35 l 0 -20 l 0 20'
        }, animationSpeed*.5, '<>', function(){
            el.animate({
                path: 'M 25 15 l 0 20 l 0 -20'
            }, 0 , '<>', function(){
                el.animate({
                    path: 'M 5 15 l 20 20 l 20 -20'
                }, animationSpeed*.5, '<>');
            });
        });
    },

    $('#fan-in-out-3').click(function(){
        if ( $(this).attr('down') == 'true' ){
            fanDownToUp3(chevronFanInOut3);
            $(this).attr('down', 'false');
        } else {
            fanUpToDown3(chevronFanInOut3);
            $(this).attr('down', 'true');
        }
    });

    // ##### Fan In Out 4 #####
    var fanInOut4 = new Raphael(document.getElementById('fan-in-out-4'), 50, 50);
    var chevronFanInOut4 = fanInOut4.path('M 5 15 l 20 20 l 20 -20');
    chevronFanInOut4.attr({
        'stroke-linejoin': 'round',
        'stroke-width': 2,
        'stroke-linecap': 'round'
    });

    fanDownToUp4 = function(el){
        el.animate({
            path: 'M 23 15 l 2 20 l 2 -20'
        }, animationSpeed*.5, '<>', function(){
            el.animate({
                path: 'M 5 35 l 20 -20 l 20 20'
            }, animationSpeed*.5, '<>')
        });
    },

    fanUpToDown4 = function(el){
        el.animate({
            path: 'M 23 35 l 2 -20 l 2 20'
        }, animationSpeed*.5, '<>', function(){
            el.animate({
                path: 'M 5 15 l 20 20 l 20 -20'
            }, animationSpeed*.5, '<>');
        });
    },

    $('#fan-in-out-4').click(function(){
        if ( $(this).attr('down') == 'true' ){
            fanDownToUp4(chevronFanInOut4);
            $(this).attr('down', 'false');
        } else {
            fanUpToDown4(chevronFanInOut4);
            $(this).attr('down', 'true');
        }
    });

    // ##### MENU 1 #####

    var menu1 = new Raphael('menu1', 50, 50);
    var menu1Path = menu1.path("M 5 15 l 40 0 M 5 25 l 40 0 M 5 35 l 40 0").attr({
                        'stroke-linejoin': 'round',
                        'stroke-width': 2,
                        'stroke-linecap': 'round'
                    });

    menu1AnimateOpen = function(el){
        el.animate({
            path: 'M 10 10 l 30 30 M 10 40 l 30 -30',
            transform: 'R180'
        }, animationSpeed, '<>');
    },

    menu1AnimateClose = function(el){
        el.animate({
            path: 'M 5 15 l 40 0 M 5 25 l 40 0 M 5 35 l 40 0',
            transform: 'R0'
        }, animationSpeed, '<>');
    },

    $('#menu1').click(function(){
        if ( $(this).attr('data-menu-open') == 'false' ){
            menu1AnimateOpen(menu1Path);
            $(this).attr('data-menu-open', 'asdklfj');
        } else {
            menu1AnimateClose(menu1Path);
            $(this).attr('data-menu-open', 'false');
        }
    });

    // ##### MENU 2 #####

    var menu2 = new Raphael('menu2', 50, 50);
    var menu2Path = menu2.path("M 5 15 l 40 0 M 5 25 l 40 0 M 5 35 l 40 0").attr({
                        'stroke-linejoin': 'round',
                        'stroke-width': 2,
                        'stroke-linecap': 'round'
                    });

    menu2AnimateOpen = function(el){
        el.animate({
            path: 'M 25, 10 l 0 30 M 25, 10 l 0 30 M 25, 10 l 0 30'
        }, animationSpeed*.5, '<>', function() {
            el.animate({
                path: 'M 25, 10 l 0 30 M 25, 10 l 0 30',
            }, 0, '<>', function(){
                el.animate({
                    path: 'M 10 40 l 30 -30 M 10 10 l 30 30',
                }, animationSpeed*.5, '<>')
            });
        });
    },

    menu2AnimateClose = function(el){
        el.animate({
            path: 'M 5 15 l 40 0 M 5 25 l 40 0 M 5 35 l 40 0'
        }, animationSpeed*.5, '<>');
    },

    $('#menu2').click(function(){
        if ( $(this).attr('data-menu-open') == 'false' ){
            menu2AnimateOpen(menu2Path);
            $(this).attr('data-menu-open', 'asdklfj');
        } else {
            menu2AnimateClose(menu2Path);
            $(this).attr('data-menu-open', 'false');
        }
    });    

    // $('button').on('click', function(){

    //     if ( $('#fan-in-out-3').attr('down') == 'true' ){
    //         fanDownToUp3(chevronFanInOut3);
    //         $('#fan-in-out-3').attr('down', 'false');
    //     } else {
    //         fanUpToDown3(chevronFanInOut3);
    //         $('#fan-in-out-3').attr('down', 'true');
    //     }

    //     if ( $('#flip-over').attr('down') == "true" ){
    //         flipDownToUp(chevronFlip);
    //     } else {
    //         flipUpToDown(chevronFlip);
    //     }

    //     if ( $('#fan-in-out').attr('down') == 'true' ){
    //         fanDownToUp(chevronFanInOut);
    //         $('#fan-in-out').attr('down', 'false');
    //     } else {
    //         fanUpToDown(chevronFanInOut);
    //         $('#fan-in-out').attr('down', 'true');
    //     }

    //     if ( $('#fan-in-out-2').attr('down') == 'true' ){
    //         fanDownToUp2(chevronFanInOut2);
    //         $('#fan-in-out-2').attr('down', 'false');
    //     } else {
    //         fanUpToDown2(chevronFanInOut2);
    //         $('#fan-in-out-2').attr('down', 'true');
    //     }

    //     if ( $('#fan-in-out-4').attr('down') == 'true' ){
    //         fanDownToUp4(chevronFanInOut4);
    //         $('#fan-in-out-4').attr('down', 'false');
    //     } else {
    //         fanUpToDown4(chevronFanInOut4);
    //         $('#fan-in-out-4').attr('down', 'true');
    //     }
    // });

};