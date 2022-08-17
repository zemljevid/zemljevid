import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import LocationMarkerIcon from '@heroicons/react/solid/LocationMarkerIcon';
import MapIcon from '@heroicons/react/solid/MapIcon';
import ZoomOutIcon from '@heroicons/react/solid/ZoomOutIcon';
import ZoomInIcon from '@heroicons/react/solid/ZoomInIcon';

function MapControl() {
  return (
    <div className="grid grid-flow-row auto-rows-max bg-gray-50 rounded-lg shadow-md absolute top-5 right-5 divide-y">
      <button className="p-2">
        <LocationMarkerIcon className="text-gray-500 h-6 w-6" />
      </button>
      <button className="p-2">
        <MapIcon className="text-gray-500 h-6 w-6" />
      </button>
      <button className="p-2">
        <ZoomOutIcon className="text-gray-500 h-6 w-6" />
      </button>
      <button className="p-2">
        <ZoomInIcon className="text-gray-500 h-6 w-6" />
      </button>
    </div>
  );
}

export function Map() {
  return (
    <div className="flex-1 flex">
      <MapContainer
        className="flex-1 z-0"
        center={[51.505, -0.09]}
        zoom={13}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      <MapControl />
    </div>
  );
}

export default Map;
