let setView = [-8.95739, 13.156209]

const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollwheelZoom: false,
  zoomControl: false,
}

// Create map
const map = L.map('mapid', options).setView(setView, 15)

// Create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map)

// Create icon
const icon = L.icon({
  iconUrl: '/images/map-marker.svg',
  iconSize: [38, 48],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
})

// Create and add marker
L.marker(setView, { icon }).addTo(map)

// image galery

function selectImage(event) {
  const button = event.currentTarget

  // remover todas as classes .active
  const buttons = document.querySelectorAll('.images button')

  buttons.forEach((button) => {
    button.classList.remove('active')
  })

  // Selecionar a imagem clicada
  const image = button.children[0]
  const imageContainer = document.querySelector('.orphanage-details > img')

  // Atualizar o container de imagem
  imageContainer.src = image.src

  // Add .active class
  button.classList.add('active')
}
