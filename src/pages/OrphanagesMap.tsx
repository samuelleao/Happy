import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Rio Grande do Norte</strong>
                    <span>Natal</span>
                </footer>
            </aside>

            <div className="map">
            <Map
                center={[-5.799919, -35.2222442]}
                zoom={12}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            </Map>
            <Link to='/' className='create-orphanage'>
                <FiPlus size={32} color="#fff" />
            </Link>
            </div>
        </div>
    )
}

export default OrphanagesMap;