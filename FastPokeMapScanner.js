//
//To use with fastpokemap.com
//add script hit run and type in console "startRunner();"
//to stop "stopRunner();" to resume "startRunner();"
//to reset and start again from a new point "resetRunner();" and then "startRunner();" again
//
var RefreshRateInSeconds = 1; // update every [value] seconds
var i = 0;
var showInConsole = true;
var siteMarkerLat = window.marker.getLatLng().lat;
var siteMarkerLng = window.marker.getLatLng().lng;
var scanNorth   = setInterval(north(), RefreshRateInSeconds * 1000);
var scanNorthEast   = setInterval(northEast(), RefreshRateInSeconds * 1000);
var scanNorthWest   = setInterval(nortWest(), RefreshRateInSeconds * 1000);
var scanSouth   = setInterval(south(), RefreshRateInSeconds * 1000);
var scanSouthEast   = setInterval(southEast(), RefreshRateInSeconds * 1000);
var scanSouthWest   = setInterval(southWest(), RefreshRateInSeconds * 1000);
var scanEast    = setInterval(east(), RefreshRateInSeconds * 1000);
var scanWest    = setInterval(west(), RefreshRateInSeconds * 1000);
var iIncreament   = setInterval(iIncreamentFunction(),RefreshRateInSeconds * 1000);

//Functions
function iIncreamentFunction() {
         i+=0.0001;
}

function north() {
        let lat = siteMarkerLat + i;
        let lng = siteMarkerLng;
        getPokemon(lat,lng);
        if(showInConsole === true){
        console.log("north function: " + lat + " | " + lng);
    }
}

function northEast() {
        let lat = siteMarkerLat + i;
        let lng = siteMarkerLng + i;
        getPokemon(lat,lng);
        if(showInConsole === true){
        console.log("northEast function: " + lat + " | " + lng);
    }
}

function northWest() {
        let lat = siteMarkerLat + i;
        let lng = siteMarkerLng - i;
        getPokemon(lat,lng);
        if(showInConsole === true){
        console.log("northWest function: " + lat + " | " + lng);
    }

}

function south() {
        let lat = siteMarkerLat - i;
        let lng = siteMarkerLng;
        getPokemon(lat,lng);
        if(showInConsole === true){
        console.log("south function: " + lat + " | " + lng);
    }
}

function southEast() {
        let lat = siteMarkerLat - i;
        let lng = siteMarkerLng + i;
        getPokemon(lat,lng);
        if(showInConsole === true){
        console.log("southEast function: " + lat + " | " + lng);
    }
}

function southWest() {
        let lat = siteMarkerLat - i;
        let lng = siteMarkerLng - i;
        getPokemon(lat,lng);
        if(showInConsole === true){
        console.log("southWest function: " + lat + " | " + lng);
    }
}

function east() {
        let lat = siteMarkerLat;
        let lng = siteMarkerLng + i;
        getPokemon(lat,lng);
        if(showInConsole === true){
        console.log("east function: " + lat + " | " + lng);
    }
}

function west() {
        let lat = siteMarkerLat;
        let lng = siteMarkerLng - i;
        getPokemon(lat,lng);
        if(showInConsole === true){
        console.log("west function: " + lat + " | " + lng);
    }
}

function stopRunner() {
        window.clearInterval(scanNorth);
        window.clearInterval(scanSouth);
        window.clearInterval(scanEast);
        window.clearInterval(scanWest);
}

function startRunner() {
        scanNorth   = setInterval(north, RefreshRateInSeconds * 1000);
        scanSouth   = setInterval(south, RefreshRateInSeconds * 1000);
        scanEast    = setInterval(east, RefreshRateInSeconds * 1000);
        scanWest    = setInterval(west, RefreshRateInSeconds * 1000);
        iIncreament   = setInterval(iIncreamentFunction,RefreshRateInSeconds * 1000);
}

function resetRunner() {
         siteMarkerLat = window.marker.getLatLng().lat;
         siteMarkerLng = window.marker.getLatLng().lng;
         i = 0;
         console.log("Reset succsed , current marker lat : " + siteMarkerLat + "    current marker lng: " + siteMarkerLng);
}
