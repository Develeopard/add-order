
let tl = new gsap.timeline({defaults: {ease: Circ.easeOut}})

let module = document.querySelector('.module');
let cart = document.querySelectorAll('.add-cart');
let truck = document.querySelector('.truck');

console.log(cart);
let lottie = document.querySelectorAll('.lottie')
let lottieTruck = document.querySelector('#lottie-truck')

const circleType = new CircleType(document.getElementById('order'))
circleType.radius(100).dir(-1)
// const circleType = window.getComputedStyle(truck, '::after').style.color = 'red'


// cart.forEach(crt => {
//     if(crt.classList.contains('clicked')){
//         crt.addEventListener('click', (e) => {
//             e.target.currentTime = 0;
//             e.target.classList.remove('clicked')
//             console.log('dadada');
//         })
//     }else{
//         crt.addEventListener('click', (e) => {
//             e.target.play()
//             e.target.classList.add('clicked')
//         })
//     }
// })

cart.forEach(crt => {
    crt.addEventListener('click', (e) => {
        e.target.classList.toggle('clicked');
        if(e.target.classList.contains('clicked')){
            // e.target.pause();
            // e.target.currentTime = 0;
            // e.target.load();
            e.target.play()
            console.log('poipoi')
        }else{
            e.target.frames = 0;
            console.log('blala');
        }
    })
})

truck.addEventListener('click', () => {
    lottieTruck.play();
    setTimeout(() => {
        module.classList.add('show-module')
    }, 3000)
})

module.addEventListener('click', () => {
    module.classList.remove('show-module')
})
