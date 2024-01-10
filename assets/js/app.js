// var words = ['build', 'work'];
// var currentIndex = 0;

// function animateText() {
//     var animatedText = $('#animatedText');
//     animatedText.fadeOut(500, function() {
//         animatedText.text(words[currentIndex]);
//         currentIndex = (currentIndex + 1) % words.length;
//         animatedText.fadeIn(500);
//     });
// }
// setInterval(animateText, 3000);
var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});