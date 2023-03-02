import React, { useEffect } from "react";
import { useState, useCallback } from "react";

import Geocode from "react-geocode";
import OpenCageGeocode from "opencage-api-client";

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

const geoKey = "ddd32b13e2414418ba775bba9396908f";

export default function DirectionMap() {
  const [directions, setDirections] = useState(null);
  const [loading, setLoading] = useState(null);
  const [originInput, setOriginInput] = useState("");
  const [destinationInput, SetDestinationInput] = useState("");
  // const [origin, setOrigin] = useState({ lat: 39.68363, lng: -75.74546 });
  const [origin, setOrigin] = useState(null);

  const [destination, setDestination] = useState({
    lat: 39.66671,
    lng: -75.77605,
  });

  useEffect(() => {
    Geocode.setApiKey("AIzaSyB2uJKCQKkpNAJr4JBBBCwUH1CSETIEgmE");
    OpenCageGeocode.geocode({
      q: "Trabant university center",
      key: geoKey,
    }).then((response) => {
      setOrigin(response.results[0].geometry);
      console.log(response);
      setLoading(false);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const originResponse = await Geocode.fromAddress(originInput);
    const destinationResponse = await Geocode.fromAddress(destinationInput);
    const origin = originResponse.results[0].geometry.location;
    const destination = destinationResponse.results[0].geometry.location;
    console.log(destination);
    setOrigin(origin);
    setDestination(destination);
    setLoading(false);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyB2uJKCQKkpNAJr4JBBBCwUH1CSETIEgmE">
      <div>
        <form onSubmit={handleSubmit}>
          <label> Origin: </label>
          <input
            type="text"
            value={originInput}
            onChange={(e) => setOriginInput(e.target.value)}
          />

          <label>Destination:</label>
          <input
            type="text"
            value={destinationInput}
            onChange={(e) => SetDestinationInput(e.target.value)}
          />

          <button type="submit"> Get Directions</button>
        </form>

        {loading ? (
          <div>Loading</div>
        ) : (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
          >
            {origin && destination && (
              <DirectionsService
                options={{
                  destination: destination,
                  origin: origin,
                  travelMode: "DRIVING",
                  provideRouteAlternatives: true,
                }}
                callback={(response) => {
                  if (response !== null) {
                    setDirections(response);
                    console.log(response)
                  }
                }}
              />
            )}
            
            {directions && ( 
              <>
              <DirectionsRenderer
                options={{ directions: directions, routeIndex: 0 }}
              />
              <DirectionsRenderer
                options={{ directions: directions, routeIndex: 1 }}
              />
              <DirectionsRenderer
              options={{ directions: directions, routeIndex: 2 }}
              
            />
            </>
            )}
          </GoogleMap>
        )}
      </div>
    </LoadScript>
  );
}
