
let map = L.map('bertenMap').setView([51.30283557127617, 4.5071455838575725], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let bounds = [[51.30283300758279, 4.506996596455965], [51.30294324626803, 4.507226228414407], [51.30286120820191, 4.507323275253985], [51.30274498735723, 4.507097743866231]];

let poly = L.polygon(bounds, { color: "#e60005", weight: 1 }).addTo(map);


let apMarker = L.marker([51.30283557127617, 4.5071455838575725]).addTo(map);
apMarker.bindPopup("<b>Berten Van Denhaute</b><br>Rerum Novarumlei 38").openPopup();


map.fitBounds(poly.getBounds());