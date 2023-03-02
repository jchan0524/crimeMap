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

const containerStyle = {
  width: "500px",
  height: "750px",
};

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
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB2uJKCQKkpNAJr4JBBBCwUH1CSETIEgmE",
  });

  const [map, setMap] = useState(null);
  const [data, setData] = useState([]);
  const [coors, setCoors] = useState();
  const [selectedMarker, setSelectedMarker] = useState();
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  const [test, setTest] = useState([]);
  const [token, setToken] = useState(
    "IVBDcEovRGtzL0RhOUdrUFdjaDZuQ0E9PT9nQVdWRVFBQUFBQUFBQUNNQjNWelpYSmZhV1NVakFFeGxJYVVMZz09"
  );
  const [directions, setDirections] = useState(null);
  const [num, setNum] = useState(0);
  const [allMarkers, setAllMarkers] = useState(false);
  const [oneMarker, setOneMarker] = useState(false);

  const directionsCallback = React.useCallback((response) => {
    if (response !== null) {
      setDirections(response);
    }
  }, []);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const handleNumberChange = (e) => {
    let value = parseInt(e.target.value);
    if (isNaN(value) === true) {
      value = data.length;
    }
    setNum(value);
  };
  const allMarkersTrue = () => {
    setAllMarkers(true);
    setOneMarker(false);
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

  const handleFilterNumberChange = () => {
    let len = data.length - num;

    if (data) {
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
  };

  const handleMarker = () => {
    console.log(test);
    if (test.data) {
      setAllMarkers(false);
      setOneMarker(true);
      setData([]);
    }
  };

  useEffect(() => {
    console.log("hello", test);
  }, [test]);

  const onMarkerClick = (e) => {
    setSelectedMarker(e);
    console.log(e.description);
    console.log("hello", showInfoWindow);
    setShowInfoWindow(true);
  };
  const onMapClicked = () => {
    setShowInfoWindow(false);
    console.log("false", showInfoWindow);
  };

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
      <button onClick={allMarkersTrue}>Get all of markers</button>
      <button
        onClick={() => {
          handleFilterNumberChange();
          handleMarker();
        }}
      >
        One marker
      </button>

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
