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
  const [token, setToken] = useState(props.token);
  const [directions, setDirections] = React.useState(null);

  const directionsCallback = React.useCallback((response) => {
    if (response !== null) {
      setDirections(response);
    }
  }, []);

  //   let token = IVBDcEovRGtzL0RhOUdrUFdjaDZuQ0E9PT9nQVdWRVFBQUFBQUFBQUNNQjNWelpYSmZhV1NVakFFeGxJYVVMZz09

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  useEffect(() => {
    console.log(props);

    fetch(
      `https://crimemap.hopto.org/get/incidents?token=IVBDcEovRGtzL0RhOUdrUFdjaDZuQ0E9PT9nQVdWRVFBQUFBQUFBQUNNQjNWelpYSmZhV1NVakFFeGxJYVVMZz09`
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

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
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={() => onMapClicked()}
      >
        {directions && <DirectionsRenderer directions={directions} />}
        <DirectionsService
          options={{
            destination: destination,
            origin: origin,
            travelMode: "DRIVING",
          }}
          callback={directionsCallback}
        />
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
