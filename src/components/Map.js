import React from "react";
import {
  GoogleMap,
  MarkerF,
  useJsApiLoader,
  InfoWindow,
  InfoWindowF,
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

export default function Map(props) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB2uJKCQKkpNAJr4JBBBCwUH1CSETIEgmE",
  });

  const [map, setMap] = useState(null);
  const [data, setData] = useState([]);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [coors, setCoors] = useState();
  const [selectedMarker, setSelectedMarker] = useState();
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  const [token, setToken] = useState(props.token); 
//   let t = IVBDcEovRGtzL0RhOUdrUFdjaDZuQ0E9PT9nQVdWRVFBQUFBQUFBQUNNQjNWelpYSmZhV1NVakFFeGxJYVVMZz09

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  useEffect(() => {
    console.log(props)
    // if(token){

    fetch(
      `https://crimemap.hopto.org/get/incidents?token=IVBDcEovRGtzL0RhOUdrUFdjaDZuQ0E9PT9nQVdWRVFBQUFBQUFBQUNNQjNWelpYSmZhV1NVakFFeGxJYVVMZz09`
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
    }
//   }
  , []);

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();

  //     try {
  //       const res = await fetch("https://crimemap.hopto.org/login", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           username: "admin",
  //           password: "admin",
  //         }),
  //       });
  //       const json = await res.json();
  //       setResponse(json);
  //     } catch (err) {
  //       setError(err);
  //     }
  //   };
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

  // useEffect(()=> {
  //   if(showInfoWindow){
  //     <InfoWindowF

  //           marker={selectedMarker}
  //           visible={showInfoWindow}
  //           position={{
  //             lat: selectedMarker.latitude,
  //             lng: selectedMarker.longitude,
  //           }}
  //           onCloseClick={() => setSelectedMarker(null)}
  //         >

  //         <h2>Info Box</h2>
  //         <p>This is some information about the marker.</p>

  //         </InfoWindowF>

  //   }
  // }, [showInfoWindow])

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
        zoom={2}
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
