//two buttons to get all of the markers, and a button and a user input for getting a single marker

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
import { json } from "react-router-dom";
import { Button, Offcanvas } from "react-bootstrap";

// Set the container size and center coordinates for the Google Map
const containerStyle = {
  width: "500px",
  height: "750px",
};

const center = {
  lat: 39.677956,
  lng: -75.7509,
};
// Set the origin and destination coordinates for the DirectionsService
const origin = {
  lat: 39.68363,
  lng: -75.74546,
};

const destination = {
  lat: 39.66671,
  lng: -75.77605,
};

export default function Map(props) {
   // Load the Google Maps API and set the state for the Google Map and other variables
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCB4V63QJ8uz0HDmMrr_KUkuz85VcbZEZU",
  });

  const [map, setMap] = useState(null);
  const [data, setData] = useState([]);
  const [coors, setCoors] = useState();
  const [selectedMarker, setSelectedMarker] = useState();
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  const [test, setTest] = useState([]);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [token, setToken] = useState(
    "IVBDcEovRGtzL0RhOUdrUFdjaDZuQ0E9PT9nQVdWRVFBQUFBQUFBQUNNQjNWelpYSmZhV1NVakFFeGxJYVVMZz09"
  );
  const [directions, setDirections] = useState(null);
  const [num, setNum] = useState(0);
  const [allMarkers, setAllMarkers] = useState(false);
  const [oneMarker, setOneMarker] = useState(false);

  // Set the callback function for the DirectionsService
  const directionsCallback = React.useCallback((response) => {
    if (response !== null) {
      setDirections(response);
    }
  }, []);

  // Set the onLoad and onUnmount callback functions for the Google Map
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  // Set the event handler for filtering the number of markers to display
  const handleNumberChange = (e) => {
    let value = parseInt(e.target.value);
    if (isNaN(value) === true) {
      value = data.length;
    }
    setNum(value);
  };
  // Set the state for displaying all markers or only one marker
  const allMarkersTrue = () => {
    setAllMarkers(true);
    setOneMarker(false);
  };

  const toggleOffcanvas = () => {
    setShowOffcanvas((prevShowOffcanvas) => !prevShowOffcanvas);
  };

  

  useEffect(() => {
    console.log(props);

     // fetch data from API and set it to state
    fetch(
      `https://api.crimemap.hopto.org/get/incidents?token=IVBDcEovRGtzL0RhOUdrUFdjaDZuQ0E9PT9nQVdWRVFBQUFBQUFBQUNNQjNWelpYSmZhV1NVakFFeGxJYVVMZz09`
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  const handleFilterNumberChange = () => {
    let len = data.length - num; // calculate length of filtered data

    if (data) {
      // fetch filtered data from API and set it to state
      fetch(
        `https://api.crimemap.hopto.org/get/incidents?filter=(entry_id=${num})&token=${token}`
      )
        .then((response) => response.json())
        .then((json) => {
          setTest(json); // set filtered data to state
          console.log(json);
        })
        .catch((error) => console.error(error));
    }
  };

  const handleMarker = () => {
    console.log(test); // log test state to console
    if (test.data) {
      setAllMarkers(false); // set allMarkers to false
      setOneMarker(true); // set oneMarker to true
      setData([]); // clear data state
    }
  };

  useEffect(() => {
    console.log("hello", test); // log test state to console
  }, [test]);

  const onMarkerClick = (e) => {
    setSelectedMarker(e); // set selected marker to clicked marker
    console.log(e.description);  // log description of clicked marker to console
    console.log("hello", showInfoWindow);  // log showInfoWindow state to console
    setShowInfoWindow(true); // set showInfoWindow to true
  };
  const onMapClicked = () => {
    setShowInfoWindow(false); // set showInfoWindow to false
    console.log("false", showInfoWindow); // log showInfoWindow state to console
  };
  

  useEffect(() => {
    if (data.data) {
      // set coordinates for each data point and set it to state
      data.data.map((d) => {
        const newCoors = {
          lat: d.latitude,
          lng: d.longitude,
        };
        setCoors(newCoors);
      });
      console.log(data); // log data state to console
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
      {/* <button onClick={allMarkersTrue}>Get all of markers</button> */}
      <Button variant="primary" onClick={toggleOffcanvas} className="me-2">Open offcanvas</Button>
      <Offcanvas show={showOffcanvas} onHide={toggleOffcanvas}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Options</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
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
    <Button variant="primary" onClick={allMarkersTrue} className="me-2">
      Get all of the Markers
    </Button>
    <button
      onClick={() => {
        handleFilterNumberChange();
        handleMarker();
      }}
    >
      One marker
    </button>
        </Offcanvas.Body>

      </Offcanvas>
      {/* <button
        onClick={() => {
          handleFilterNumberChange();
          handleMarker();
        }}
      >
        One marker
      </button> */}

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={() => onMapClicked()}
      >
        {/* Child components, such as markers, info windows, etc. */}

        {allMarkers ? (
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
        ) : oneMarker ? (
          <MarkerF
            key={test.data.entry_id}
            onClick={() => onMarkerClick(test)}
            position={{ lat: test.data.latitude, lng: test.data.longitude }}
          />
        ) : (
          "no data avalible"
        )}
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
