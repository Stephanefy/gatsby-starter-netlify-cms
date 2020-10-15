import React from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet'



const LeafletMap = () => {

    if (typeof window !== "undefined") {
        return (
            <Map center={[-20.894255,55.481754]} zoom={70} style={{ width:'100%', height:'400px', zIndex:'0'}}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <Marker position={[-20.894255,55.481754]}>
    
                </Marker>    
            </Map>
        )
    }
    return null
    
}


export default LeafletMap;