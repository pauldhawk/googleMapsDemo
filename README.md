# Google Map's Data Layer, and GeoJSON Demo 

## Overview 

This is a simple overview of the Google Maps API. In the demo we will  using GeoJSON format 

* Intoduce the GeoJSON format 
* Intoduce the Google Maps Data Layer
* Demo code that uses Google Maps, its Data Layer and load / update data using GeoJSON files. 

### Requirements
* Git  
https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
* Node / Npm  
https://docs.npmjs.com/getting-started/installing-node
* Google Maps JavaScript API - click get a key at
https://developers.google.com/maps/documentation/javascript/

### Running 
* Clone the Repo - on the command line type 
``` 
git clone https://github.com/pauldhawk/googleMapsDemo.git
```
* Change to the mapdemo-start branch.
```
cd googleMapsDemo
git checkout mapdemo-start
```
*  Enter your Google Maps API Key in the googleMapsDemo/public/index.html file. on Line 11 at ###put your key here### in 
```
<script async defer src="https://maps.googleapis.com/maps/api/js?key=###put your key here###&signed_in=true&callback=initMap"></script>
```
* install the node dependencies con the command line type: 
``` 
npm install 
```
* run the test server  on the command line type: 
``` 
gulp 
```
* The files we will be editing will be in the public folder. (index.html and maps.js)
* to see the finshed project checkout the mapdemo-end :
```
git checkout mapdemo-end
```
AND enter your Google Map Key in the index.html file


### Branches 
* mapdemo-start - blank template to type in code
* mapdemo-end - the Finished code3