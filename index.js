

function iniciarMap() {
    var coord = {lat:11.9501461 ,lng:-77.0738486};
    var map = new goole.maps.Map(document.getElementById('map'),{
        zoom: 4,
        center: coord
    });
    var marker = new goole.maps.marker({
        position : coord,
        map: map
    });
}