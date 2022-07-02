const panels = document.querySelectorAll('.panel')
const container = document.querySelector('.container')

console.log(panels)

panels.forEach((p) => {
  p.addEventListener('click', function (e) {
    e.preventDefault()
    removeActiveClasses()
    p.classList.add('active')
  })
})
function removeActiveClasses() {
  panels.forEach((p) => {
    p.classList.remove('active')
  })
}
