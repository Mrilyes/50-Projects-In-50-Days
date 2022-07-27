const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes() // to get the first boxes on the windows

function checkBoxes() {
  const triggerButtom = (window.innerHeight / 5) * 4
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top

    if (boxTop < triggerButtom) box.classList.add('show')
    else box.classList.remove('show')
  })
}

// checkBoxes()
