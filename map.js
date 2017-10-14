var locations = [
    [
        "Bob Wright Centre",
        48.462306,
         -123.308916
    ],
    [
    		"David Turpin Building",
       48.464946, -123.314587
    ],
    
    [
    	"Buisness and Economics Building",
      48.465225, -123.312443
    ],
    [
    	"Elliot Building",
      48.462644, -123.309832
    ],
]

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: new google.maps.LatLng(48.463649,  -123.311951),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

var cnt = 0;

function counting() {
cnt++;
alert(cnt);

}

google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]+"   "+locations [i][1]+"   "+ locations [i][2]+"   "+cnt++);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
