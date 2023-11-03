let geocoder;
let map;

function initMap() {
    geocoder = new google.maps.Geocoder();
    const coordinates = { lat: 36.169941, lng: -115.139832};

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: coordinates,
    });

    const marker = new google.maps.Marker({
        position: coordinates,
        map: map,
    });
    
}

function getCoordinates() {
    let address = document.getElementById('address').value;
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status == 'OK') {
            map.setCenter(results[0].geometry.location);
            let marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}