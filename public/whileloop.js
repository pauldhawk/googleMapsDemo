var g = [ 'http://localhost:3000/geojson/0.geo.json',
'http://localhost:3000/geojson/1.geo.json',
'http://localhost:3000/geojson/2.geo.json',
'http://localhost:3000/geojson/3.geo.json',
'http://localhost:3000/geojson/4.geo.json',
'http://localhost:3000/geojson/5.geo.json',
'http://localhost:3000/geojson/6.geo.json',
'http://localhost:3000/geojson/7.geo.json',
'http://localhost:3000/geojson/8.geo.json',
'http://localhost:3000/geojson/9.geo.json',
];

(function myLoop (i) {
   setTimeout(function () {
      map.data.loadGeoJson(g[i]);        //  your code here
      if (--i) myLoop(i);      //  decrement i and call myLoop again if i > 0
  }, 500)
})(9);
