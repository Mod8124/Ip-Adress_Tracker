let search = '';
let lat = 32.779167;
let lng = 	-96.808891;


//use the map
function mapaa(la = lat, ln = lng) {
    var mymap = L.map('mapid').setView([la,  ln], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
   maxZoom: 18,
   id: 'mapbox/streets-v11',
   tileSize: 512,
   zoomOffset: -1,
   accessToken: 'pk.eyJ1IjoiZGVuaXMtMTIiLCJhIjoiY2t0bjI5Y3h3MXB5czJucGRodmJlbDB1eCJ9.q-ToPrTO30Mp0qaO6Jxt9w'
}).addTo(mymap);

document.getElementById('mapid').style.visibility= 'visible';
document.getElementById('mapid').style.height= '65vh';
document.getElementById('mapidd').style.visibility= 'hidden';
document.getElementById('mapidd').style.height= '0vh';

var marker = L.marker([la, ln]).addTo(mymap);

};

//get the value from form
function submitLoginForm(event){
    event.preventDefault();

    console.log(event.target['search'].value);
    search += event.target['search'].value;

  (function place(place = search) {

    fetch(`https://geo.ipify.org/api/v1?apiKey=at_HNIMCVVOAVltX0HtHXxo9HAjO46Io&ipAddress=${place}`)
    .then(x => x.json())
     .then(y => {
         document.getElementById('adrress').innerHTML = y.ip;
          document.getElementById('infoLocation').innerHTML = y.location.city +'(' + y.location.region +', <br>'+y.location.country+')';
         document.getElementById('timezone').innerHTML = y.location.timezone;
         document.getElementById('isp').innerHTML = y.isp;

          mapaa(y.location.lat, y.location.lng);
     })

  })();
}


//form event

formSearch.addEventListener('focus', () => {
    event.target.placeholder = '192.212.174.101'});

formSearch.addEventListener('blur', () => {
    event.target.placeholder = 'Search for any IP address or domain';
});

const hola = (e) => {
    console.log(e);
}

//default map
 mymap2 = L.map('mapidd').setView([lat,  lng], 15);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
   maxZoom: 18,
   id: 'mapbox/streets-v11',
   tileSize: 512,
   zoomOffset: -1,
   accessToken: 'pk.eyJ1IjoiZGVuaXMtMTIiLCJhIjoiY2t0bjI5Y3h3MXB5czJucGRodmJlbDB1eCJ9.q-ToPrTO30Mp0qaO6Jxt9w'
}).addTo(mymap2);

var marker = L.marker([lat, lng]).addTo(mymap2);


