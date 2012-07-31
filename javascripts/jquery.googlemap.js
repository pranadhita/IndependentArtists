/*
  Small plugin to make google maps easier to implement
  OPTIONS
  ----------------------------------------------------------------------------
  markers : JSON array E.g. [{latitude: '-25.363882', longitude: '131.044922',title: 'Australia',draggable: true},{latitude: '-22.363882', longitude: '133.044922',title: 'Australia',draggable: true}]
            DEFAULT = []
  longitude: default longitude when the map first loads
             DEFAULT = 131.044922
  latitude: default longitude when the map first loads
            DEFAULT = -25.363882
  address: default address, This overrides the default longitude and latitude
           DEFAULT = ""
  zoom: default zoom of the map
        DEFAULT = 4
  ----------------------------------------------------------------------------
*/
$(document).ready(function() {
  $(".googlemap").gMap()
});

(function($) {
  $.fn.gMap = function(options) {
    var options = $.extend({}, $.fn.gMap.defaults, options);
    var geocoder        = new google.maps.Geocoder();
    var defaultLat      = options.latitude
    var defaultLon      = options.longitude
    var defaultZoom     = options.zoom
    var defaultAddress  = options.address
    var myLatlng

    if ( defaultLat.length == 0 ) {
      defaultLat  = "-25.363882"
      defaultZoom = 4
    }

    if ( defaultLon.length == 0 ) {
      defaultLon  = "131.044922"
      defaultZoom = 4
    }

    this.each(function(index,item) {
      defaultAddress  = options.address

      if ( defaultAddress.length == 0 ) {
        var address   = $(this).find(".address").html()
        var suburb    = $(this).find(".suburb").html()
        var postcode  = $(this).find(".postcode").html()
        var state     = $(this).find(".state").html()
        var country   = $(this).find(".country").html()
        
        if ( country ) {
          if ( country.length > 0 ) defaultAddress = country + ' ' + defaultAddress
        }
        if ( state ) {
          if ( state.length > 0 ) defaultAddress = state + ' ' + defaultAddress
        }
        if ( postcode ) {
          if ( postcode.length > 0 ) defaultAddress = postcode + ' ' + defaultAddress
        }
        if ( suburb ) {
          if ( suburb.length > 0 ) defaultAddress = suburb + ' ' + defaultAddress
        }
        if ( address ) {
          if ( address.length > 0 ) defaultAddress = address + ' ' + defaultAddress
        }
      }

      var myLatlng = new google.maps.LatLng(defaultLat,defaultLon);

      var myOptions = {
        zoom: defaultZoom,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      var map = new google.maps.Map(item, myOptions);

      for (var i = 0; i < options.markers.length; i++) {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(options.markers[i].latitude,options.markers[i].longitude), 
            map: map,
            title: options.markers[i].title,
            draggable: options.markers[i].draggable
        });
      }

      if ( defaultAddress.length > 0 ) {
        geocoder.geocode({ 'address': defaultAddress, 'partialmatch': true}, function(results, status) { 
          if (status == 'OK' && results.length > 0) {
            myLatlng = results[0].geometry.location
            map.setCenter(myLatlng)
            map.setZoom(14)

            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(myLatlng.lat(),myLatlng.lng()), 
                map: map,
                title: defaultAddress,
                draggable: false
            });
          }
        });
      }
    });
  }

  $.fn.gMap.defaults = {latitude: '', longitude: '', markers: [], address: '', zoom: 4}
})(jQuery);