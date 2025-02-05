var map = L.map("map").setView([40.65506624106309, -3.7678462939625565], 14);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var marker = L.marker([40.65506624106309, -3.7678462939625565]).addTo(map);
marker.bindPopup("<b>hola a todo el mundo</b><br>Esta es mi casa.").openPopup();


var marker2 = L.marker([40.643, -3.7678462939625565]).addTo(map);

var circle = L.circle([40.662322, -3.772656], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(map);

var polygon = L.polygon([
  [40.662322, -3.772656],
  [40.662322, -2.772656],
  [41.662322, -3.772656]
]).addTo(map);


marker.bindPopup("<b>hola a todo el mundo</b><br>Esta es mi casa.").openPopup();
marker.bindPopup(`<a href = "https://www.google.com/">ir a la web<a/>`)
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

var popup = L.popup()
    .setLatLng([40.662322, -3.772656])
    .setContent("Hallo.")
    .openOn(map);