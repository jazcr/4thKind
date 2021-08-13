//Creating map variable
let map;

function initMap() {

    //Map variable that will start centered at Denver and a zoom of 8
    //Styling the map to be dark mode
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 39.7392, lng: -104.9903 },
        zoom: 8,
        styles: [
            { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
            {
                featureType: "administrative.locality",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{ color: "#263c3f" }],
            },
            {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{ color: "#6b9a76" }],
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#38414e" }],
            },
            {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{ color: "#212a37" }],
            },
            {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{ color: "#9ca5b3" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#746855" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#1f2835" }],
            },
            {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{ color: "#f3d19c" }],
            },
            {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{ color: "#2f3948" }],
            },
            {
                featureType: "transit.station",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#17263c" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#515c6d" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#17263c" }],
            },
        ],
    });

    //Creating variable for marker icon and turning into an alien
    let icon = {
        url: "https://findicons.com/files/icons/476/space/48/alien.png",

    };

    //Create pinpoints when user clicks on map
    google.maps.event.addListener(map, 'click', function (event) {
        //Getting longitude and latitude of area clicked on
        addMarker({ coords: event.latLng });
      //  saveMarker(event);

    });


    //Creating an array to hold the pinpoints
    let pinpoints = [
        {
            coords: { lat: 39.7392, lng: -104.9903 },

        }, 
    ];


    //For loop to loop through pinpoints
    for (var i = 0; i < pinpoints.length; i++) {
        //Add pinpoints 
        addMarker(pinpoints[i]);
    }




    //Adding marker
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            animation: google.maps.Animation.DROP,
            icon: icon,

        });

        if (props.content) {
            let infoWindow = new google.maps.infoWindow({
                content: props.content,
            });

            marker.addListener('click', function () {
                infoWindow.open(map, marker);
            });

         map.data.add(new google.maps.data.Feature({properties:{}, geometry:new google.maps.Data.pinpoints(location)}));
          

        }

    }
}