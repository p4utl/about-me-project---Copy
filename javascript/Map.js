let geocoder;
let map;
let marker;

function initMap() {
    //geocoder is what allows us to search with the API, instead of just showing us the map
    geocoder = new google.maps.Geocoder();
    // default coordrinates are set for Las Vegas, NV. 
    const coordinates = { lat: 36.169941, lng: -115.139832};

    map = new google.maps.Map(document.getElementById("map"), {
        //the zoom is on 13, so we are zoomed in enough but not too close to the specified coordinates
        zoom: 13,
        // we want to center in on the coordinates
        center: coordinates,
    });
// this will allow us to have a marker
    marker = new google.maps.Marker({
        position: coordinates,
        map: map,
    });
    
}

function getCoordinates() {
    // this is the text we inputted in our text box to search within the map
    let address = document.getElementById('address').value;
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status == 'OK') {
            // If status is OK, set the result location in the center and add the marker

                map.setCenter(results[0].geometry.location);
                // this will help clear the multiple markers
                    if(marker != null) {
                        marker.setMap(null)
                    }
                    marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location
            });
        } else {
            // if status is not ok, relay this message of why it wasn't successful
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

