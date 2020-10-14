let setView = [-8.95739, 13.156209]

// Create map
const map = L.map('mapid').setView(setView, 15);

// Create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

// Create icon
const icon = L.icon({
  iconUrl: './public/images/map-marker.svg',
  iconSize: [38, 48],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
})

// Create popup overlay
const popup = L.popup({
  closeButton: false,
  className: 'map-popup',
  minWidth: 240,
  minHeight: 240,
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"></a>')

// Create and add marker
L
.marker(setView, {icon})
.addTo(map)
.bindPopup(popup)