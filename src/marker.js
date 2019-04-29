//import { builtinModules } from 'module';
const mapboxgl = require('mapbox-gl');

const MarkersTypeImgs = {
  activity: 'url(http://i.imgur.com/WbMOfMl.png)',
  hotel: 'url(http://i.imgur.com/D9574Cu.png)',
  restaurant: 'url(http://i.imgur.com/cqR6pUI.png)'
};

function createMarker(markerType, coordinates) {
  const markerDomEl = document.createElement('div'); // Create a new, detached DIV
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';
  markerDomEl.style.backgroundImage = MarkersTypeImgs[markerType];
  return new mapboxgl.Marker(markerDomEl).setLngLat(coordinates);
}

export default createMarker;
