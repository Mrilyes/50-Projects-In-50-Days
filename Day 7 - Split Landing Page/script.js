const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

left.addEventListener('mouseenter', (e) => {
  e.preventDefault()
  container.classList.add('hover-left')
})

left.addEventListener('mouseleave', (e) => {
  e.preventDefault()
  container.classList.remove('hover-left')
})

right.addEventListener('mouseenter', (e) => {
  e.preventDefault()
  container.classList.add('hover-right')
})

right.addEventListener('mouseleave', (e) => {
  e.preventDefault()
  container.classList.remove('hover-right')
})
