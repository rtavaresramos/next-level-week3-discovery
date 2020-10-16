let setView = [-8.95739, 13.156209]

// Create map
const map = L.map('mapid').setView(setView, 15)

// Create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map)

// Create icon
const icon = L.icon({
  iconUrl: '/images/map-marker.svg',
  iconSize: [38, 48],
  iconAnchor: [29, 68],
})

let marker

// Create and Add Marker
map.on('click', (event) => {
  const lat = event.latlng.lat
  const lng = event.latlng.lng

  document.querySelector('[name=lat]').value = lat
  document.querySelector('[name=lng]').value = lng

  // Remover icon
  marker && map.removeLayer(marker)

  // Add icon layar
  marker = L.marker([lat, lng], { icon }).addTo(map)
})

// Adicionar o campo e fotos

function addPhotoField() {
  // Pegar o container de photos #images
  const container = document.querySelector('#images')
  // Pegar o container para duplicar
  const fieldsContainer = document.querySelectorAll('.new-upload')
  // Realizar o clone da última imagem adicionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true)
  // Verificar se o campo está vazio, não add se não
  const input = newFieldContainer.children[0]

  if (input.value == '') {
    return
  }
  // Limpar antes de add ao campo de imagem
  input.value = ''
  // Adicionar o clone ao container de imagens
  container.appendChild(newFieldContainer)
}

function deleteField(event) {
  const span = event.currentTarget

  const fieldsContainer = document.querySelectorAll('.new-upload')

  if (fieldsContainer.length < 2) {
    // Limpar o valor do campo
    span.parentNode.children[0].value = ''

    return
  }

  // Deletar o campo
  span.parentNode.remove()
}

// Troca do sim e do não

function toggleSelect(event) {
  // Retirar a classe active
  document
    .querySelectorAll('.button-select button')
    .forEach((button) => button.classList.remove('active'))
  // Colocar a classe active
  const button = event.currentTarget
  button.classList.add('active')
  // Atualizar o meu input hidden com o valor selecionado
  const input = document.querySelector('[name=open_on_weekends]')
  // Verificar se é sim ou não
  input.value = button.dataset.value
}

function validate(event) {}
