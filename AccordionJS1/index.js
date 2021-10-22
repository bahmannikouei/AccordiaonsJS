const accordians = document.querySelectorAll('[data-accordian]')

for (let i = 0; i < accordians.length; i++) {
    let activeItem
    accordians[i].addEventListener('click', (event) => {
        const current = event.target
        const target = current.hasAttribute('data-collapse-able') || current.closest('[data-collapse-able]')
        if (activeItem) {
            activeItem.classList.remove('collapsed')
        }

        if (target) {
            activeItem = target
            target.classList.add('collapsed')
        }
    })

}