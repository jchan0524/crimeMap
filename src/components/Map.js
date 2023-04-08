//Displays all of the markers and takes a user input to filter the amount of markers the user wants to see

import React from "react";
import {
  GoogleMap,
  MarkerF,
  useJsApiLoader,
  InfoWindow,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useEffect, useState } from "react";

// Set container size for map
const containerStyle = {
  width: "500px",
  height: "750px",
};

// Set initial center, origin, and destination coordinates
const center = {
  lat: 39.677956,
  lng: -75.7509,
};
const origin = {
  lat: 39.68363,
  lng: -75.74546,
};

const destination = {
  lat: 39.66671,
  lng: -75.77605,
};

export default function Map(props) {
  // Load Google Maps API
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB2uJKCQKkpNAJr4JBBBCwUH1CSETIEgmE",
  });

  // Initialize state variables
  const [map, setMap] = useState(null);
  const [data, setData] = useState([]);
  const [coors, setCoors] = useState();
  const [selectedMarker, setSelectedMarker] = useState();
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  const [test, setTest] = useState();
  const [token, setToken] = useState(
    "IVBDcEovRGtzL0RhOUdrUFdjaDZuQ0E9PT9nQVdWRVFBQUFBQUFBQUNNQjNWelpYSmZhV1NVakFFeGxJYVVMZz09"
  );
  const [directions, setDirections] = useState(null);
  const [num, setNum] = useState(0);

  // Handle DirectionsService callback
  const directionsCallback = React.useCallback((response) => {
    if (response !== null) {
      setDirections(response);
    }
  }, []);

   // Handle map load event
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  // Handle map unload event
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  // Handle number input change for filtering incidents
  const handleNumberChange = (e) => {
    let value = parseInt(e.target.value);
    if (isNaN(value) === true) {
      value = data.length;
    }
    setNum(value);
  };

  useEffect(() => {
    console.log(props);

    fetch(
      `https://crimemap.hopto.org/get/incidents?token=IVBDcEovRGtzL0RhOUdrUFdjaDZuQ0E9PT9nQVdWRVFBQUFBQUFBQUNNQjNWelpYSmZhV1NVakFFeGxJYVVMZz09`
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  // Fetch data and filter by number of incidents
  const handleFilterNumberChange = () => {
    let len = data.length - num;

    if (data.data) {
      fetch(
        `https://crimemap.hopto.org/get/incidents?filter=(entry_id=${num})&token=${token}`
      )
        .then((response) => response.json())
        .then((json) => {
          setTest(json);
          console.log(json);
        })
        .catch((error) => console.error(error));
    }

    // Display filtered data on map
    return test ? (


      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={() => onMapClicked()}
      >
        <MarkerF
          key={test.data.entry_id}
          onClick={() => onMarkerClick(test)}
          position={{ lat: test.data.latitude, lng: test.data.longitude }}
        />
      </GoogleMap>
      
    ) : ("no data available")
  };
  useEffect(() => {
    console.log("hello", test);
  }, [test]);

  // Handle marker click event
  const onMarkerClick = (e) => {
    setSelectedMarker(e);
    console.log(e.description);
    console.log("hello", showInfoWindow);
    setShowInfoWindow(true);
  };
  // Handle map click event
  const onMapClicked = () => {
    setShowInfoWindow(false);
    console.log("false", showInfoWindow);
  };
// Set coordinate data for incidents
  useEffect(() => {
    if (data.data) {
      data.data.map((d) => {
        const newCoors = {
          lat: d.latitude,
          lng: d.longitude,
        };
        setCoors(newCoors);
      });
      console.log(data);
    }
  }, [data]);

  return isLoaded ? (
    <>
      <div>
        <label htmlFor="num-change">Filter last entries: </label>
        <input
          type="text"
          id="num-change"
          name="count"
          value={num.count}
          onChange={handleNumberChange}
        />
      </div>
      <button onClick={handleFilterNumberChange}>Get Directions</button>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={() => onMapClicked()}
      >
        
        {/* Child components, such as markers, info windows, etc. */}

        {data.data ? (
          <>
            {data.data.map((marker) => {
              return (
                <MarkerF
                  key={marker.entry_id}
                  onClick={() => onMarkerClick(marker)}
                  position={{ lat: marker.latitude, lng: marker.longitude }}
                />
              );
            })}
          </>
        ) : (
          "no data avalible"
        )}
        {/* Display info window when marker is clicked */}
        {showInfoWindow ? (
          <>
            <InfoWindow
              position={{
                lat: selectedMarker.latitude,
                lng: selectedMarker.longitude,
              }}
              onCloseClick={() => onMapClicked()}
            >
              <div>
                <h2>{selectedMarker.description}</h2>
                <p>{selectedMarker.type}</p>
                <p>{selectedMarker.location}</p>
                <p>{selectedMarker.report_date}</p>
              </div>
            </InfoWindow>
          </>
        ) : (
          "no data availible"
        )}
      </GoogleMap>
    </>
  ) : (
    <></>
  );
}
