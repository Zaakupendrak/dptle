// function moveMapToBerlin(map) {
//     map.setCenter({
//         lat: 52.5159,
//         lng: 13.3777
//     });
//     map.setZoom(14);
// }

// Initialize the platform object:
var platform = new H.service.Platform({
    'apikey': '5KlKmvHyp0Hiw9wEMT8IgioXOREhA3QodWglQHHLI9U'
});

// Obtain the default map types from the platform object
var maptypes = platform.createDefaultLayers();

// Instantiate (and display) a map object:
var map = new H.Map(
    document.getElementById('mapContainer'),
    maptypes.vector.normal.map,
    {
        //center: {lat:52.1604, lng:21.0792}, //sarmacka
        // center: { lat: 52.03572718084888, lng: 21.339152642461567 }, // osieck
        center: { lat: 52.56669118620454, lng: 21.081808369992658},
        zoom: 8.5,
        pixelRatio: window.devicePixelRatio || 1
    });

function addMarkersToMap(map) {
    // default marker
    // var sarmackaMarker = new H.map.Marker({
    //     // lat: 52.5159,
    //     // lng: 13.3777
    //     lat: 52.1604,
    //     lng: 21.0792
    // });
    // // 52.1604, 21.0792
    // map.addObject(sarmackaMarker);

    var svgMarkup = '<svg  width="100" height="24" xmlns="http://www.w3.org/2000/svg">' +
        '<rect stroke="black" fill="white" x="1" y="1" width="42" height="22" />' +
        '<text x="22" y="17" font-size="12pt" font-family="Arial" font-weight="bold" ' +
        'text-anchor="middle" fill="red" >dptle</text></svg>';

    // Add the first marker
    var markupIcon = new H.map.Icon(svgMarkup),
        // svgMarkup.replace('${FILL}', 'blue').replace('${STROKE}', 'red')),
        wilanowMarker = new H.map.Marker({ lat: 52.1604, lng: 21.0792 },
            {icon: markupIcon});

    map.addObject(wilanowMarker);

    // Add the second marker.
    var cyganowkaMarker = new H.map.Marker({ lat: 51.8578, lng: 21.4082 },
            {icon: markupIcon});

    map.addObject(cyganowkaMarker);
}

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

window.onload = function() {
    addMarkersToMap(map);
}