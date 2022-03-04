$(window).scroll(function () {
    let scrollTop = $(window).scrollTop();
    // viewport 값.
    let viewportTop = $(window).innerHeight();
    // offset = 선택한 요소의 좌표값 가져오는 함수
    // left : x축 좌표값, top : y축 좌표값
    let welcomeTitTop = $('.welcome__txt').offset().top;
    let listItemTop = $('.todo__list_item').offset().top;
    let rectLeftTop = $('.left_center').offset().top;
    let rectRightTop = $('.right_center').offset().top;
    if (scrollTop > welcomeTitTop) {
        $('.welcome__txt').removeClass('welcome__txt-on');
    } else {
        $('.welcome__txt').addClass('welcome__txt-on');
    }
    if (scrollTop + viewportTop > listItemTop) {
        $('.todo__list_item').addClass('todo__list_item-on');
        $('.list_check_ani').addClass('list_check_ani-on');
        $('.list_circle_ani').addClass('list_circle_ani-on');
    } else {
        $('.todo__list_item').removeClass('todo__list_item-on');
        $('.list_check_ani').removeClass('list_check_ani-on');
        $('.list_circle_ani').removeClass('list_circle_ani-on');
    }

    if (scrollTop + viewportTop > rectLeftTop) {
        $('.left_center').addClass('left_center-ani');
    } else {
        $('.left_center').removeClass('left_center-ani');
    }
    if (scrollTop + viewportTop > rectRightTop) {
        $('.right_center').addClass('right_center-ani');
    } else {
        $('.right_center').removeClass('right_center-ani');
    }
    // console.log('scrollTop :',scrollTop);
    // console.log('viewportTop :',viewportTop);
    // console.log('welcome:', welcomeTitTop);
    // console.log('listItemTop :',listItemTop);
    // console.log('rectLeftTop: ',rectLeftTop);
    // console.log('rectRightTop :',rectRightTop);
});
