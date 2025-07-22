import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import projectsData from '../data/projectsData'; // update path as needed

// Dummy coordinates for now
const coordinatesMap = {
  'Golden City': [28.123, 77.567],
  'Krishna Residency': [28.124, 77.568],
  'Shantim': [15.553, 73.838],
  'Krishna Enclave': [28.125, 77.569],
  'Mahadev Vihar': [28.126, 77.570],
  'Krishna Vihar': [28.127, 77.571],
  'Shiv Shakti Vihar (Phase 1)': [28.128, 77.572],
  'Shiv Shakti Vihar (Phase 2)': [28.129, 77.573],
};

// Define color based on status
const statusColors = {
  'Selling Fast': 'green',
  'Launching Soon': 'blue',
  'Sold Out': 'red',
};

// Custom marker icon
const getCustomIcon = (color) =>
  new L.Icon({
    iconUrl: `https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|${color}`,
    iconSize: [30, 45],
    iconAnchor: [15, 42],
    popupAnchor: [0, -40],
  });

const RealEstateMap = () => {
  return (
    <div style={{ height: '600px', width: '100%' }}>
      <MapContainer center={[28.123, 77.567]} zoom={10} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {projectsData.map((project) => {
          const coords = coordinatesMap[project.name];
          const color = statusColors[project.status] || 'gray';

          if (!coords) return null;

          return (
            <Marker
              key={project.id}
              position={coords}
              icon={getCustomIcon(color)}
            >
              <Popup>
                <strong>{project.name}</strong><br />
                {project.location}<br />
                Area: {project.area}<br />
                Status: <span style={{ color }}>{project.status}</span>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default RealEstateMap;
