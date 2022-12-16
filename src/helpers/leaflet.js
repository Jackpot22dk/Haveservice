import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Ikon
import icon from "leaflet/dist/images/marker-icon.png";
import iconshadow from "leaflet/dist/images/marker-shadow.png";

// properties til ikonet
let myIcon = L.icon({
  iconUrl: icon,
  iconSize: [24, 36],
  iconAnchor: [12, 36],
  popupAnchor: [0, -40],
  iconshadow: iconshadow,
});

let myMap, marker;

export const initMap = (coordinates) => {
  myMap = L.map("mapcontainer");

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(myMap);

  myMap.setView(coordinates, 10);
  marker = L.marker(coordinates, { icon: myIcon }).addTo(myMap);
};

export const changeMapView = (coordinates, popupInfo) => {
  marker.setLatLng(coordinates).bindPopup(popupInfo).openPopup();
  myMap.setView(coordinates, 13);
};

// Fjern kortet når component forlader (clean-up)
export const removeMap = () => {
  if (myMap) {
    myMap.off();
    myMap = null;
    // myMap.remove()
  }
};
