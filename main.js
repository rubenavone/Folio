mapboxgl.accessToken = 'pk.eyJ1IjoicnViZW50ZXJtaW5hbHRvciIsImEiOiJjanYza3dpOXowNmdvNDRtaTRvdXRuNnpuIn0.lL05KwvioOC30r7Z5sFiGw';
const map = new mapboxgl.Map({
    zoomControl: false,
    container: 'mapid',
    style: 'mapbox://styles/rubenterminaltor/cjvdsf5520a4q1fmadt1ghu2q',
    center: [3.858252, 43.602100],
    zoom: 16,
    pitch: 52.00
});

map.on("load", function () {
    /* Image: An image is loaded and added to the map. */
    map.loadImage("img/TROPISME_LOGO_FLECHE.png", function (error, image) {
        if (error) throw error;
        map.addImage("custom-marker", image);
        /* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
        map.addLayer({
            id: "markers",
            type: "symbol",
            /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
            source: {
                type: "geojson",
                data: {
                    type: 'FeatureCollection',
                    features: [{
                        type: 'Feature',
                        properties: {},
                        geometry: {
                            type: "Point",
                            coordinates: [3.8587, 43.602]
                        }
                    }]
                }
            },
            layout: {
                "icon-image": "custom-marker",
            }
        });
    });
});
map.on('click', function (e) {
    var features = map.queryRenderedFeatures(e.point, {
        layers: ['layer-name-here'] // replace this with the name of the layer
    });

    if (!features.length) {
        return;
    }

    var feature = features[0];

    var popup = new mapboxgl.Popup({
            offset: [0, -15]
        })
        .setLngLat(feature.geometry.coordinates)
        .setHTML('<h3>' + feature.properties.title + '</h3><p>' + feature.properties.description + '</p>')
        .setLngLat(feature.geometry.coordinates)
        .addTo(map);
})