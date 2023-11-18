// Initialize the map
var map = L.map('map').setView([0, 0], 13);

// Add the tile layer (map tiles from OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Fetch the current location
if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    // Create a marker and add it to the map
    L.marker([latitude, longitude]).addTo(map)
      .bindPopup('You are here!')
      .openPopup();

    // Center the map on the current location
    map.setView([latitude, longitude], 13);
  }, function(error) {
    console.log('Error getting current location:', error.message);
  });
} else {
  console.log('Geolocation is not supported by this browser.');
}