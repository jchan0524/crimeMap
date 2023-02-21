import React from "react";
import { useState, useCallback } from "react";

import {
  GoogleMap,
  LoadScript,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 39.677956,
  lng: -75.7509,
};


export default function DirectionMap() {
  const [directions, setDirections] = useState(null);
  const [origin, setOrigin] = useState({ lat: 39.68363, lng: -75.74546 });
  const [destination, setDestination] = useState({
    lat: 39.66671,
    lng: -75.77605,
  });

  const directionsCallback = useCallback((response) => {
    if (response !== null) {
      setDirections(response);
    }
  }, []);
  const handleOriginChange = (e) => {
    
    let value = parseFloat(e.target.value);
    if(isNaN(value) === true){
        value = 0; 
    }
    setOrigin((prevOrigin) => ({
      ...prevOrigin,
      [e.target.name]: value,
    }));
  };
  const handleDestinationChange = (e) => {
    let value = parseFloat(e.target.value);
    if(isNaN(value) === true){
        value = 0; 
    }
    setDestination((prevDestination) => ({
      ...prevDestination,
      [e.target.name]: value,
    }));
  };

  const handleGetDirections = (e) => {
    e.preventDefault();
    setDirections(null);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyB2uJKCQKkpNAJr4JBBBCwUH1CSETIEgmE">

      <form onSubmit={handleGetDirections}>
        <div>
          <label htmlFor="origin-lat">Origin Latitude: </label>
          <input
            type="text"
            id="origin-lat"
            name="lat"
            value={origin.lat}
            onChange={handleOriginChange}
          />

          <label htmlFor="origin-lng">Origin Longitude:</label>
          <input
            type="text"
            id="origin-lng"
            name="lng"
            value={origin.lng}
            onChange={handleOriginChange}
          />
        </div>
        <div>
          <label htmlFor="destination-lat">Destination Latitude:</label>
          <input
            type="text"
            id="destination-lat"
            name="lat"
            value={destination.lat}
            onChange={handleDestinationChange}
          />
          <label htmlFor="destination-lng">Destination Longitude:</label>
          <input
            type="text"
            id="destination-lng"
            name="lng"
            value={destination.lng}
            onChange={handleDestinationChange}
          />
        </div>
        <button onClick={handleGetDirections}>Get Directions</button>
      </form>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {directions && <DirectionsRenderer directions={directions} />}
        {directions === null && (
        <DirectionsService
          options={{
            destination: destination,
            origin: origin,
            travelMode: "DRIVING",
          }}
          callback={directionsCallback}
        />
        )}

      </GoogleMap>
    </LoadScript>
  );
}
