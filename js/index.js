$('.article4 li > div').on('mouseover mouseout', function(){
    $(this).toggleClass('on')
})


$('.article4 li > div .zoom > a:first-child').on('click', function(){
    var href = $(this).attr('href')
    var src = $(this).parent().prev().attr('src')
    console.log(src)
    $('#wrap').after(`<div class="outbox"><div class="inbox"></div></div>`)
    $('.inbox').append(`<a href="${href}" target="_blank"><img src="${src}" alt="설명문구"></a>`)
    $('.inbox').append('<button type="button">닫기</button>')
    $('.outbox').css({display:'block'})
    // $('.inbox a').attr({ href:href })
    // $('.inbox img').attr({ src:src })
    return false    
})

$('body').on('click', '.outbox button', function(){
    $('.outbox').remove()
})


$('.cs_board .tabmenu li').on('click', function(){
    $(this).addClass('active')
    .siblings().removeClass('active')
    // console.log($(this).index())
    var index = $(this).index()
    $(this).parent().next().children('div').eq(index).addClass('active')
    .siblings().removeClass('active')
})


// 슬릭슬라이더 플러그인 연결
$('.slide-group').slick({
    autoplay:true,
    autoplaySpeed:3000,
    speed:600,
    dots:true,
    prevArrow:'<button class="slick-arrow slick-prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow:'<button class="slick-arrow slick-next"><i class="fas fa-angle-right"></i></button>',
    fade:false,
    slidesToShow:1,
    slidesToScroll:1,

    // 특정조건에 반응해서 설정이 바뀌도록 함(슬라이더에 대한 반응형)
    responsive:[{
        breakpoint:769, // 바뀌는 화면너비값: 이 값 이하
        settings:{
            fade: true,
            arrows: false,
        }
    }]
})

// 슬릭슬라이더 자동재생멈춤 버튼 연결
$('.article1 .plpa').on('click', function(){
    if ( $(this).find('i').hasClass('fa-pause') ) {
        $('.slide-group').slick("slickPause")
        $(this).find('i').removeClass('fa-pause').addClass('fa-play')
    } else {
        $('.slide-group').slick("slickPlay")
        $(this).find('i').removeClass('fa-play').addClass('fa-pause')
    }
})


// product 구역의 p요소의 글자수 제한하기
$('.article4 ul li').each(function(){
    var text = $(this).find('p').text()
    var newtext = text.substr(0,40)
    if (text.length<40) {
        let count = 40 - text.length
        for (let i=0; i<count; i++) {
            text += "&nbsp; "
        }
        $(this).find('p').html(text)
    } else {
        $(this).find('p').text(newtext+'...')
    }
})

// var article2Near = $('.article2').offset().top - $(window).height()
var article4Near = $('.article4').offset().top - $(window).height()
$(window).on('scroll', function(){
    var sct = $(this).scrollTop()
    if (sct>10) {
        $('.article2').addClass('on')
    } else {
        $('.article2').removeClass('on')
    }

    if (sct > article4Near) {
        $('.article4').addClass('on')
    } else {
        $('.article4').removeClass('on')
    }

})

// 동영상 팝업박스
// - 유튜브의 공유에서 퍼가기를 누르면 iframe소스가 존재, 이를 이용
$('.cs_movie .tubewrap img').on('click', function(){
    $('body').append('<div class="youtubeVideoOuter"><div class="youtubeVideoInner"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/h7C3RyiZfYs?controls=1&amp;mute=1&amp;autoplay=1&amp;rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>')

    $('.youtubeVideoOuter').css({
        position:'fixed',
        top:0, left:0, width:'100%', paddingTop:'56.25%',
        // background:'rgba(0,0,0,0.5)',
        zIndex:999999999999
    })
    $('.youtubeVideoInner').css({
        position:'absolute',
        top:'10%', left:'20%', right:'20%', bottom:'20%'
    })

    $('.youtubeVideoInner').append('<button type="button" class="videoclose">닫기</button>')
    $('.youtubeVideoInner button').css({
        position:'absolute', top:0, right:0,
    })
})

$('body').on('click', '.youtubeVideoOuter .videoclose', function(e){
    e.preventDefault()
    $('.youtubeVideoOuter').remove()
})