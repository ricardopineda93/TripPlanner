import createMarker from './marker';

console.log('Hello from src/index.js !!!');

const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken =
  'pk.eyJ1IjoicmpqcDUyOTQiLCJhIjoiY2p2Mmo5YjVoMDZoZTRkbXBuYmtlOXp3YyJ9.Pyapm-CIAy3c-Jrpw-09bg';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705],
  zoom: 12,
  style: 'mapbox://styles/mapbox/streets-v10'
});

const marker = createMarker('hotel', [-74.009151, 40.705086]);

marker.addTo(map);

// const markerDomEl = document.createElement('div'); // Create a new, detached DIV
// markerDomEl.style.width = '32px';
// markerDomEl.style.height = '39px';
// markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';
// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map);
