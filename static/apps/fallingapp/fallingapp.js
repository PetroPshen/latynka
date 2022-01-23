import {words} from './words.js'

window.onload = () => { 

	function fallingElementsApp(items, interval, duration) {
		const stage = document.getElementById('fallingapp')

		function fallingElement() {
			const text = items[Math.floor(Math.random() * items.length)]
			const randomEntry = Math.ceil(Math.random() * (window.innerWidth - 120))

			let el = document.createElement('div')

			function configureElement(el) {
				el.id = 'flake-' + randomEntry
				el.className = 'fontFlake'
				el.style.left = randomEntry + 'px'
				el.style.fontSize = Math.ceil(Math.random() * 25) + 20 + 'px'
				let elText = document.createTextNode(text)
				el.appendChild(elText)

				stage.appendChild(el)
			}

			function animateElement(el) {
				el.animate(
					{
						top: ['-50px', window.innerHeight + 'px'],
						opacity: [1, 0.5],
					},
					{
						duration: duration,
						fill: 'forwards',
					}
				)
			}

			function removeElement(el) {
				el.parentNode.removeChild(el)
			}

			function runElementAnimation(el) {
				configureElement(el)
				animateElement(el)
				setTimeout(removeElement, duration, el)
			}

			runElementAnimation(el)
		}

		setInterval(fallingElement, interval, items)
	}

	fallingElementsApp(words, 600, 10000)

}
