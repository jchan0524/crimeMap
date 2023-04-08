//Gets the directions between two points -- takes user input of places and finds directions

// Import React and hooks from the react package
import React, { useEffect } from "react";
import { useState, useCallback } from "react";

import Geocode from "react-geocode";
import OpenCageGeocode from "opencage-api-client";
// Import geocoding libraries and the Google Maps API components from the @react-google-maps/api package
import {
  GoogleMap,
  LoadScript,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
// Define a container style for the map and a center location
const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 39.677956,
  lng: -75.7509,
};
// Define a constant variable for the OpenCageGeocode API key
const geoKey = "ddd32b13e2414418ba775bba9396908f";


// Define the main component as a default export
export default function DirectionMap() {
   // Define several state variables using the useState hook
  const [directions, setDirections] = useState(null);
  const [loading, setLoading] = useState(null);
  const [originInput, setOriginInput] = useState("");
  const [destinationInput, SetDestinationInput] = useState("");
  const [origin, setOrigin] = useState(null);
  const [buttonPushed, setButtonPushed] = useState(false);
  const [start, setStart] = useState({});
  const [end, setEnd] = useState({});

  const [destination, setDestination] = useState({
    lat: 39.66671,
    lng: -75.77605,
  });



  // Set up the useEffect hook to run once when the component mounts
  useEffect(() => {
    // Set the API key for the Geocode library
    Geocode.setApiKey("AIzaSyB2uJKCQKkpNAJr4JBBBCwUH1CSETIEgmE");
    // Geocode a default origin location using the OpenCageGeocode API
    OpenCageGeocode.geocode({
      q: "Trabant university center",
      key: geoKey,
    }).then((response) => {
      // Set the origin state variable based on the geocode response
      setOrigin(response.results[0].geometry);
      console.log(response);
      setLoading(false);
    });
  }, []);

   // Define a function to handle form submission
  const handleSubmit = async (e) => {
     // Prevent the default form submission behavior
    e.preventDefault();
    // Set the loading state variable to true
    setLoading(true);
     // Set the buttonPushed state variable to true
    setButtonPushed(true);
    // Geocode the origin and destination locations using the Geocode library
    const originResponse = await Geocode.fromAddress(originInput);
    const destinationResponse = await Geocode.fromAddress(destinationInput);
     // Extract the latitude and longitude coordinates from the geocode responses
    const origin = originResponse.results[0].geometry.location;
    const destination = destinationResponse.results[0].geometry.location;
    console.log(destination);
     // Set the origin and destination state variables based on the geocode responses
    setOrigin(origin);
    setDestination(destination);
    // Set the loading state variable to false
    setLoading(false);
  };

  // Set up another useEffect hook to run whenever the start state variable changes
  useEffect(() => {
    console.log(start);
    async function fetchData() {}
    // console.log(end);
  }, [start]);

// Render the component
  return (
    // Load the Google Maps API with the provided API key
    <LoadScript googleMapsApiKey="AIzaSyCB4V63QJ8uz0HDmMrr_KUkuz85VcbZEZU">
      <div>
        {/* Render a form to input origin and destination locations */}
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
            {origin && destination && buttonPushed && (
              <DirectionsService
                options={{
                  destination: destination,
                  origin: origin,
                  travelMode: "WALKING",
                  provideRouteAlternatives: true,
                }}
                callback={(response) => {
                  if (response !== null) {
                    setDirections(response);
                    console.log(response);
                    console.log(response.routes[0].overview_path[0]);
                    const tmpMap = response.routes[0].overview_path.map((d, index) => {
                      if (
                        response.routes[0].overview_path.length ===
                        index + 1
                      ) {
                        
                      } else {
                        // setEnd({
                        //   lat: d[
                        //     index + 1
                        //   ].lat(),
                        //   lng: d[
                        //     index + 1
                        //   ].lng(),
                        // });
                        console.log(d.lat())
                        setStart({
                          lat: d.lat(),
                          lng: d.lng(),
                        });
                       }
                    });
                    // getStart({
                    //   lat: response.routes[0].overview_path[0].lat(),
                    //   lng: response.routes[0].overview_path[0].lng(),
                    // });
                    // getEnd({
                    //   lat: response.routes[0].overview_path[1].lat(),
                    //   lng: response.routes[0].overview_path[1].lng(),
                    // });
                    setButtonPushed(false);
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
