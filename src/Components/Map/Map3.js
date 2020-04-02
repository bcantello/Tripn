import React, {useContext, useState} from "react"
import {withGoogleMap, GoogleMap, Polyline} from 'react-google-maps';
import {UniversalProps} from "../../App";

function MapContainer (props){
    const universalProps = useContext(UniversalProps);

    const startLat = universalProps.directions.routes[0].legs[0].start_location.lat;
    const startLng = universalProps.directions.routes[0].legs[0].start_location.lng;
    const endLat = universalProps.directions.routes[0].legs[0].end_location.lat;
    const endLng = universalProps.directions.routes[0].legs[0].end_location.lng;
    const centerLat = (startLat + endLat) / 2;
    const centerLng = (startLng + endLng) / 2;

    const startingCoord = universalProps.directions.routes[0].legs[0].start_location;
    const endingCoord = universalProps.directions.routes[0].legs[0].end_location;

    props.coords.push(startingCoord);
    props.coords.push(endingCoord);

    console.log(props.coords);

    const GoogleMapExample = withGoogleMap(props => (
        <GoogleMap
            defaultCenter = { { lat: centerLat, lng: centerLng } }
            defaultZoom = { 11 }
            defaultOptions={{
                scaleControl: false,
                mapTypeControl: false,
                panControl: false,
                zoomControl: false,
                rotateControl: false,
                fullscreenControl: false,
                streetViewControl: false,
            }}
        >
            <Polyline
                path={props.coords}
                geodesic={true}
                options={{
                    strokeColor: "#ff2527",
                    strokeOpacity: 0.75,
                    strokeWeight: 2,
                    icons: [
                        {
                            offset: "0",
                            repeat: "20px"
                        }
                    ]
                }}
            />
        </GoogleMap>
    ));
    return(
        <div className="map" style={{ height: `40vh`, width: '100%' }}>
            <GoogleMapExample
                containerElement={ <div style={{ height: `40vh`, width: '100%' }} /> }
                mapElement={ <div style={{ height: `40vh` }} /> }
            />
        </div>
    );
}
export default MapContainer;