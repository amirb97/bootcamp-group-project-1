var map, map2, map3, map4, map5;
var service;
var userLat;
var userLong;

function initMap() {
  var city = new google.maps.LatLng(35.6448,-120.6935);

  map = new google.maps.Map(document.getElementById('map'), {
      center: city,
      zoom: 18
    });
  
  map2 = new google.maps.Map(document.getElementById('map2'), {
      center: city,
      zoom: 18
    });

  map3 = new google.maps.Map(document.getElementById('map3'), {
      center: city,
      zoom: 18
    });
  
  map4 = new google.maps.Map(document.getElementById('map4'), {
      center: city,
      zoom: 18
    });

  map5 = new google.maps.Map(document.getElementById('map5'), {
      center: city,
      zoom: 18
    });

  var request = {
    location: city,
    radius: '50',
    query: 'hiking trail'
  };

  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      console.log(results[i]);
    }

    map.setCenter(results[0].geometry.location);
    map2.setCenter(results[1].geometry.location);
    map3.setCenter(results[2].geometry.location);
    map4.setCenter(results[3].geometry.location);
    map5.setCenter(results[4].geometry.location);
  }
}

$('#btn').click(function() {
  console.log("Clicked!");
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode( { 'address': '2927 spring st, paso robles'}, function(results, status) {
    if(status == google.maps.GeocoderStatus.OK) {
      alert('location : ' + results[0].geometry.location.lat() + " " + results[0].geometry.location.lng());
      userLat = results[0].geometry.location.lat();
      userLong = results[0].geometry.location.lng();
    } else {
      alert("something went wrong " + status);
    }
  });
});