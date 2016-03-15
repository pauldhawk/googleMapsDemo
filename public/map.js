var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: {
            lat:  41.876756,
            lng:  -87.619701
        }
    });
    map.data.loadGeoJson('http://localhost:3000/geojson/static.geo.json');
    map.data.setStyle(styleFeature);
}

function styleFeature(feature) {
    var shape = feature.getGeometry().getType();

    switch (shape) {
        case 'Point':
            var isA = feature.getProperty('is_a');
            return stylePoint(isA);
        case 'LineString':
            return {
                strokeColor: 'grey',
                strokeOpacity: 0.8,
                strokeWeight: 2
            };
        default:
            return {
                visible: true
            };
    }
}

function stylePoint(isA) {
    var color = '';

    switch (isA) {
        case 'drone':
            color = 'blue';
            break;
        case 'drop_site':
            color = 'green';
            break;
        case 'base_station':
            color = 'black';
            break;
        default:
            color = 'yellow';
            break;
    }

    return {
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            strokeWeight: 0.5,
            strokeColor: color,
            fillColor: color,
            fillOpacity: 0.8,
            scale: 10
        }
    };
}
