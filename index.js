import javaScriptLogo from './assets/JSLogo.png'
import './index.css'

console.log('Hello World!')

const img = document.createElement('img')
img.src = javaScriptLogo
document.querySelector('body').append(img)