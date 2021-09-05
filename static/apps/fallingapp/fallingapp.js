window.onload = () => {

function fallingElementsApp(items, interval, duration) {
	const stage = document.getElementById('fallingapp')
	const stageWidth = window.innerWidth
	const stageHeight = window.innerHeight

	function fallingElement() {
		const text = items[Math.floor(Math.random() * items.length)]
		const randomEntry = Math.ceil(Math.random() * stageWidth)

		let el = document.createElement('div')

		function configureElement(el) {
			el.id = 'flake-' + randomEntry
			el.className = 'fontFlake'
			el.style.left = randomEntry + 'px'
			el.style.fontSize = Math.ceil(Math.random() * 32) + 15 + 'px'
			let elText = document.createTextNode(text)
			el.appendChild(elText)

			stage.appendChild(el)
		}

		function animateElement(el) {
			el.animate(
				{
					top: ['-50px', stageHeight + 'px'],
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

fallingElementsApp(items, 600, 10000)

}
