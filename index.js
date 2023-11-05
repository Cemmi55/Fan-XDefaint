const data = [
  {
    image: './assets/images/XDEF_Factions_Libertad.jpg',
  },
  {
    image: './assets/images/XDEF_Factions_Phantoms.jpg',
  },
  {
    image: './assets/images/XDEF_Factions_Echelon.jpg',
  },
  {
    image: './assets/images/XDEF_Factions_Cleaners.jpg',
  },
  {
    image: './assets/images/XDEF_Factions_DedSec.jpg',
  },
]

document.addEventListener('DOMContentLoaded', () => {
  const items = getItems(data)

  const gameStatus = 'Closed Beta'

  const gameReleaseDate = 'Coming Soon'

  const nextBtn = document.getElementById('nextBtn')
  const prevBtn = document.getElementById('prevBtn')
  const fractions = document.getElementById('fractions')
  const signupBtn = document.getElementById('signupBtn')
  const releaseDate = document.getElementById('releaseDate')
  const movableText = document.getElementById('movableText')

  releaseDate.innerHTML = 'Release Date: ' + gameReleaseDate
  signupBtn.innerHTML = 'Sign up for the ' + gameStatus + '!'
  movableText.innerHTML = 'Sign up for the ' + gameStatus + '!'

  let currentIdx = 2

  const imageWrappers = createFractions(items)

  for (let i = 0; i < imageWrappers.length; i++) {
    fractions.appendChild(imageWrappers[i])
  }

  showFraction(currentIdx)

  nextBtn.addEventListener('click', () => {
    if (currentIdx < imageWrappers.length - 1) {
      showFraction(currentIdx + 1)
      currentIdx++
    } else {
      showFraction(0)
      currentIdx = 0
    }
  })

  prevBtn.addEventListener('click', () => {
    if (currentIdx > 0) {
      showFraction(currentIdx)
      currentIdx--
    } else {
      showFraction(imageWrappers.length - 1)
      currentIdx = imageWrappers.length - 1
    }
  })

  const form = document.getElementById('newsletter_form')

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = document.getElementById('email').value
    alert(
      'Thank you for signing up! We will send you an email when the game is released.'
    )
  })
})

function createFractions(items) {
  const imageWrappers = items.map((item) => {
    const imageWrapper = document.createElement('div')
    const image = document.createElement('img')
    const name = document.createElement('h1')
    image.src = item.image
    image.alt = item.name
    imageWrapper.classList.add('hidden', 'flex', 'flex-col')
    imageWrapper.id = 'fraction'
    name.classList.add('text-2xl', 'font-bold')
    name.innerText = item.name
    imageWrapper.appendChild(image)
    imageWrapper.appendChild(name)

    return imageWrapper
  })

  return imageWrappers
}

function showFraction(idx) {
  const fractions = document.querySelectorAll('#fraction')

  fractions.forEach((fraction) => {
    fraction.classList.add('hidden')
  })

  if (idx === 0) {
    fractions[fractions.length - 1].classList.remove('hidden')
    fractions[idx].classList.remove('hidden')
    fractions[idx + 1].classList.remove('hidden')
  }

  if (idx > 0 && idx < fractions.length - 1) {
    fractions[idx - 1].classList.remove('hidden')
    fractions[idx].classList.remove('hidden')
    fractions[idx + 1].classList.remove('hidden')
  }

  if (idx === fractions.length - 1) {
    fractions[idx - 1].classList.remove('hidden')
    fractions[idx].classList.remove('hidden')
    fractions[0].classList.remove('hidden')
  }
}

function getItems(data) {
  const items = []

  for (const key in data) {
    name = data[key].image.split('_')[2].split('.')[0]
    items.push({ name, image: data[key].image })
  }

  console.log('items: ', items)

  return items
}
