let LAT;
let LNG;





function init() {

    function initMap() {




        var myLatLng = { lat: LAT, lng: LNG };


        var options = {
            center: myLatLng,
            zoom: 15,
            disableDefaultUI: true,



        };

        let map;


        map = new google.maps.Map(document.getElementById('map'), options)


        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Hello World!'
        });

        marker.setMap(map);


    }




    if (navigator.geolocation.getCurrentPosition) {
        console.log('good');


        navigator.geolocation.getCurrentPosition(position => {
            let p = document.createElement('p');
            p.textContent = 'Latitude: ' + position.coords.latitude + ' - - - - - - Longitude: ' + position.coords.longitude;
            document.getElementById('address').appendChild(p)
            LAT = position.coords.latitude;
            LNG = position.coords.longitude;


            let url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + LAT + ',' + LNG + '&key=AIzaSyBV9z-p_6raHCutJ_e7zwQ38n0wA6ktX4c';


            fetch(url)
                .then(res => res.json())
                .then(data => {
                    let p = document.createElement('p');

                    p.textContent = data.results[0].formatted_address;
                    document.getElementById('address').appendChild(p)




                }).catch(err => console.log(err))






            initMap();





        })
    } else {
        console.log('bad')
    }


    console.log(navigator.geolocation.watchPosition)



}