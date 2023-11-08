
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
const Map = () => {
    const position = [29.379206, 79.463019]
    return (
        <div id="map"  style={{ height: "70vh", width: "100%" }}>
            <MapContainer style={{ width: "100%", height: "65vh" }} center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        My Location
                    </Popup>
                </Marker>
            </MapContainer>,
        </div>

    )
}

export default Map