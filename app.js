import $ from 'jquery';
import {gsap} from 'gsap';
// console.log("good");
$('body').css('background-color','black');
gsap.to('.box',{
    x:100,
    y:200,
    rotation: 360,
    repeat:4,
})