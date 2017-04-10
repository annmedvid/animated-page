const header = document.querySelector(".home")
const slogan = document.querySelector(".slogan")
const show = document.querySelector(".show")
const scrolldown = document.querySelector(".scrolldown")

TweenMax.from(header, 1, {autoAlpha: 0, y: 50, ease: SlowMo.ease.config(1, 1, false), delay: 2})
TweenMax.from(slogan, 1, {autoAlpha: 0, y: 50, delay: 3})
TweenMax.from(show, 1, {autoAlpha: 0, y: 50, delay: 4})
TweenMax.from(scrolldown, 1, {autoAlpha: 0, y: 50, delay: 5})
