const mainGameButtons = document.querySelectorAll('.main__game-button_o')

if (mainGameButtons) {
	mainGameButtons.forEach(button => {
		button.addEventListener('click', () => {
			const containerBody = button.closest('.game').querySelector('.game__body')

			if (containerBody.classList.contains('active')) {
				containerBody.style.maxHeight = null
				containerBody.classList.remove('active')
			} else {
				containerBody.style.maxHeight = containerBody.scrollHeight + 'px'
				containerBody.classList.add('active')
			}

			button.classList.toggle('active')
		})
	})
}


const switchButton = document.querySelector('.theme-switch')

function initialState(themeName) {
	if (switchButton) {
		if (themeName === 'light-theme') {
			switchButton.checked = false
		} else {
			switchButton.checked = true
		}	
	}
	localStorage.setItem('theme', themeName)
	document.documentElement.className = themeName
}

function initTheme() {
	if (localStorage.getItem('theme')) {
		initialState(localStorage.getItem('theme'))
		return
	}
	initialState('light-theme')
}

initTheme()

if (switchButton) {
	switchButton.addEventListener('change', () => {
		if (localStorage.getItem('theme') === 'light-theme') {
			initialState('dark-theme')
			return
		}
		initialState('light-theme')
	})
}

const sideBar = document.querySelector('.side')
const burger = document.querySelector('.header__burger')
const overlay = document.querySelector('.overlay')

if (overlay) {
	overlay.addEventListener('click', () => {
		sideBar.classList.remove('active')
		document.body.classList.remove('lock')
		overlay.classList.remove('active')
		burger.classList.remove('active')
	})
}

if (burger) {
	burger.addEventListener('click', () => {
		sideBar.classList.toggle('active')
		document.body.classList.toggle('lock')
		overlay.classList.toggle('active')
		burger.classList.toggle('active')
	})
}

