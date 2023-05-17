//Gets the directions between two points -- takes user input of places and finds directions

// Import React and hooks from the react package
import React, { useEffect } from "react";
import { useState, useCallback } from "react";
import {
  Navbar,
  Button,
  FormControl,
  Form,
  Col,
  Row,
  Container,
} from "react-bootstrap";

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
  height: "500px",
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
  const [colorAssignments, setColorAssignments] = useState(["red", "red", "red"]);


  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const [score, setScore] = useState(0);
  const [score2, setScore2] = useState(0);

  const [token, setToken] = useState(
    "IVBDcEovRGtzL0RhOUdrUFdjaDZuQ0E9PT9nQVdWRVFBQUFBQUFBQUNNQjNWelpYSmZhV1NVakFFeGxJYVVMZz09"
  );

  const [destination, setDestination] = useState({
    lat: 39.66671,
    lng: -75.77605,
  });
  // Set up the useEffect hook to run once when the component mounts
  useEffect(() => {
    // Set the API key for the Geocode library
    Geocode.setApiKey("AIzaSyCB4V63QJ8uz0HDmMrr_KUkuz85VcbZEZU");
    // Geocode a default origin location using the OpenCageGeocode API
    OpenCageGeocode.geocode({
      q: "Trabant university center",
      key: geoKey,
    }).then((response) => {
      // Set the origin state variable based on the geocode response
      setOrigin(response.results[0].geometry);

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
    // setCount(0);
    // setCount2(0);
    // setCount3(0);
    // Geocode the origin and destination locations using the Geocode library
    const originResponse = await Geocode.fromAddress(originInput);
    const destinationResponse = await Geocode.fromAddress(destinationInput);
    // Extract the latitude and longitude coordinates from the geocode responses
    const origin = originResponse.results[0].geometry.location;
    const destination = destinationResponse.results[0].geometry.location;

    // Set the origin and destination state variables based on the geocode responses
    setOrigin(origin);
    setDestination(destination);
    // Set the loading state variable to false
    setLoading(false);
  };

  const calculateSteps = (i) => {
    console.log(i);

    const stepsArray = [];
    if (i.routes[0]) {
      i.routes[0].legs.forEach((leg) => {
        leg.steps.forEach((step) => {
          const polyline = step.path;
          polyline.forEach((point) => {
            stepsArray.push({ lat: point.lat(), lng: point.lng() });
          });
        });
      });
    }
    const stepsArray_2 = [];
    if (i.routes[1]) {
      i.routes[1].legs.forEach((leg) => {
        leg.steps.forEach((step) => {
          const polyline = step.path;
          polyline.forEach((point) => {
            stepsArray_2.push({ lat: point.lat(), lng: point.lng() });
          });
        });
      });
    }

    const stepsArray_3 = [];

    if (i.routes[2]) {
      i.routes[2].legs.forEach((leg) => {
        leg.steps.forEach((step) => {
          const polyline = step.path;
          polyline.forEach((point) => {
            stepsArray_3.push({ lat: point.lat(), lng: point.lng() });
          });
        });
      });
    }

    const fetches = stepsArray.map((step) => {
      return fetch(
        `https://api.crimemap.hopto.org/get/incidents?filter=(latitude >= ${
          step.lat
        } AND latitude <= ${step.lat + 0.0002} AND longitude >= ${
          step.lng
        } AND longitude <= ${step.lng + 0.0002})&token=${token}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          return data;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });

    Promise.all(fetches)
      .then((dataArr) => {
        dataArr.forEach((data) => {
          calculateScore(data);
        });
      })
      .catch((error) => console.error("Error:", error));

    const fetches_2 = stepsArray_2.map((step) => {
      return fetch(
        `https://api.crimemap.hopto.org/get/incidents?filter=(latitude >= ${
          step.lat
        } AND latitude <= ${step.lat + 0.0002} AND longitude >= ${
          step.lng
        } AND longitude <= ${step.lng + 0.0002})&token=${token}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          return data;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });

    Promise.all(fetches_2)
      .then((dataArr) => {
        dataArr.forEach((data) => {
          calculateScore2(data);
        });
      })
      .catch((error) => console.error("Error:", error));

    const fetches_3 = stepsArray_3.map((step) => {
      return fetch(
        `https://api.crimemap.hopto.org/get/incidents?filter=(latitude >= ${
          step.lat
        } AND latitude <= ${step.lat + 0.0002} AND longitude >= ${
          step.lng
        } AND longitude <= ${step.lng + 0.0002})&token=${token}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          return data;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });

    Promise.all(fetches_3)
      .then((dataArr) => {
        dataArr.forEach((data) => {
          calculateScore3(data);
        });
      })
      .catch((error) => console.error("Error:", error));
  };

  const calculateScore = useCallback((response) => {
    setCount((prevCount) => {
      let tmpCount = prevCount;

      if (!response.data.submitted) {
        if (Array.isArray(response.data)) {
          for (let j = 0; j < response.data.length; j++) {
            tmpCount += response.data[j].tier * 10;
          }
        } else {
          tmpCount += response.data.tier * 10;
        }
      }
      setScore(tmpCount);

      return tmpCount;
    });
  }, []);

  const calculateScore2 = useCallback((response) => {
    setCount2((prevCount2) => {
      let tmpCount2 = prevCount2;

      if (!response.data.submitted) {
        if (Array.isArray(response.data)) {
          for (let j = 0; j < response.data.length; j++) {
            tmpCount2 += response.data[j].tier * 10;
          }
        } else {
          tmpCount2 += response.data.tier * 10;
        }
      }

      return tmpCount2;
    });
  }, []);

  const calculateScore3 = useCallback((response) => {
    setCount3((prevCount2) => {
      let tmpCount2 = prevCount2;

      if (!response.data.submitted) {
        if (Array.isArray(response.data)) {
          for (let j = 0; j < response.data.length; j++) {
            tmpCount2 += response.data[j].tier * 10;
          }
        } else {
          tmpCount2 += response.data.tier * 10;
        }
      }

      return tmpCount2;
    });
  }, []);

  // Set up another useEffect hook to run whenever the start state variable changes
  useEffect(() => {
    console.log("start", count);
    console.log("start 2", count2);
    console.log("start 3", count3);
  }, [count, count2, count3]);

  

//   function getColorsFromColorCounts(route1CrimeCount, route2CrimeCount, route3CrimeCount) {
//     const colors = ["green", "yellow", "red"];
//     let colorAssignments = Array(3).fill("red");  // Assume all routes are "red" to start

//     const routes = [route1CrimeCount, route2CrimeCount, route3CrimeCount]
//         .map((route, i) => ({ index: i, count: route }))
//         .filter(route => route.count !== null && route.count !== undefined);  // Exclude routes with no count

//     if (routes.length === 1) {
//         colorAssignments[routes[0].index] = "green";  // If there's only one route, it's "green"
//     } else {
//         routes.sort((a, b) => a.count - b.count);  // Sort routes by count
//         for(let i = 0; i < routes.length; i++) {
//             colorAssignments[routes[i].index] = colors[i];  // Assign colors based on sorted order
//         }
//     }

//     return colorAssignments;
// }

// function getColorsFromColorCounts(route1CrimeCount, route2CrimeCount, route3CrimeCount) {
//   const colorsTwo = ["green", "red"];  // Define colors array for two routes
//   const colorsThree = ["green", "yellow", "red"];  // Define colors array for three routes
//   let colorAssignments = Array(3).fill("red");  // Assume all routes are "red" to start

//   const routes = [route1CrimeCount, route2CrimeCount, route3CrimeCount]
//       .map((route, i) => ({ index: i, count: route }))
//       .filter(route => route.count !== null && route.count !== undefined);  // Exclude routes with no count

//   routes.sort((a, b) => a.count - b.count);  // Sort routes by count

//   if (routes.length === 1) {
//       colorAssignments[routes[0].index] = "green";  // If there's only one route, it's "green"
//   } else if (routes.length === 2) {
//       for(let i = 0; i < routes.length; i++) {
//         colorAssignments[routes[i].index] = colorsTwo[i];  // Assign colors based on sorted order
//       }
//   } else {
//       for(let i = 0; i < routes.length; i++) {
//         colorAssignments[routes[i].index] = colorsThree[i];  // Assign colors based on sorted order
//       }
//   }

//   return colorAssignments;
// }

function getColorsFromColorCounts(route1CrimeCount, route2CrimeCount, route3CrimeCount) {
  const colorsTwo = ["green", "red"];  // Define colors array for two routes, reversed
  // const colorsThree = ["green", "yellow", "red"];  // Define colors array for three routes, reversed
  const colorsThree = ["green", "yellow", "red"];
  let colorAssignments = Array(3).fill("red");  // Assume all routes are "red" to start

  const routes = [route1CrimeCount, route2CrimeCount, route3CrimeCount]
      .map((route, i) => ({ index: i, count: route }))
      .filter(route => route.count !== null && route.count !== undefined);  // Exclude routes with no count

  routes.sort((a, b) => a.count - b.count);  // Sort routes by count

  if (routes.length === 1) {
      colorAssignments[routes[0].index] = "green";  // If there's only one route, it's "green"
  } else if (routes.length === 2) {
      for(let i = 0; i < routes.length; i++) {
        colorAssignments[routes[i].index] = colorsTwo[i];  // Assign colors based on sorted order
      }
  } else {
      for(let i = 0; i < routes.length; i++) {
        colorAssignments[routes[i].index] = colorsThree[i];  // Assign colors based on sorted order
      }
  }

  return colorAssignments;
}










  // const colorAssignments = getColorsFromColorCounts(count, count2, count3);

  // Render the component
  return (
    // Load the Google Maps API with the provided API key
    <LoadScript googleMapsApiKey="AIzaSyCB4V63QJ8uz0HDmMrr_KUkuz85VcbZEZU">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Direction Map</Navbar.Brand>
      </Navbar>
      <div>
        {/* Render a form to input origin and destination locations */}
        <Form inline onSubmit={handleSubmit}>
          <FormControl
            type="text"
            placeholder="Origin"
            className="mr-sm-2"
            value={originInput}
            onChange={(e) => setOriginInput(e.target.value)}
          />
          <FormControl
            type="text"
            placeholder="Destination"
            className="mr-sm-2"
            value={destinationInput}
            onChange={(e) => SetDestinationInput(e.target.value)}
          />
          <Button type="submit">Get Directions</Button>
        </Form>

        {loading ? (
          <div>Loading</div>
        ) : (
          <div>
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
                      setCount(0);
                      setCount2(0);
                      setCount3(0);
                      setDirections(response);

                      calculateSteps(response);

                      setColorAssignments(getColorsFromColorCounts(count, count2, count3));

                      setButtonPushed(false);
                    }
                  }}
                />
              )}

              {directions && (
                <>
                  <DirectionsRenderer
                    options={{
                      directions: directions,
                      routeIndex: 0,
                      polylineOptions: {
                        strokeColor: colorAssignments[0],
                      },
                    }}
                  />
                  {directions.routes[1] && (
                    <DirectionsRenderer
                      options={{
                        directions: directions,
                        routeIndex: 1,
                        polylineOptions: {
                          strokeColor: colorAssignments[1],
                        },
                      }}
                    />
                  )}
                  {directions.routes[2] && (
                    <DirectionsRenderer
                      options={{
                        directions: directions,
                        routeIndex: 2,
                        polylineOptions: {
                          strokeColor: colorAssignments[2],
                        },
                      }}
                    />
                  )}
                </>
              )}
            </GoogleMap>
          </div>
        )}
        <Container>
          <Form>
            <Row className="mb-3">
              <Col>
              <Form.Label>Route 1 Score: </Form.Label>
                <Form.Control
                  placeholder="Route 1 Score: "
                  value={count}
                  readOnly
                />
                <span>Color: {colorAssignments[0]}</span>
              </Col>
              {directions && directions.routes[1] && (
                <Col>
                 <Form.Label>Route 2 Score:</Form.Label>
                  <Form.Control
                    placeholder="Route 2 Score: "
                    value={count2}
                    readOnly
                  />
                  <span>Color: {colorAssignments[1]}</span>
                </Col>
              )}
              {directions && directions.routes[2] && (
                <Col>
                 <Form.Label htmlFor="disabledSelect">Route 3 Scores: </Form.Label>
                  <Form.Control
                    placeholder="Route 3 Score: "
                    value={count3}
                    readOnly
                  />
                  <span>Color: {colorAssignments[2]}</span>
                </Col>
              )}
            </Row>
          </Form>
        </Container>
      </div>
    </LoadScript>
  );
}
