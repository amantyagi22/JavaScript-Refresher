const heading = document.querySelector('#heading')
const button = document.querySelector('#textChange')
// console.log(heading.innerHTML);
button.addEventListener('click', () => {
    setTimeout(() => {
        heading.innerHTML = 'RENDER WORKSHOP'
    }, 3000)
})

