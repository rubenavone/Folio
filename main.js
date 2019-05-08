var hr = document.querySelectorAll("hr");

var mymap = L.map('mapid').setView([3.858252, 43.602100], 16);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    style: 'mapbox://styles/rubenterminaltor/cjvdsf5520a4q1fmadt1ghu2q',
    id: 'mapbox://styles/rubenterminaltor/cjvdsf5520a4q1fmadt1ghu2q',
    accessToken: 'pk.eyJ1IjoicnViZW50ZXJtaW5hbHRvciIsImEiOiJjanYza3dpOXowNmdvNDRtaTRvdXRuNnpuIn0.lL05KwvioOC30r7Z5sFiGw'
}).addTo(mymap);

mapboxgl.accessToken = 'pk.eyJ1IjoicnViZW50ZXJtaW5hbHRvciIsImEiOiJjanYza3dpOXowNmdvNDRtaTRvdXRuNnpuIn0.lL05KwvioOC30r7Z5sFiGw';

const map = new mapboxgl.Map({
    container: 'mapid',
    style: 'mapbox://styles/rubenterminaltor/cjvdsf5520a4q1fmadt1ghu2q',
    center: [3.858252, 43.602100],
    zoom: 16,
    pitch: 52.00
});

var marker = L.marker([3.858252, 43.602100]).addTo(mymap);