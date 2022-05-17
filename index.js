'use strict';

const regions = [
    {
        coords: [41.26465, 69.21627] ,
        content:'<h3>Ташкент</h3><p>Населениe: 5,632.2 млн людей</p>'
    },
    {
        coords:[40.781099, 72.343324],
        content:'<h3>Андижан</h3><p>Населениe: 3,172.3 млн людей</p>'
    },
    {
         coords: [40.38421, 71.78432],
         content:'<h3>Фергана</h3><p>Населениe: 3,803.0 млн людей</p>'
    },
    {
         coords:[40.9983, 71.67257],
         content:'<h3>Наманган</h3><p>Населениe: 2,852.6 млн людей</p>'
    },
    {
         coords: [40.11583, 67.84222],
         content:'<h3>Джиззах</h3><p>Населениe: 1,403.2 млн людей</p>'
    },
    {
        coords:[39.65417, 66.95972],
        content:'<h3>Самарканд</h3><p>Населениe: 3,928.6 млн людей</p>'
    },
    {
        coords:[38.83333, 66.083333],
        content:'<h3>Кашкадарья</h3><p>Населениe: 3,317.8 млн людей</p>'
    },
    {
        coords:[38.0, 67.499998],
        content:'<h3>Сурхфндарья</h3><p>Населениe: 2,667.1 млн людей</p>'
    },
    {
        coords: [40.08444, 65.37917],
        content:'<h3>Навоий</h3><p>Населениe: 1,009.2 млн людей</p>'
    },
    {
        coords: [39.77472, 64.42861],
        content:'<h3>Бухара</h3><p>Населениe: 1,939.6 млн людей</p>'
    },
    {
        coords:[41.333332, 61.0],
        content:'<h3>Хоразм</h3><p>Населениe: 1,884.0 млн людей</p>'
    },
    {
        coords:[40.84361, 68.66167],
        content:'<h3>Сирдарья</h3><p>Населениe: 857.1 тыс людей</p>'
    },
    {
        coords:[43.166666, 58.749997],
        content:'<h3>Каракалпакистан</h3><p>Населениe: 1 916 400 людей</p>'
    }

];

class RegionInfo {
    #map;

    constructor(regions) {
        this.regions = regions;
        this.#loadMap();
        this.#renderMarker(this.regions);
    }

    #loadMap() {
        this.#map = L.map('map').setView([41.381166, 64.5735819],6);

         L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         }).addTo(this.#map);
    }

    #renderMarker(regions) {
        regions.forEach(reg =>  
            L.marker(reg.coords).addTo(this.#map)
        .bindPopup(L.popup({
            maxwidth: 250,
            minwidth: 100,
            autoClose: false,
            closeOnClick: true,
            className: '',
        })).setPopupContent(`${reg.content}`)
        // .openPopup()
        )
    }
}

new RegionInfo(regions);