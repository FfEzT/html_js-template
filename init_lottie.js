// for web
let animation = bodymovin.loadAnimation(
    {
        container: ___document_element,
        rederer: 'svg',
        loop: true,
        autoplay: true,
        path: './path/'
    }
)




// for node.js
let lottie = require("lottie-web")

let animation = lottie.loadAnimation(
    {
        container: ___document_element,
        rederer: 'svg',
        loop: true,
        autoplay: true,
        path: './path/'
    }
)